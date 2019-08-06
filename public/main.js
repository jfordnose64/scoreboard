// import { max } from "rxjs/operators";

const team1Input = document.querySelector('.team-1-input')
const team1Name = document.querySelector('.team-1-name')
const team2Input = document.querySelector('.team-2-input')
const team2Name = document.querySelector('.team-2-name')

const updateTeam1Name = document.querySelector('.update-team-1-name')
const updateTeam2Name = document.querySelector('.update-team-2-name')

const team1Add = document.querySelector('.team-1-add-1-button')
const team1Sub = document.querySelector('.team-1-subtract-1-button')

const team2Add = document.querySelector('.team-2-add-1-button')
const team2Sub = document.querySelector('.team-2-subtract-1-button')

const team1Score = document.querySelector('.team-1-score')
const team2Score = document.querySelector('.team-2-score')

const quarter = document.querySelector('.quarter-1-number')
const roundTeam1 = document.querySelector('.round-won-team-1')
const roundTeam2 = document.querySelector('.round-won-team-2')

const addTeam1Score = () => {
  let currentTeam1Score = team1Score.textContent

  currentTeam1Score++

  team1Score.textContent = currentTeam1Score

  if (currentTeam1Score === 21) {
    quarter.textContent++
    if (quarter.textContent > 0) {
      team1Score.textContent = 0
      team2Score.textContent = 0
    }
    if (currentTeam1Score === 21) {
      roundTeam1.textContent++
      if (parseInt(roundTeam1.textContent) === 3) {
        roundTeam1.textContent = 'You Won!'
        quarter.textContent = 0
        team1Add.classList.add("hide")
        team2Add.classList.add("hide")
        team1Sub.classList.add("hide")
        team2Sub.classList.add("hide")
        updateTeam1Name.classList.add("hide")
        updateTeam2Name.classList.add("hide")
      }
    }
  }
  if (quarter.textContent >= 4) {
    quarter.textContent = 0
  }
}
team1Add.addEventListener('click', addTeam1Score)

const subTeam1Score = () => {
  let currentTeam1Score = team1Score.textContent
  if (currentTeam1Score > 0) {
    currentTeam1Score--
  } else {
    currentTeam1Score = 0
  }
  team1Score.textContent = currentTeam1Score
}

team1Sub.addEventListener('click', subTeam1Score)

const addTeam2Score = () => {
  let currentTeam2Score = team2Score.textContent

  currentTeam2Score++

  team2Score.textContent = currentTeam2Score

  if (currentTeam2Score === 21) {
    quarter.textContent++
    if (quarter.textContent > 0) {
      team2Score.textContent = 0
      team1Score.textContent = 0
    }
    if (currentTeam2Score === 21) {
      roundTeam2.textContent++
      if (parseInt(roundTeam2.textContent) === 3) {
        roundTeam2.textContent = 'You Won!'
        quarter.textContent = 0
        team1Add.classList.add("hide")
        team2Add.classList.add("hide")
        team1Sub.classList.add("hide")
        team2Sub.classList.add("hide")
        updateTeam1Name.classList.add("hide")
        updateTeam2Name.classList.add("hide")
      }
    }
  }
  if (quarter.textContent >= 4) {
    quarter.textContent = 0
  }
}

team2Add.addEventListener('click', addTeam2Score)

const subTeam2Score = () => {
  let currentTeam2Score = team2Score.textContent

  if (currentTeam2Score > 0) {
    currentTeam2Score--
  } else {
    currentTeam2Score = 0
  }

  team2Score.textContent = currentTeam2Score
}

team2Sub.addEventListener('click', subTeam2Score)

const newTeam1Name = () => {
  team1Name.innerHTML = team1Input.value
}

team1Input.addEventListener('click', newTeam1Name)

const newTeam2Name = () => {
  team2Name.innerHTML = team2Input.value
}

team2Input.addEventListener('click', newTeam2Name)

if (quarter.textContent >= 4) {
  quarter.textContent = 0
}

const resetGame = () => {
  team1Score.textContent = 0
  team2Score.textContent = 0
  quarter.textContent = 0
  roundTeam1.textContent = 0
  roundTeam2.textContent = 0
  team1Add.classList.remove("hide")
  team2Add.classList.remove("hide")
  team1Sub.classList.remove("hide")
  team2Sub.classList.remove("hide")
  updateTeam1Name.classList.remove("hide")
  updateTeam2Name.classList.remove("hide")
}

document.querySelector('.reset-button').addEventListener('click', resetGame)