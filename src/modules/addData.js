const addData = async (name, score) => {
  const result = document.querySelector('#result'); // p for the result
  const user = {
    score,
    user: name,
  };

  try {
    const response = await fetch(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/cppz0glf8TC5Dt1ARMD7/scores/',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
      },
    );

    if (!response.ok) {
      throw new Error('Failed to add score');
    }

    result.innerHTML = 'Score added successfully';
    return response.json();
  } catch (error) {
    result.innerHTML = error;
    return null; // Return null in case of error
  }
};

export default addData;
