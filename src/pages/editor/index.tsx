import React, { useState } from "react"
import { useHistory } from "react-router-dom"

import { MaterialSchema, materialSchemas, materials } from '../../materials'
import { v4 as uuidv4 } from 'uuid'

const Editor = () => {
    const history = useHistory()

    const [renderMaterials, setRenderMaterials] = useState<MaterialSchema[]>([])

    const goToHome = () => {
        history.push('/')
    }

    const onDragStart = (e: React.DragEvent<HTMLDivElement>, renderMaterial: MaterialSchema) => {
        renderMaterial.uuid = uuidv4()
        e.dataTransfer.setData("renderMaterial", JSON.stringify(renderMaterial))
        console.log(e)
    }

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        console.log(e.nativeEvent.offsetX, e.nativeEvent.offsetY, e.dataTransfer.getData('renderMaterial'))
        const _renderMaterial = JSON.parse(e.dataTransfer.getData('renderMaterial')) as MaterialSchema
        _renderMaterial.style.top = e.nativeEvent.offsetY
        _renderMaterial.style.left = e.nativeEvent.offsetX
        setRenderMaterials([...renderMaterials, _renderMaterial])
    }
    return (
        <div className="relative h-screen">
            <header className="absolute top-0 w-full h-12 px-3 flex items-center text-gray-200 bg-gray-900">
                <button onClick={goToHome}>🧩</button>
            </header>
            <div className="h-full pt-12 flex">
                <div className="flex w-60 border-r">
                        {
                            materialSchemas.map((materialSchema) => {
                                return (
                                    <div key={materialSchema.material} className="flex items-center px-4 h-8 border m-2" draggable={true} onDragStart={(e) => {onDragStart(e, materialSchema)}} >
                                        {materialSchema.value}
                                    </div>
                                )
                            })
                        }
                </div>
                <div className="relative p-4 overflow-scroll flex-1 bg-gray-200" >
                    <div onDrop={handleDrop} onDragOver={(e) => {e.preventDefault()}} className="relative bg-white border hover:border-green-500" style={{width: 1440, height: 1024}}>
                        {
                            renderMaterials.map((renderMaterial) => {
                                const Material = materials[renderMaterial.material]

                                return <Material key={renderMaterial.uuid} schema={renderMaterial}/>
                            })
                        }
                    </div>
                </div>
                <div className="w-60 border-l">
                </div>
            </div>
        </div>
    )
}

export default Editor