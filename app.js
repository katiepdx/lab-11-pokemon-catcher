import { pokemonArray } from './data/pokemonArray.js';
import { getRandomPokemon } from './pokemonUtils.js';

// import functions and grab DOM elements
const pokemonImgTags = document.querySelectorAll('img');
const pokemonRadioTags = document.querySelectorAll('input');
const nextButton = document.getElementById('next-button');
//validation
console.log(pokemonImgTags, pokemonRadioTags, nextButton);

// initialize state
// const pokemon = pokemonArray.slice(); //copy of pokemonArray 
// let gameRounds = 0;
// let pokemonTimesCaptured = 0;
// let pokemonCaptured = []; // array of pokemon captured
// let pokemonNotCaptured = []; //array of not captured pokemon

// set event listeners to update state and DOM

nextButton.addEventListener('click', () => {
    let randomPokemonImg1 = getRandomPokemon(pokemonArray);
    let randomPokemonImg2 = getRandomPokemon(pokemonArray);
    let randomPokemonImg3 = getRandomPokemon(pokemonArray);
    pokemonImgTags[0].src = randomPokemonImg1.url_image;
    pokemonImgTags[1].src = randomPokemonImg2.url_image;
    pokemonImgTags[2].src = randomPokemonImg3.url_image;

    while (randomPokemonImg1 === randomPokemonImg2 || randomPokemonImg2 === randomPokemonImg3 || randomPokemonImg1 === randomPokemonImg3) {
        let randomPokemonImg1 = getRandomPokemon(pokemonArray);
        let randomPokemonImg2 = getRandomPokemon(pokemonArray);
        let randomPokemonImg3 = getRandomPokemon(pokemonArray);
        pokemonImgTags[0].src = randomPokemonImg1.url_image;
        pokemonImgTags[1].src = randomPokemonImg2.url_image;
        pokemonImgTags[2].src = randomPokemonImg3.url_image;
    }
});

