export const getClassName = (className: Object) => {
    const result: string[] = []

    const getAllStringValue = (object: Object) => {
        Object.values(object).forEach(item => {
            if (typeof(item) === 'string' && item) {
                result.push(item)
            }
            if (Object.prototype.toString.call(item) === '[object Object]') {
                getAllStringValue(item)
            }
        })
    }


    getAllStringValue(className)
    return result.join(" ")
}

