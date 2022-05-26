let inputDirection = { x: 0, y: 0 }
let lastInputDirection = { x: 0, y: 0 }

window.addEventListener('keydown', e => {
    switch (e.key) {
        case 'ArrowUp':
            if (lastInputDirection.y !== 0) break
            inputDirection = { x: 0, y: -1}
            break
        case 'ArrowDown':
            if (lastInputDirection.y !== 0) break
            inputDirection = { x: 0, y: 1}
            break 
        case 'ArrowLeft':
            if (lastInputDirection.x !== 0) break
            inputDirection = { x: -1, y: 0}
            break  
        case 'ArrowRight':
            if (lastInputDirection.x !== 0) break
            inputDirection = { x: 1, y: 0}
            break         
    }
})

//------mobile controls-------
//left key
function l() {
    if(snake.dx === 0) {
        snake.dx = -grid;
        snake.dy = 0;
    }
}
//up key
function u() {
    if(snake.dy === 0) {
        snake.dy = -grid;
        snake.dx = 0;
    }
}
//right key
function r() {
    if(snake.dx === 0) {
        snake.dx = grid;
        snake.dy = 0;
    }
}
//down key
function d() {
    if(snake.dy === 0) {
        snake.dy = grid;
        snake.dx = 0;
    }
}

export function getInputDirection() {
    lastInputDirection = inputDirection 
    return inputDirection
}