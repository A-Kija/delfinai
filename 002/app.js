[1, 5, 77].forEach(a => console.log(a));

console.log('----------------');

[1, 5, 77].forEach(a => {
    if (a < 4) {
        console.log(a)
    }
});

console.log('----------------');

[1, 5, 77].forEach((a, i) => console.log(a, i));


console.log('----------------');

[1, 5, 77].forEach((a, i, t) => console.log(t[t.length - i - 1]));

console.log('--------FILTER-------');


// const fe = [1, 5, 77].forEach(a => console.log(a));
// const map = [1, 5, 77].map((a, i) => {

//     return a * i;

// });


// console.log(fe);
// console.log(map);

// const fi = [1, 0, 5, 77].filter(a => a > 4).map(r => r * 10);

// console.log(fi);

const namas = [' s', ' t', 'Ėhfgh', 'Ędfggdf', 'Žfgfdg', 'fdgdfgd'];

// namas.sort((a, b) => {
//     if (a > b) return 1;
//     if (a < b) return -1;
//     return 0;
// });

namas.sort((a, b) => a.localeCompare(b));



console.log(namas);

let saugiklis = 100;

mas = [2, 100, 8, 18];

// const index = -1;
let i = -1;
while (i < mas.length && mas[++i] <= 10) {}
console.log(i > mas.length - 1 ? -1 : i);

//     //
//     if (!(saugiklis--)) break;
//     //

//     // i++;


// }