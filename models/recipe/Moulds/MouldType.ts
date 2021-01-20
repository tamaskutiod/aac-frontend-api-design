import MouldSize from "./MouldSize";

interface MouldType {
    id: number,
    name: string,
    isDefault: boolean,
    sizes: MouldSize[]
}

export default MouldType;
