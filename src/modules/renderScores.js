const renderScores = (usersData) => {
  const scoresList = document.getElementById('scores-list');
  let scoreHTML = '';
  usersData.forEach((userData) => {
    scoreHTML += `<li> ${userData.user}: ${userData.score}</li>`;
  });
  scoresList.innerHTML = scoreHTML;
};

export default renderScores;
