import './css/index.css';
import addData from './modules/addData.js';
import renderScores from './modules/renderScores.js';

const refreshButton = document.querySelector('#refresh-btn');
const addButton = document.querySelector('#adding-btn');

refreshButton.addEventListener('click', async () => {
  try {
    const response = await fetch(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Evaw4gPNzTGgQUofIkBp/scores/',
    );

    if (!response.ok) {
      throw new Error('Failed to fetch scores');
    }

    const scoresData = await response.json();
    renderScores(scoresData.result);
  } catch (error) {
    renderScores(error);
  }
});

addButton.addEventListener('click', (e) => {
  e.preventDefault();
  addData();
});
