import './css/index.css';
import addData from './modules/addData.js';
import renderScores from './modules/renderScores.js';

const refreshButton = document.getElementById('refresh-btn');
const addButton = document.getElementById('adding-btn');
const result = document.querySelector('#result');

refreshButton.addEventListener('click', async () => {
  try {
    // to handle errors
    const response = await fetch(
      // we use await before fetch function to wait the promises resolve
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Evaw4gPNzTGgQUofIkBp/scores/',
      // we do a fetch to the url
    );
    if (!response.ok) {
      throw new Error('Failed to fetch scores');
    }
    const scoresData = await response.json();
    // use await before the promise response.json to wait the promises resolve and return Json data
    renderScores(scoresData.result);
  } catch (error) {
    result.innerHTML = error;
  }
});

addButton.addEventListener('click', (e) => {
  e.preventDefault();
  addData();
});
