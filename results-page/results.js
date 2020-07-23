/* eslint-disable */
import { mungeCaptured, mungeEncountered, mungeRatingPokemon } from '../pokemonUtils.js';

const statsDisplay = document.getElementById('results');
const resetStatsButton = document.getElementById('reset-stats-button');
const chartDisplay = document.getElementById('pokemon-results-container');

resetStatsButton.addEventListener('click', () => {
    localStorage.removeItem('POKEMON STATS');
    statsDisplay.textContent = 'Stats have been reset';
    chartDisplay.classList.add('hidden');
});

let rawPokemonStats = localStorage.getItem('POKEMON STATS');
let backToArrStats = JSON.parse(rawPokemonStats);

let mungedCapturedArr = mungeCaptured(backToArrStats);

let mungedEncounteredArr = mungeEncountered(backToArrStats);

let mungedRatingArr = mungeRatingPokemon(backToArrStats);

let pokemonNames = ["bulbasaur","venusaur-mega","ivysaur","charmander","charmeleon","charizard","charizard-mega-x","charizard-mega-y","squirtle","wartortle","blastoise","blastoise-mega","caterpie","metapod","beedrill","weedle","kakuna","beedrill-mega","pidgey"];

// POKEMON STATS DOUBLE BAR CHART
var pokemonStatsChart = document.getElementById('pokemon-stats-chart');
new Chart(pokemonStatsChart, { 
    type: 'bar',
    data: {
        labels: pokemonNames,
        datasets: [{
            label: '# of Times Pokemon is ENCOUNTERED',
            data: mungedEncounteredArr,
            backgroundColor: 'black',
            borderColor: 'red',
            borderWidth: 1
        },{
            label: '# of Times Pokemon is CAPTURED',
            data: mungedCapturedArr,
            backgroundColor: 'white',
            borderColor: 'red',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

//PIE CHART OF RATINGS 
var ratingsPokemonChart = document.getElementById('ratings-pokemon-chart');
new Chart(ratingsPokemonChart, { 
    type: 'bar',
    data: {
        labels: pokemonNames,
        datasets: [
        {
            label: ' Not Seen 0, Least Fav (seen not chosen) 1, Fav (seen and chosen) 2',
            data: mungedRatingArr,
            backgroundColor: 'white',
            borderColor: 'red',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
