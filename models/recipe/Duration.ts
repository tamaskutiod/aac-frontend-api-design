interface Duration {
    preparation: number, // 1)
    baking?: number,
    cooling?: number, // 2)
    resting?: number, // 2)
}

// 1) Technically only the "prepation" steps are required
// there are lot of recipes that don't require baking
// eg.: https://backen.de/rezept/kinder-maxi-king-torte
// but then either cooling or resting (or both) will be added
// so you can't end up with a recipe that only has "preparation"

// 2) The logic here is that a Recipe can have 
// Only cooling time OR only resting time, but IF
// it has BOTH cooling and resting, then these two have to be
// summed up in the output
// for example most recipes habe BOTH, therfor they display:
// "45 Min Kühlen & Ruhen"
// eg.: https://backen.de/rezept/walnuss-ahorn-rollen
// on the other hand there are some recipes that don't have to be cooled,
// but they do need some resting...
// in this case we should output:
// "1 Std. 30 Min. Ruhen"
// eg.: https://backen.de/rezept/spaghetti-eis-poke-cake
// this should be done by the client, just as the summing up the durations' of the different
// steps and adding time formatting

export default Duration;
