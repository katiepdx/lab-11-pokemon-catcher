import { pokemonArray } from './data/pokemonArray.js';
import { getRandomPokemon } from './pokemonUtils.js';
// import { pokemonStats } from './data/pokemonStats.js';

// import functions and grab DOM elements
const totalRounds = document.getElementById('total-rounds');
const totalPokemonSeen = document.getElementById('total-pokemon-seen');
const pokemonImgTags = document.querySelectorAll('img');
const pokemonRadioTags = document.querySelectorAll('input');
const nextButton = document.getElementById('next-button');
//validation
// console.log(totalRounds, totalPokemonSeen, pokemonImgTags, pokemonRadioTags, nextButton);

// initialize state
const pokemon = pokemonArray.slice(); //copy of pokemonArray 
let gameRounds = 0;
let totalPokemonSeenCounter = 3;
// let pokemonEncountered = [];
// let pokemonStatsArrOfObj = pokemonStats.slice();//copy of pokemonStats array

// set event listeners to update state and DOM
function newDeck() {
    if (gameRounds === 10) {
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

    // //get checked value pokemon from pokemonRadioTags
    // const checkedPokemon = document.querySelector('input:checked');
    // pokemonRadioTags.forEach((radioTag, i) => {
    //     if (i === 0) {
    //         radioTag.value = randomPokemonImg1.pokemon;
    //     } else if (i === 1) {
    //         radioTag.value = randomPokemonImg2.pokemon;
    //     } else if (i === 2) {
    //         radioTag.value = randomPokemonImg3.pokemon;
    //     }
    // });
    // //validate got checked value (in this case, pokemon name) of radioTag
    // console.log(checkedPokemon.value);
}

newDeck();

//add event listener to each of the radioTags. 
pokemonRadioTags.forEach((radioTag) => {
    radioTag.addEventListener('click', (e) => {
        //validate eventListener is on each radio button
        // console.log(e.target.value);
        return e;
    });
});

nextButton.addEventListener('click', () => {
    //update game rounds
    gameRounds = gameRounds + 1;
    // console.log(gameRounds);
    //update round number on page
    totalRounds.textContent = `Round: ${gameRounds + 1}`;

    //update totalPokemonSeen counter
    totalPokemonSeenCounter = totalPokemonSeenCounter + 3;
    // console.log(totalPokemonSeenCounter);
    //update totalPokemonSeenCounter number on page
    totalPokemonSeen.textContent = `Total Pokemon Seen: ${totalPokemonSeenCounter}`;

    //new deck of pokemon
    newDeck();
});

