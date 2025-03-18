type ModsProps =Record<string,boolean|string>;

export const classNames =(cls:string, mods:ModsProps = {}, additional:string[]|string = ''): string => {
    const classes = [cls];

    Object.entries(mods).forEach(([key, value]) => {
        if (value) {
            classes.push(key)
        }
    })

    if (additional) {
        if (typeof additional === 'string') {
            classes.push(additional)
        } else if (Array.isArray(additional)) {
            classes.push(...additional)
        }
    }

    return classes.filter(Boolean).join(' ')
}

// закончил класснеймс