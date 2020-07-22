import { pokemonStats } from './data/pokemonStats.js';

export function getRandomPokemon(pokemonArray) {
    // get a random index in pokemonArray
    const randomPokemonIndex = Math.floor(Math.random() * pokemonArray.length);
    
    //return a random position in pokemonArray
    return pokemonArray[randomPokemonIndex];
}

export function getCurrentPokemonCatalog() {
    //retrieves getCurrentPokemonCatalog items from localStorage
    let rawCurrentPokemonCatalog = JSON.parse(localStorage.getItem('POKEMON STATS'));

    //if there isn't anything
    if (!rawCurrentPokemonCatalog) {
        //seed the catalog (set items) with starter items in localStorage 
        localStorage.setItem('POKEMON STATS', JSON.stringify(pokemonStats));

        //now set items to be the starter pokemon data in local storage
        rawCurrentPokemonCatalog = JSON.parse(localStorage.getItem('POKEMON STATS'));
    }
    //return rawCurrentPokemonCatalog here 
    return rawCurrentPokemonCatalog;
}

export function findById(pokemonArray, pokemonName) {
    //initialize item
    let pokemonMatch;
    //loop through array to find pokemon name matches 
    for (let i = 0; i < pokemonArray.length; i++) {
        //if the names are matches
        if (pokemonArray[i].pokemon === pokemonName) {
            pokemonMatch = pokemonArray[i];
            return pokemonMatch;
        }
    }
}

export function addPokemonCaptures(localStoragePokemonStats, pokemonName) {
    //find by id
    let matchedPokemon = findById(localStoragePokemonStats, pokemonName);

    //if there is a match
    if (matchedPokemon) {
        //increment the encountered counter for that pokemon 
        matchedPokemon.captured++;
    }
    
    //put the pokemon STATS back into local storage format
    const stringyLocalStoragePokemonStats = JSON.stringify(localStoragePokemonStats);
    //add updated STATS back to local storage
    localStorage.setItem('POKEMON STATS', stringyLocalStoragePokemonStats);
}

export function addPokemonEncountered(localStoragePokemonStats, pokemonName1, pokemonName2, pokemonName3) {
    //find by id
    let matchedPokemon1 = findById(localStoragePokemonStats, pokemonName1);
    let matchedPokemon2 = findById(localStoragePokemonStats, pokemonName2);
    let matchedPokemon3 = findById(localStoragePokemonStats, pokemonName3);

    //if there is a match
    if (matchedPokemon1) {
        //increment the encountered counter for that pokemon 
        matchedPokemon1.encountered++;
    }

    //if there is a match
    if (matchedPokemon2) {
        //increment the encountered counter for that pokemon 
        matchedPokemon2.encountered++;
    }

    //if there is a match
    if (matchedPokemon3) {
        //increment the encountered counter for that pokemon 
        matchedPokemon3.encountered++;
    }
    
    //put the pokemon STATS back into local storage format
    const stringyLocalStoragePokemonStats = JSON.stringify(localStoragePokemonStats);
    //add updated STATS back to local storage
    localStorage.setItem('POKEMON STATS', stringyLocalStoragePokemonStats);
}

export function mungeCaptured(localStoragePokemonStats) {
    let capturedPokemon = [];
    for (let i = 0; i < localStoragePokemonStats.length; i++) {
        let pokemon = localStoragePokemonStats[i];
        capturedPokemon.push(pokemon.captured);
    }
    return capturedPokemon;
}

export function mungeNames(localStoragePokemonStats) {
    let namePokemon = [];
    for (let i = 0; i < localStoragePokemonStats.length; i++) {
        let pokemon = localStoragePokemonStats[i];
        namePokemon.push(pokemon.pokemon);
    }
    return namePokemon;
}