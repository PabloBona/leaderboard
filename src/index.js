import './css/index.css';
import addData from './modules/addData.js';
import renderScores from './modules/renderScores.js';

const refreshButton = document.getElementById('refresh-btn');
const addButton = document.getElementById('adding-btn');
const result = document.querySelector('#result');
const form = document.querySelector('#data-form');

refreshButton.addEventListener('click', async () => {
  try {
    const response = await fetch(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/cppz0glf8TC5Dt1ARMD7/scores/',
    );

    if (!response.ok) {
      throw new Error('Failed to fetch scores');
    }

    const scoresData = await response.json();
    renderScores(scoresData.result);
    result.innerHTML = `<div class="alert alert-success" role="alert">
    Sucesfully Load Name and Score
 </div>`;
  } catch (error) {
    result.innerHTML = `<div class="alert alert-danger" role="alert">
    ${error}
 </div>`;
  }
});

addButton.addEventListener('click', async (e) => {
  e.preventDefault();
  const nameInput = document.querySelector('#gamer-name');
  const scoreInput = document.querySelector('#gamer-score');
  const name = nameInput.value;
  const score = parseInt(scoreInput.value, 10);

  if (!name || !score) {
    result.innerHTML = `<div class="alert alert-danger" role="alert">
    Please enter a valid name and score
 </div>`;
    form.reset();
    return;
  }

  await addData(name, score);
});
