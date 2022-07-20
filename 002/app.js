function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

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

const mas = [2, 100, 8, 18];

// const index = -1;
let i = -1;
while (i < mas.length && mas[++i] <= 10) {}
console.log(i > mas.length - 1 ? -1 : i);

//     //
//     if (!(saugiklis--)) break;
//     //

//     // i++;


// }

const mas2 = [...Array(200)].map(_ => ['A', 'B', 'C', 'D'][rand(0, 3)]);


const rez = { A: 0, B: 0, C: 0, D: 0 };

mas2.forEach(l => rez[l]++);

// console.log(mas2);
// console.log(rez);


const m1 = new Set();
let sk = 0;

while (m1.size < 100) {
    sk++;
    m1.add(rand(100, 999))
}
const mas10 = [...m1];
m1.clear();
while (m1.size < 100) {
    sk++;
    m1.add(rand(100, 999))
}
const mas20 = [...m1];





console.log();

// m1.add('gg');
// m1.add('gg');
// m1.add('gg2');
// m1.add('gg3');
// const o = { gg: 1 };
// const b = {...o };
// m1.add(o);
// m1.add(b);