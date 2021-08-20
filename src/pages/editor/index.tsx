import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import { MaterialSchema, materialSchemas, materials } from '../../materials'
import { v4 as uuidv4 } from 'uuid'

const Editor = () => {
    const history = useHistory()

    const [renderMaterials, setRenderMaterials] = useState<MaterialSchema[]>([])
    const [activeMaterial, setActiveMaterial] = useState<MaterialSchema>()

    const goToHome = () => {
        history.push('/')
    }

    const onDragStart = (e: React.DragEvent<HTMLDivElement>, renderMaterial: MaterialSchema) => {
        renderMaterial.uuid = uuidv4()
        e.dataTransfer.setData("renderMaterial", JSON.stringify(renderMaterial))
    }

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        const _renderMaterial = JSON.parse(e.dataTransfer.getData('renderMaterial')) as MaterialSchema
        _renderMaterial.style.top = e.nativeEvent.offsetY
        _renderMaterial.style.left = e.nativeEvent.offsetX
        setRenderMaterials([...renderMaterials, _renderMaterial])
    }

    const onMaterialWrapClick= (schema: MaterialSchema) => {
        console.log(schema)
        setActiveMaterial(schema)
    }

    const onPropsChange = (prop: string, value: string) => {
        if (!activeMaterial) return
        const _renderMaterials = [...renderMaterials]
        _renderMaterials.map(material => {
            if (material.uuid === activeMaterial.uuid) {
                if (prop === 'x') {
                    const _style = {...material.style}
                    _style.left = +value
                    material.style = _style
                }
                if (prop === 'y') {
                    const _style = {...material.style}
                    _style.top = +value
                    material.style = _style
                }
            }
            return material
        })


        
        setRenderMaterials(_renderMaterials)
    }
    return (
        <div className="relative h-screen overflow-hidden">
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
                <div className="relative overflow-auto flex-1 bg-gray-200 shadow-inner" >
                    <div onDrop={handleDrop} onDragOver={(e) => {e.preventDefault()}} className="relative shadow-lg bg-white border hover:border-green-500 m-10" style={{width: 1440, height: 1024}}>
                        {
                            renderMaterials.map((renderMaterial) => {
                                const Material = materials[renderMaterial.material]

                                return (
                                    <div
                                        key={renderMaterial.uuid}
                                        style={renderMaterial.style}
                                        className={ activeMaterial?.uuid=== renderMaterial.uuid ? 'absolute border border-blue-800' : 'absolute'}
                                        onClick={() => {onMaterialWrapClick(renderMaterial)}}
                                    >
                                        <Material schema={renderMaterial}/>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="w-60 border-l">
                    {
                        activeMaterial && (
                            <div className="border-b">
                                <div className="grid grid-cols-2 p-3 text-sm">
                                    <label className="flex items-center">
                                        <span className="text-gray-400 mx-2">X</span>
                                        <input
                                            type="number"
                                            className="outline-none"
                                            value={activeMaterial.style.left}
                                            onChange={(e) => {onPropsChange('x', e.target.value)}}
                                        />
                                    </label>
                                    <label className="flex focus:border-blue-400">
                                        <span className="text-gray-400 mx-2">y</span>
                                        <input type="number" className="outline-none" value={activeMaterial.style.top} onChange={(e) => {onPropsChange('y', e.target.value)}} />
                                    </label>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}


export default Editor