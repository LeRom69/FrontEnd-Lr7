const containers = document.querySelector('.containers');
const numCircles = 20;
let activeCircle = 0;

function createCircle(radius, x, y) {
    const circle = document.createElement('div');
    circle.className = 'circle';
    circle.style.width = `${2 * radius}px`;
    circle.style.height = `${2 * radius}px`;
    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;
    containers.appendChild(circle);
}

function setActiveCircle(index) {
    const circles = document.querySelectorAll('.circle');
    circles[activeCircle].classList.remove('active');
    activeCircle = index;
    circles[activeCircle].classList.add('active');
}

function handleKeydown(event) {
    if (event.key === 'Tab') {
        setActiveCircle((activeCircle + 1) % numCircles);
    } else if (event.key === 'Shift' && event.shiftKey && event.key === 'Tab') {
        setActiveCircle((activeCircle - 1 + numCircles) % numCircles);
    } else if (event.key === 'ArrowLeft') {
        moveActiveCircle(-10, 0);
    } else if (event.key === 'ArrowRight') {
        moveActiveCircle(10, 0);
    } else if (event.key === 'ArrowUp') {
        moveActiveCircle(0, -10);
    } else if (event.key === 'ArrowDown') {
        moveActiveCircle(0, 10);
    }
}

function moveActiveCircle(dx, dy) {
    const circles = document.querySelectorAll('.circle');
    const circle = circles[activeCircle];
    const rect = circle.getBoundingClientRect();
    const newX = rect.left + dx;
    const newY = rect.top + dy;
    circle.style.left = `${newX}px`;
    circle.style.top = `${newY}px`;
}

for (let i = 0; i < numCircles; i++) {
    const radius = Math.floor(Math.random() * 21) + 10;
    const x = Math.floor(Math.random() * (window.innerWidth - 2 * radius));
    const y = Math.floor(Math.random() * (window.innerHeight - 2 * radius));
    createCircle(radius, x, y);
}

setActiveCircle(activeCircle);
window.addEventListener('keydown', handleKeydown);
