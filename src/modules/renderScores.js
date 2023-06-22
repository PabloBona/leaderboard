const renderScores = (scores) => {
  const scoresList = document.getElementById('scores-list');
  let scoreHTML = '';
  // scoresList.innerHTML = scores.map(
  //   (score) => `<li>User: ${score.user}, Score: ${score.score}</li>`,
  // );
  scores.forEach((score) => {
    scoreHTML += `<li> ${score.user}: ${score.score}</li>`;
  });
  scoresList.innerHTML = scoreHTML;
};

export default renderScores;
