import Picture from "../shared/Picture";

interface ProductCard {
    href: string,
    name: string,
    brand?: string,
    price: number,
    image: Picture
}

export default ProductCard;
