// fireship video https://www.youtube.com/watch?v=1t1_a1BZ04o

// for (let i = 1; i <= 100; i++) {
//     if (Number.isInteger(i / 3)) {
//         console.log('Fizz');
//     }

//     if (Number.isInteger(i / 5)) {
//         console.log('Buzz');
//     }

//     if (!Number.isInteger(i / 3) && !Number.isInteger(i / 5)) {
//         console.log(i);
//     }
// }

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0) {
//         console.log('Fizz');
//     }

//     if (i % 5 === 0) {
//         console.log('Buzz');
//     }

//     if (i % 3 !== 0 && i % 5 !== 0) {
//         console.log(i);
//     }
// }

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 !== 0 && i % 5 !== 0) {
//         console.log(i);
//     } else if (i % 3 === 0) {
//         console.log('Fizz');
//     } else if (i % 5 === 0) {
//         console.log('Buzz');
//     } else {
//         console.log(i);
//     }
// }

for (let i = 1; i <= 100; i++) {

    let out = "";

    if (i % 3 === 0) {
        console.log('Fizz');
    } 

    if (i % 5 === 0) {
        console.log('Buzz');
    } 

    if (i % 7 === 0) {
        console.log('Bazz');
    } 

    console.log(out || i);
}