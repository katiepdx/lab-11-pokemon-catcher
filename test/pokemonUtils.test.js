// IMPORT MODULES under test here:
import { findById } from '../pokemonUtils.js';

const test = QUnit.test;

let pokemonStats = [
    {
        pokemon: 'bulbasaur',
        encountered: 0,
        captured: 0
    },
    {
        pokemon: 'venusaur-mega',
        encountered: 0,
        captured: 0
    },
    {
        pokemon: 'ivysaur',
        encountered: 0,
        captured: 0
    },
    {
        pokemon: 'charmander',
        encountered: 0,
        captured: 0,
    },
    {
        pokemon: 'charmeleon',
        encountered: 0,
        captured: 0
    },
    {
        pokemon: 'charizard',
        encountered: 0,
        captured: 0
    },
    {
        pokemon: 'charizard-mega-x',
        encountered: 0,
        captured: 0
    },
    {
        pokemon: 'charizard-mega-y',
        encountered: 0,
        captured: 0
    },
    {
        pokemon: 'squirtle',
        encountered: 0,
        captured: 0
    },
    {
        pokemon: 'wartortle',
        encountered: 0,
        captured: 0
    },
    {
        pokemon: 'blastoise',
        encountered: 0,
        captured: 0
    },
    {
        pokemon: 'blastoise-mega',
        encountered: 0,
        captured: 0
    },
    {
        pokemon: 'caterpie',
        encountered: 0,
        captured: 0
    },
    {
        pokemon: 'metapod',
        encountered: 0,
        captured: 0
    },
    {
        pokemon: 'beedrill',
        encountered: 0,
        captured: 0
    },
    {
        pokemon: 'weedle',
        encountered: 0,
        captured: 0
    },
    {
        pokemon: 'kakuna',
        encountered: 0,
        captured: 0
    },
    {
        pokemon: 'beedrill-mega',
        encountered: 0,
        captured: 0
    },
    {
        pokemon: 'pidgey',
        encountered: 0,
        captured: 0
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
