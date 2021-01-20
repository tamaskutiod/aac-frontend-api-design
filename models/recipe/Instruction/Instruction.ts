import Picture from "../../shared/Picture";
import Tip from "./Tip";

interface Instruction {
    text: string,
    images?: Picture[],
    tip?: Tip
}

export default Instruction;
