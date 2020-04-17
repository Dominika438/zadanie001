"use strict";

const farby = window.document.getElementsByClassName("farby");

window.document.body.onclick = () => {
    console.log(farby);
    for (let i = 0; i < farby.length; i++) {
        const element = farby[i];
        element.style.color = `rgb(${getRandomIntInclusive(
            100,
            255
        )}, 0, ${getRandomIntInclusive(100, 255)})`;
    }
};

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}
