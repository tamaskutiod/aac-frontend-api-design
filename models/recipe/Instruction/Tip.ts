import Picture from "../../shared/Picture";
import Video from "../../shared/Video";
import RequireOnlyOne from "../../../utils/RequireOnlyOne";

interface ITip {
    text: string,
    video?: Video,
    image?: Picture
}

// Make sure that an object constructed with Tip type 
// has EITHER "video" or "image" field, but NOT BOTH
type Tip = RequireOnlyOne<ITip, "image"|"video">;

export default Tip;
