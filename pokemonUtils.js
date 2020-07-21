import { pokemonStats } from './data/pokemonStats.js';

export function getRandomPokemon(pokemonArray) {
    // get a random index in pokemonArray
    const randomPokemonIndex = Math.floor(Math.random() * pokemonArray.length);
    
    //return a random position in pokemonArray
    return pokemonArray[randomPokemonIndex];
}

export function getCurrentPokemonCatalog() {
    //retrieves getCurrentPokemonCatalog items from localStorage
    let rawCurrentPokemonCatalog = JSON.parse(localStorage.getItem('POKEMON CATALOG'));

    //if there isn't anything
    if (!rawCurrentPokemonCatalog) {
        //seed the catalog (set items) with starter items in localStorage 
        localStorage.setItem('POKEMON CATALOG', JSON.stringify(pokemonStats));

        //now set items to be the starter pokemon data in local storage
        rawCurrentPokemonCatalog = JSON.parse(localStorage.getItem('POKEMON CATALOG'));
    }
    //return rawCurrentPokemonCatalog here 
    return rawCurrentPokemonCatalog;
}