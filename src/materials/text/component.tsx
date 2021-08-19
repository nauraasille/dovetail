import { Props } from ".."

const Text: React.FC<Props> = (props:Props) => {
    const { schema } = props

    return (
        <div>{schema.value}</div>
    )
}

export default Text