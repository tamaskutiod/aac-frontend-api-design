interface ShouldKnow {
    text: string // 1)
}

// 1) In the current Mobile API the "shouldKnows" section
// is a simple array of strings and on the current website it's also
// just a list of strings,
// but in the new design there's a proposal to add a title to it as well.
// This is not 100% sure at the time of writting, so we won't add
// a field on the modal, but having an object for this makes it more extensible for such changes
// @see: https://www.figma.com/file/aH0RhMexVr3zPfZLZCQKI5/recipe-page-template?node-id=1%3A108
// @see: https://backen.de/api/v4/recipe/7189
// @see: https://backen.de/rezept/schoko-nuss-kuchen

export default ShouldKnow;
