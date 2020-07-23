// IMPORT MODULES under test here:
import { findById, mungeCaptured, mungeEncountered, /*mungeRatingPokemon*/ } from '../pokemonUtils.js';

const test = QUnit.test;

let pokemonStats = [
    {
        pokemon: 'bulbasaur',
        encountered: 1,
        captured: 0,
        rating: 0
    },
    {
        pokemon: 'venusaur-mega',
        encountered: 2,
        captured: 2,
        rating: 0
    }];

test('it should take in an array and an id and findById function will return first item found matching the passed id', function(assert) {
    //Arrange
    // Parameters and arguments
    const pokemonName1 = 'bulbasaur';
    const pokemonName2 = 'venusaur-mega';
    const expected1 = pokemonStats[0];    
    const expected2 = pokemonStats[1];

    //Act 
    //Calling the function and setting the result to the const actual
    //Takes in pokemon item name and checks it against pokemonStats for same name
    const actual1 = findById(pokemonStats, pokemonName1);
    const actual2 = findById(pokemonStats, pokemonName2);

    //Assert
    assert.equal(expected1, actual1);
    assert.equal(expected2, actual2);
});

test('this function takes in the localStorage pokemon stats and returns an array of the captured values', function(assert) {
    //Arrange
    // Parameters and arguments
    const expectedCaptureArr = [0, 2];

    //Act 
    //Calling the function and setting the result to the const actual
    const actual1 = mungeCaptured(pokemonStats);

    //Assert
    assert.deepEqual(expectedCaptureArr, actual1);
});

test('this function takes in the localStorage pokemon stats and returns an array of the encountered', function(assert) {
    //Arrange
    // Parameters and arguments
    const expectedNamesEncounteredArr = [1, 2];

    //Act 
    //Calling the function and setting the result to the const actual
    const actual1 = mungeEncountered(pokemonStats);

    //Assert
    assert.deepEqual(expectedNamesEncounteredArr, actual1);
});

// test('this mungeRatingPokemon function takes in the localStorage pokemon stats and returns an array of the pokemon rating, score 0 = never encountered, 1 = encountered but not chosen, 2 = encountered and chosen', function(assert) {
//     //Arrange
//     // Parameters and arguments
//     const expectedRatingPokemon = [1, 2];

//     //Act 
//     //Calling the function and setting the result to the const actual
//     const actual1 = mungeRatingPokemon(pokemonStats);

//     //Assert
//     assert.deepEqual(expectedRatingPokemon, actual1);
// });
