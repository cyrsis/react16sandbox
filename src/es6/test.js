const source = [1, 5, 9, 3, 'hi', 'tb', 456, '11', 'yoyoyo'];
let total = 0;

for (let i = 0; i < source.length; i++) {
    let num = parseInt(source[i], 10);
    if (!isNaN(num)) {
        total += num * 2;
    }
}


const source = [1, 5, 9, 3, 'hi', 'tb', 456, '11', 'yoyoyo'];

let total = source
    .map(x => parseInt(x, 10))
    .filter(x => !isNaN(x))
    .map(x => x * 2)
    .reduce((total, value) => total + value )

