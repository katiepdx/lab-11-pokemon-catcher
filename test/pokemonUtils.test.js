// IMPORT MODULES under test here:
import { findById, mungeCaptured, mungeEncountered } from '../pokemonUtils.js';

const test = QUnit.test;

let pokemonStats = [
    {
        pokemon: 'bulbasaur',
        encountered: 1,
        captured: 3
    },
    {
        pokemon: 'venusaur-mega',
        encountered: 0,
        captured: 2
    }];

test('it should take in an array and an id and findById function will return first item found matching the passed id', function(assert) {
    //Arrange
    // Parameters and arguments
    const itemId1 = 'ivysaur';
    const itemId2 = 'charmander';
    const expectedId1 = pokemonStats[2];    
    const expectedId2 = pokemonStats[3];

    //Act 
    //Calling the function and setting the result to the const actual
    //Takes in pokemon item name and checks it against pokemonStats for same name
    const actual1 = findById(pokemonStats, itemId1);
    const actual2 = findById(pokemonStats, itemId2);

    //Assert
    assert.equal(expectedId1, actual1);
    assert.equal(expectedId2, actual2);
});

test('this function takes in the localStorage pokemon stats and returns an array of the captured values', function(assert) {
    //Arrange
    // Parameters and arguments
    const expectedCaptureArr = [3, 2];

    //Act 
    //Calling the function and setting the result to the const actual
    const actual1 = mungeCaptured(pokemonStats);

    //Assert
    assert.deepEqual(expectedCaptureArr, actual1);
});

test('this function takes in the localStorage pokemon stats and returns an array of the encountered', function(assert) {
    //Arrange
    // Parameters and arguments
    const expectedNamesEncounteredArr = [1, 0];

    //Act 
    //Calling the function and setting the result to the const actual
    const actual1 = mungeEncountered(pokemonStats);

    //Assert
    assert.deepEqual(expectedNamesEncounteredArr, actual1);
});