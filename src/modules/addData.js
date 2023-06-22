const addData = async (name, score) => {
  const result = document.querySelector('#result'); // <p> for the result
  const user = {
    score,
    user: name,
  };

  try {
    const response = await fetch(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/cppz0glf8TC5Dt1ARMD7/scores1/',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
      },
    );

    if (!response.ok) {
      throw new Error('Failed to add your score');
    }

    result.innerHTML = 'Score added successfully';
    return response.json();
  } catch (error) {
    result.innerHTML = `<div class="alert alert-danger" role="alert">
     ${error}
  </div>`;
    return null; // Return null in case of error
  }
};

export default addData;
