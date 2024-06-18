const first = document.getElementById('first');
const second = document.getElementById('second');
const third = document.getElementById('third');

const firstDot = document.getElementById('first-dot');
const secondDot = document.getElementById('second-dot');
const thirdDot = document.getElementById('third-dot');

let i = 0;
firstDot.setAttribute('fill', '#f5e1ba');

function showNextItem() {
    if(i == 0) {
        first.style.left = 0;
        second.style.left = '100%';
        third.style.left = '100%';

        firstDot.setAttribute('fill', '#f5e1ba');
        secondDot.setAttribute('fill', '#808080');
        thirdDot.setAttribute('fill', '#808080');
    } else if (i == 1) {
        first.style.left = '-100%';
        second.style.left = 0;
        third.style.left = '100%';

        firstDot.setAttribute('fill', '#808080');
        secondDot.setAttribute('fill', '#f5e1ba');
        thirdDot.setAttribute('fill', '#808080');
    }
    else if (i == 2) {
        first.style.left = '-100%';
        second.style.left = '-100%';
        third.style.left = 0;

        firstDot.setAttribute('fill', '#808080');
        secondDot.setAttribute('fill', '#808080');
        thirdDot.setAttribute('fill', '#f5e1ba');
    }

    i = (i + 1) % 3;
}

setInterval(showNextItem, 3500);