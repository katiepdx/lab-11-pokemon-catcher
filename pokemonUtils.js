export function getRandomPokemon(pokemonArray) {
    // get a random index in pokemonArray
    const randomPokemonIndex = Math.floor(Math.random() * pokemonArray.length);
    
    //return a random position in pokemonArray
    return pokemonArray[randomPokemonIndex];
}
