
/////////////////////////////////////1////////////////////////

const container = document.querySelector(".container");
const squares = document.querySelectorAll(".square");

let activeSquare = null;
let offsetX, offsetY;

squares.forEach(square => {
    square.addEventListener("mousedown", (e) => {
        activeSquare = square;
        const rect = activeSquare.getBoundingClientRect();
        offsetX = e.clientX - rect.left;
        offsetY = e.clientY - rect.top;
    });
});

document.addEventListener("mousemove", (e) => {
    if (activeSquare) {
        const containerRect = container.getBoundingClientRect();
        const x = e.clientX - containerRect.left - offsetX;
        const y = e.clientY - containerRect.top - offsetY;

        if (x >= 0 && x + activeSquare.offsetWidth <= containerRect.width && y >= 0 && y + activeSquare.offsetHeight <= containerRect.height) {
            activeSquare.style.left = x + "px";
            activeSquare.style.top = y + "px";
        }
    }
});

document.addEventListener("mouseup", () => {
    activeSquare = null;
});


///////////////////////////////////////3////////////////////////////////////

const buttonContainer = document.querySelector('.buttonContainer');
const runawayButton = document.querySelector('.runawayButton');

function moveButton() {
    const containerWidth = buttonContainer.clientWidth;
    const containerHeight = buttonContainer.clientHeight;
    const buttonWidth = runawayButton.clientWidth;
    const buttonHeight = runawayButton.clientHeight;

    const maxLeft = containerWidth - buttonWidth;
    const maxTop = containerHeight - buttonHeight;

    const newLeft = Math.random() * maxLeft;
    const newTop = Math.random() * maxTop;

    runawayButton.style.left = newLeft + 'px';
    runawayButton.style.top = newTop + 'px';
}

runawayButton.addEventListener('mouseover', moveButton);

moveButton();

///////////////////////////////////////4////////////////////////////////////

const fileList = document.querySelector(".fileList");
const files = fileList.getElementsByTagName("li");

fileList.addEventListener("click", (event) => {
    const target = event.target;
    if (event.ctrlKey || event.metaKey) {
        target.classList.toggle("selected");
    } else {
        for (const file of files) {
            file.classList.remove("selected");
        }
        target.classList.add("selected");
    }
});

///////////////////////////////////////5////////////////////////////////////

const slider = document.querySelector('.slider');
const thumb = document.querySelector('.slider-thumb');

let isDragging = false;

thumb.addEventListener('mousedown', (e) => {
    isDragging = true;
    const thumbOffset = e.clientX - thumb.getBoundingClientRect().left;
    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            let leftPos = e.clientX - slider.getBoundingClientRect().left - thumbOffset;
            if (leftPos < 0) {
                leftPos = 0;
            } else if (leftPos > slider.clientWidth - thumb.clientWidth) {
                leftPos = slider.clientWidth - thumb.clientWidth;
            }
            thumb.style.left = leftPos + 'px';
        }
    });
});

document.addEventListener('mouseup', () => {
    isDragging = false;
});

document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        if (e.clientX < slider.getBoundingClientRect().left) {
            thumb.style.left = '0px';
            isDragging = false;
        } else if (e.clientX > slider.getBoundingClientRect().right) {
            thumb.style.left = slider.clientWidth - thumb.clientWidth + 'px';
            isDragging = false;
        }
    }
});