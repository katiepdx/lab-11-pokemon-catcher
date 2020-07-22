import { pokemonArray } from './data/pokemonArray.js';
import { getRandomPokemon, getCurrentPokemonCatalog, addPokemonCaptures } from './pokemonUtils.js';
// import { pokemonStats } from './data/pokemonStats.js';

// import functions and grab DOM elements
const totalRounds = document.getElementById('total-rounds');
const totalPokemonSeen = document.getElementById('total-pokemon-seen');
const pokemonImgTags = document.querySelectorAll('img');
const pokemonRadioTags = document.querySelectorAll('input');
//validation
// console.log(totalRounds, totalPokemonSeen, pokemonImgTags, pokemonRadioTags);

// initialize state
const pokemon = pokemonArray.slice(); //copy of pokemonArray 
let gameRounds = 0;
let totalPokemonSeenCounter = 3;
let pokemonEncountered = [];
let localStoragePokemonStats = getCurrentPokemonCatalog();

//load localStoragePokemonStats
localStoragePokemonStats;

// set event listeners to update state and DOM
function newDeck() {
    if (pokemonEncountered.length === 10) {
        localStorage.removeItem('POKEMON CATALOG');
        window.location.href = '../results-page/results.html';
    }
    const randomPokemonImg1 = getRandomPokemon(pokemon);
    let randomPokemonImg2 = getRandomPokemon(pokemon);
    let randomPokemonImg3 = getRandomPokemon(pokemon);
    pokemonImgTags[0].src = randomPokemonImg1.url_image;
    pokemonImgTags[1].src = randomPokemonImg2.url_image;
    pokemonImgTags[2].src = randomPokemonImg3.url_image;
    
    while (randomPokemonImg1 === randomPokemonImg2 || randomPokemonImg2 === randomPokemonImg3 || randomPokemonImg1 === randomPokemonImg3) {
        randomPokemonImg2 = getRandomPokemon(pokemon);
        randomPokemonImg3 = getRandomPokemon(pokemon);
        pokemonImgTags[0].src = randomPokemonImg1.url_image;
        pokemonImgTags[1].src = randomPokemonImg2.url_image;
        pokemonImgTags[2].src = randomPokemonImg3.url_image;
    }

    //get checked value pokemon from pokemonRadioTags
    pokemonRadioTags.forEach((radioTag, i) => {
        if (i === 0) {
            radioTag.value = randomPokemonImg1.pokemon;
        } else if (i === 1) {
            radioTag.value = randomPokemonImg2.pokemon;
        } else if (i === 2) {
            radioTag.value = randomPokemonImg3.pokemon;
        }
    });
}

newDeck();

//add event listener to each of the radioTags. 
pokemonRadioTags.forEach((radioTag) => {
    radioTag.addEventListener('click', (e) => {
        // const checkedPokemon = document.querySelector('input:checked');
        //validate got checked value (in this case, pokemon name) of radioTag
        // console.log(checkedPokemon.value);

        pokemonEncountered.push(e.target.value);
        // console.log(pokemonEncountered);

        gameRounds = gameRounds + 1;
        totalRounds.textContent = `Round: ${gameRounds + 1}`;

        totalPokemonSeenCounter = totalPokemonSeenCounter + 3;
        totalPokemonSeen.textContent = `Total Pokemon Seen: ${totalPokemonSeenCounter}`;

        addPokemonCaptures(localStoragePokemonStats, e.target.value);
        // console.log('TARGET', typeof e.target.value);

        newDeck();
    });
});


