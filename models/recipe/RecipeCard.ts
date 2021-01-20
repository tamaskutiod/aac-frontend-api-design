import Picture from "../shared/Picture";

interface RecipeCard {
    name: string,
    rating: number,
    numberOfRatings: number,
    hasVideo: boolean,
    image: Picture,
    activeDuration: number, // 1)
    difficultyName: string,
    slug: string,
    id: number // 2)
}

export default RecipeCard;

// 1) The duration of the baking time and the preperation times
// in minutes. We exclude the "cooling" and "resting" times when 
// displaying it on the card.

// 2) ID is needed for sending favorites and determening if 
// the current recipe is part of of the authernticated user's
// favorite-list
