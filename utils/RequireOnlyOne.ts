// https://stackoverflow.com/questions/40510611/typescript-interface-require-one-of-two-properties-to-exist
type RequireOnlyOne<T, Keys extends keyof T = keyof T> =
    Pick<T, Exclude<keyof T, Keys>>
    & {
        [K in Keys]-?:
            Required<Pick<T, K>>
            & Partial<Record<Exclude<Keys, K>, undefined>>
    }[Keys]

export default RequireOnlyOne;