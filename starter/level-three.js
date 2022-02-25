/*
 * DOTS: Level Three
 *
 */

let score = 0
let balls = document.querySelectorAll('.js-ball')
const scoreDisplay = document.querySelector('.js-score')
const levelWinner = document.querySelector('.level-winner')

for (let i = 0; i < balls.length; i++) {
  balls[i].addEventListener('click', () => {
    let incrementValue = parseInt(balls[i].dataset.increment)
    score += incrementValue
    scoreDisplay.innerText = score
    if (score >= 100) {
      levelWinner.style.opacity = 1
    }
  }) 
}
