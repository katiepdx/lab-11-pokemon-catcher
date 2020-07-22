const statsDisplay = document.getElementById('results');
// const playAgainButton = document.getElementById('play-again-button');
const resetStatsButton = document.getElementById('reset-stats-button');

const backToArrayStats = localStorage.getItem('POKEMON STATS');
statsDisplay.textContent = backToArrayStats;

resetStatsButton.addEventListener('click', () => {
    localStorage.removeItem('POKEMON STATS');
    statsDisplay.textContent = 'Stats have been reset';
});