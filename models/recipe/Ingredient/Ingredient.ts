import ProductLink from "./ProductLink";

interface Ingredient {
    name: string,
    unit?: string,
    amount?: number,
    product?: ProductLink
}

export default Ingredient;
