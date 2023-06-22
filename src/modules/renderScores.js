const renderScores = (scores) => {
  const scoresList = document.getElementById('scores-list');
  let scoreHTML = '';
  scores.forEach((score) => {
    scoreHTML += `<li> ${score.user}: ${score.score}</li>`;
  });
  scoresList.innerHTML = scoreHTML;
};

export default renderScores;
