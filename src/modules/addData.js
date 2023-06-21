const addData = () => {
  const name = document.querySelector('#gamer-name'); // input del name
  const score = document.querySelector('#gamer-score'); // input del score
  const result = document.querySelector('#result'); // p para el result
  const form = document.querySelector('form');
  const user = {
    score: score.value,
    user: name.value,
  };

  form.reset();

  fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Evaw4gPNzTGgQUofIkBp/scores/',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }, // aca le digo q mando un json
      body: JSON.stringify(user), // convierto el user en un json
    },
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error('Failed to add score');
      }
      result.innerHTML = 'Score added successfully';
      return response.json();
    })
    .catch((error) => {
      result.innerHTML = error;
    });
};

export default addData;
