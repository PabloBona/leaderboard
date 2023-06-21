const renderScores = (scores) => {
  const scoresList = document.getElementById('scores-list');

  scoresList.innerHTML = scores.map(
    (score) => `<li>User: ${score.user}, Score: ${score.score}</li>`,
  );
};

export default renderScores;
