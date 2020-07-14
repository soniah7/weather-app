
const globalVar = 'globalVar';
function outer() {
    const outerVar = 'outerVar';
    console.log(`outer: ${globalVar}`);
    function inner() {
        console.log(`inner: ${outerVar}, ${globalVar}`);
    }
    inner();
}
outer();


//////////////////////

for (var i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i)
    }, 1000)
}

// function makeFuncs() {
//     const funcs = [];
//     for (var i = 0; i < 3; i++) {
//         funcs[i] = function () {
//             console.log(`func ${i}: ${i}`);
//         };
//     }
//     return funcs;
// }
//
// const functions = makeFuncs();
// for (var j = 0; j < 3; j++) {
//     functions[j]();
// }
//



const slowMotion = {
    action: 'jumping off the building...',  play: function() {
        const callback = () => { console.log(`${this.action} after 2 seconds`); };
        setTimeout(callback, 2000);  }
}

slowMotion.play();