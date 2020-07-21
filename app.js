import { pokemonArray } from './data/pokemonArray.js';
import { getRandomPokemon } from './pokemonUtils.js';

// import functions and grab DOM elements
const totalRounds = document.getElementById('total-rounds');
const pokemonImgTags = document.querySelectorAll('img');
const pokemonRadioTags = document.querySelectorAll('input');
const pokemonLabels = document.querySelectorAll('label');
const pokemonSelectionContainer = document.querySelector('pokemon-selection-container');
const nextButton = document.getElementById('next-button');
//validation
console.log(totalRounds, pokemonImgTags, pokemonRadioTags, pokemonSelectionContainer, nextButton, pokemonLabels);

// initialize state
const pokemon = pokemonArray.slice(); //copy of pokemonArray 
let gameRounds = 0;
let pokemonTimesCaptured = 0;
let pokemonCaptured = []; // array of pokemon captured
let pokemonNotCaptured = []; //array of not captured pokemon

// set event listeners to update state and DOM
function startGame() {
    const randomPokemonImg1 = getRandomPokemon(pokemon);
    let randomPokemonImg2 = getRandomPokemon(pokemon);
    let randomPokemonImg3 = getRandomPokemon(pokemon);
    pokemonImgTags[0].src = randomPokemonImg1.url_image;
    pokemonImgTags[1].src = randomPokemonImg2.url_image;
    pokemonImgTags[2].src = randomPokemonImg3.url_image;
    
    while (randomPokemonImg1 === randomPokemonImg2 || randomPokemonImg2 === randomPokemonImg3 || randomPokemonImg1 === randomPokemonImg3) {
        const randomPokemonImg1 = getRandomPokemon(pokemon);
        let randomPokemonImg2 = getRandomPokemon(pokemon);
        let randomPokemonImg3 = getRandomPokemon(pokemon);
        pokemonImgTags[0].src = randomPokemonImg1.url_image;
        pokemonImgTags[1].src = randomPokemonImg2.url_image;
        pokemonImgTags[2].src = randomPokemonImg3.url_image;
    }
}

startGame();

nextButton.addEventListener('click', () => {
    //update game rounds 
    gameRounds = gameRounds + 1;
    console.log(gameRounds);
    totalRounds.textContent = `Round: ${gameRounds + 1}`;
    startGame();
});

