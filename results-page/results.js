const statsDisplay = document.getElementById('results');
const playAgainButton = document.getElementById('play-again-button');

//get raw Stats to display 
const backToArrayStats = localStorage.getItem('POKEMON STATS');
statsDisplay.textContent = backToArrayStats;

playAgainButton.addEventListener('click', () => {
    localStorage.removeItem('POKEMON STATS');
});