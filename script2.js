const mathBox = document.querySelector('.mathBox');
const math = document.querySelectorAll('.math');
const numberBox = document.querySelector('.numberBox');
const number = document.querySelectorAll('.number');
const arrayBox = document.querySelector('.arrayBox');
const array = document.querySelectorAll('.array');
const stringBox = document.querySelector('.stringBox');
const string = document.querySelectorAll('.string');
const elementsBox = document.querySelector('.elementsBox');
const elements = document.querySelectorAll('.elements');
const nodeBox = document.querySelector('.nodeBox');
const node = document.querySelectorAll('.node');
const globalBox = document.querySelector('.globalBox');
const global = document.querySelectorAll('.global');
const windowBox = document.querySelector('.windowBox');
const windows = document.querySelectorAll('.window');
const portraitMode = document.querySelector('#portrait-mode');
const table = document.querySelector('#periodic-table');

table.addEventListener('click', (e) => {
    const activeDiv = document.querySelector('.active');
    let target = e.target;
    if (target.classList.contains('element')) {
        if (!activeDiv) {
            target.classList.toggle('active');
        } else if (activeDiv === target) {
            activeDiv.classList.toggle('active');
        } else {
            console.log(activeDiv);
            activeDiv.classList.toggle('active');
            target.classList.add('active');
        }
    }
});

function identifyMethods(box, methodArea) {
    box.addEventListener('mouseover', () => {
        methodArea.forEach(el => {
            el.classList.add('highlight');
        });
    })
};

function unidentifyMethods(box, methodArea) {
    box.addEventListener('mouseout', () => {
        methodArea.forEach(el => {
            el.classList.remove('highlight');
        });
    })
}

portraitMode.addEventListener('click', () => {
    portraitMode.style.display = 'none';
})

identifyMethods(mathBox, math);
unidentifyMethods(mathBox, math);
identifyMethods(numberBox, number);
unidentifyMethods(numberBox, number);
identifyMethods(elementsBox, elements);
unidentifyMethods(elementsBox, elements);
identifyMethods(nodeBox, node);
unidentifyMethods(nodeBox, node);
identifyMethods(globalBox, global);
unidentifyMethods(globalBox, global);
identifyMethods(windowBox, windows);
unidentifyMethods(windowBox, windows);
identifyMethods(stringBox, string);
unidentifyMethods(stringBox, string);
identifyMethods(arrayBox, array);
unidentifyMethods(arrayBox, array);

