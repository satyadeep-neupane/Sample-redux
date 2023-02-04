// generator function
function* gen() {
    // num array 1 to 20 in list
    const num = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
    ];
    
    yield num.slice(0, 6);
    yield num.slice(6, 12);
    yield 3;
}

// generator object
const g = gen();
console.log(g.next());
console.log(g.next());
// console.log(g.next());
// console.log(g.next());
// console.log(g.next().value)

// for (let i of g) {
//     console.log("Here " + i);
// }