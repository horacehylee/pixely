export const createPropGetter = <DP extends object>(defaultProps: DP) => {
    return <P extends Partial<DP>>(props: P) => {
        type PropsExcludingDefaults = Pick<P, Exclude<keyof P, keyof DP>>
        type RecomposedProps = DP & PropsExcludingDefaults
        return (props as any) as RecomposedProps
    }
}