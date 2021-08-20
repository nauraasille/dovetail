import { MaterialSchema } from ".."

const buttonSchema: MaterialSchema = {
    uuid: '',
    material: 'Button',
    value: 'button',
    style: {
        top: 0,
        left: 0,
    },
    className: {
        position: '',
        text: {
            size: 'text-sm',
            color: 'text-white'
        },
        bg: {
            color: 'bg-blue-500',
        },
        border: {
            radius: {
                default: 'rounded-sm',
                isSeparately: false
            }
        },
        effects: {
            boxShadow: {
                outer: 'shadow-md',
                inner: ''
            }
        },
        padding: {
            top: 'pt-2',
            right: 'pr-4',
            bottom: 'pb-2',
            left: 'pl-4'
        }
    }
}

export default buttonSchema