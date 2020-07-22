/* eslint-disable */
import { mungeCaptured, mungeEncountered } from '../pokemonUtils.js';

const statsDisplay = document.getElementById('results');
const resetStatsButton = document.getElementById('reset-stats-button');

const backToArrayStats = localStorage.getItem('POKEMON STATS');
statsDisplay.textContent = backToArrayStats;

resetStatsButton.addEventListener('click', () => {
    localStorage.removeItem('POKEMON STATS');
    statsDisplay.textContent = 'Stats have been reset';
});

let rawPokemonStats = localStorage.getItem('POKEMON STATS');
let backToArrStats = JSON.parse(rawPokemonStats);

let mungedCapturedArr = mungeCaptured(backToArrStats);

let mungedEncounteredArr = mungeEncountered(backToArrStats);

let pokemonNames = ["bulbasaur","venusaur-mega","ivysaur","charmander","charmeleon","charizard","charizard-mega-x","charizard-mega-y","squirtle","wartortle","blastoise","blastoise-mega","caterpie","metapod","beedrill","weedle","kakuna","beedrill-mega","pidgey"];

// POKEMON STATS DOUBLE BAR CHART
var pokemonStatsChart1 = document.getElementById('pokemon-stats-chart1');
new Chart(pokemonStatsChart1, { 
    type: 'bar',
    data: {
        labels: pokemonNames,
        datasets: [{
            label: '# of Times Pokemon is ENCOUNTERED',
            data: mungedEncounteredArr,
            backgroundColor: 'black',
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

var pokemonStatsChart2 = document.getElementById('pokemon-stats-chart2');
new Chart(pokemonStatsChart2, { 
    type: 'bar',
    data: {
        labels: pokemonNames,
        datasets: [{
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
