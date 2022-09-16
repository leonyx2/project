"use strict";

if (4) {
    console.log('Ok!');
} else {
    console.log('Error');
}

const num = 50;

// (num === 50) ? console.log('Ok!') : console.log('Error');



switch (num) {
    case 99:
        console.log('Неверно');
        break;
    case 100:
        console.log('Неверно');
        break;
    case 50:
        console.log('В точку!');
        break;
    default:
        console.log('Не в этот раз извини');
        break;
}
