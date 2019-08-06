const team1Input = document.querySelector('.team-1-input')
let team1Name = document.querySelector('.team-1-name')
const team2Input = document.querySelector('.team-2-input')
let team2Name = document.querySelector('.team-2-name')

const updateTeam1Name = document.querySelector('.update-team-1-name')
const updateTeam2Name = document.querySelector('.update-team-2-name')

const team1Add = document.querySelector('.team-1-add-1-button')
const team1Sub = document.querySelector('.team-1-subtract-1-button')

const team2Add = document.querySelector('.team-2-add-1-button')
const team2Sub = document.querySelector('.team-2-subtract-1-button')

const team1Score = document.querySelector('.team-1-score')
const team2Score = document.querySelector('.team-2-score')

let quarter = document.querySelector('.quarter-1-number')

//add to the scoreboard

const addTeam1Score = () => {
  // get the current score
  let currentTeam1Score = team1Score.textContent
  // console.log(currentTeam1Score)
  // add 1 to the current score
  currentTeam1Score++
  // console.log(currentTeam1Score)
  // update the html with new score
  team1Score.textContent = currentTeam1Score

  if (currentTeam1Score === 10) {
    quarter.textContent++
    if (quarter.textContent > 0) {
      team1Score.textContent = 0
    }
  }
  // if (quarter.textContent <= 4) {
  //   quarter.textContent = 0
  //   if (quarter.textContent = 4 {
  //     currentTeam1Score =
  //   }
  // }
}
team1Add.addEventListener("click", addTeam1Score)

const subTeam1Score = () => {
  let currentTeam1Score = team1Score.textContent

  currentTeam1Score--

  team1Score.textContent = currentTeam1Score

}

team1Sub.addEventListener("click", subTeam1Score)

const addTeam2Score = () => {
  let currentTeam2Score = team2Score.textContent

  currentTeam2Score++

  team2Score.textContent = currentTeam2Score

  if (currentTeam2Score === 10) {
    quarter.textContent++
    if (quarter.textContent > 0) {
      team2Score.textContent = 0
    }
  }
}

team2Add.addEventListener("click", addTeam2Score)

const subTeam2Score = () => {
  let currentTeam2Score = team2Score.textContent

  currentTeam2Score--

  team2Score.textContent = currentTeam2Score
}

team2Sub.addEventListener("click", subTeam2Score)

const newTeam1Name = () => {
  team1Name.innerHTML = team1Input.value
}

team1Input.addEventListener("click", newTeam1Name)

const newTeam2Name = () => {
  team2Name.innerHTML = team2Input.value
}

team2Input.addEventListener("click", newTeam2Name)