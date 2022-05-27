import { update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection } from './snake.js'
import { update as updateFood, draw as drawFood } from './food.js'
import { outsideGrid } from './grid.js'
import './input.js'
import { getInputDirection } from './input.js'

let lastRenderTime = 0
let gameOver = false
const gameBoard = document.getElementById('game-board')

function main(currentTime) {
    if  (gameOver) {
        if (confirm('You lost. Press ok to restart.')) {
            window.location = '/'
        } 
        return
    }


    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return 


    lastRenderTime = currentTime

    update()
    draw()
}

window.requestAnimationFrame(main)

function update() {
    updateSnake()
    updateFood()
    checkDeath()
}

function draw() {
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawFood(gameBoard)
}

function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}

//------mobile controls-------
function mobileButtonPress(direction) {
    const inputDirection = getInputDirection();
    switch (direction) {
        case 'up':
            if (lastInputDirection.y !== 0) break
            inputDirection = { x: 0, y: -1}
            break
        case 'down':
            if (lastInputDirection.y !== 0) break
            inputDirection = { x: 0, y: 1}
            break 
        case 'left':
            if (lastInputDirection.x !== 0) break
            inputDirection = { x: -1, y: 0}
            break  
        case 'right':
            if (lastInputDirection.x !== 0) break
            inputDirection = { x: 1, y: 0}
            break         
    }
}

