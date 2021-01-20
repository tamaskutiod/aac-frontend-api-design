import Picture from "../shared/Picture";
import Video from "../shared/Video";
import Author from "../shared/Author";
import Difficulty from "./Difficulty";
import ServingAmount from "./ServingAmount";
import Duration from "./Duration";
import ShouldKnow from "./ShouldKnow";
import Ingredient from "./Ingredient/Ingredient";
import AnalyticsTags from "./AnalyticsTags";
import Utensil from "./Utensil";
import InspirationCard from "./InspirationCard";
import RecipeCard from "./RecipeCard";
import Instruction from "./Instruction/Instruction";
import MouldType from "./Moulds/MouldType";

interface Recipe {
    id: number, // 4)
    inspirationCards: InspirationCard[],
    gallery: Picture[],
    video?: Video,
    name: string,
    rating: number,
    numberOfRatings: number,
    description: string,
    author: Author, // 1)
    difficulty: Difficulty,
    servingAmount: ServingAmount,
    duration: Duration,
    moulds?: MouldType[],
    shouldKnows?: ShouldKnow[],
    ingredients: Ingredient[],
    isSponsoredContent: boolean, // 2)
    utensils: Utensil[],
    instructions: Instruction[],
    recommendedRecipes?: RecipeCard[],
    analyticsTags: AnalyticsTags // 3)
}

export default Recipe;

// 1) At the time of writting the recipes 
// don't have an Author field but the design suggests that we need one
// Currently Magazine Articles have such a field so the data is there in
// Pimcore. If we implement this the old recipes have to be retrofitted
// so the field has to be optional.
// @see https://www.figma.com/file/aH0RhMexVr3zPfZLZCQKI5/recipe-page-template?node-id=1%3A108
// @see https://backen.de/magazin/warmer-genuss-an-kalten-tagen

// 2) Controlls the appearance of a label that marks the recipe as 
// "Paid Content", this is needed for legal reasons and is determined
// based on brands associated with products linked to
// ingredients/utensils
// @see https://jira.oetkerdigital.com/browse/PBOT-2499

// 3) Coma separated list of "tags" that are meant to be sent to 
// Google Analytics to track brand-partnership performance
// @see https://jira.oetkerdigital.com/browse/PBOT-1929

// 4) ID is needed for sending favorites and determening if 
// the current recipe is part of of the authernticated user's
// favorite-list