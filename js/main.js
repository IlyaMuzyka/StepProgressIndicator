"use strict";

const progressLine = document.getElementById('progressLine'),
      progressSteps = document.querySelectorAll('.progress__step'),
      prevBtn = document.getElementById('prevBtn'),
      nextBtn = document.getElementById('nextBtn');

let currentStepValue = 1;

nextBtn.addEventListener('click', () => {
    currentStepValue++;
    if(currentStepValue > progressSteps.length) {
        currentStepValue = progressSteps.length;
    }
    update();
});

prevBtn.addEventListener('click', () => {
    currentStepValue--;
    if(currentStepValue < 1) {
        currentStepValue = 1;
    }
    update();
});

function update() {
    progressSteps.forEach((item, i) => {
        if(i < currentStepValue) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });

    const activeProgressSteps = document.querySelectorAll('.active');
    progressLine.style.width = ((activeProgressSteps.length - 1) / (progressSteps.length - 1)) * 100 + '%';

    if(currentStepValue === progressSteps.length) {
        nextBtn.disabled = true;
    } else if(currentStepValue <= 1) {
        prevBtn.disabled = true;
    } else {
        nextBtn.disabled = false;
        prevBtn.disabled = false;
    }
}