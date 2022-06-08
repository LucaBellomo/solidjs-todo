export const removeIndex = <T>(array: readonly T[], index: number): T[] => {
    return array.filter((item, i) => i !== index)
}

export const toggleProp = <T>(items: T[], prop: keyof T, index: number) => {
    return items.map((t, i) => {
        if(index !== i) {
            return t
        } {
            return {...t, [prop]: !t[prop]}
        }
    });
}
