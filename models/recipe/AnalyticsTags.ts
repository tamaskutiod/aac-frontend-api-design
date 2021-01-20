enum Placeholders {
    NOT_SET = "not set"
}

interface AnalyticsTags {
    brands: string|Placeholders.NOT_SET,
    assortments: string|Placeholders.NOT_SET,
    products: string|Placeholders.NOT_SET
}

export default AnalyticsTags;
