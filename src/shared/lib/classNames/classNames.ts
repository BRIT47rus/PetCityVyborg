interface classNamesProps {
    mainClass: string;
    mods: Record<string, boolean | string>;
    additional: string | string[];
}
export const classNames = ({ mainClass, mods = {}, additional = '' }: classNamesProps): string => {
    const classes = [mainClass];



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