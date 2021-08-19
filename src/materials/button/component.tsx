import { Props } from ".."
import { getClassName } from "../../core"

const Button: React.FC<Props> = (props: Props) => {
    const { schema } = props
    const className = getClassName(schema.className)
    return (
        <button style={schema.style} className={className}>{schema.value}</button>
    )
}

export default Button