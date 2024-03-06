
function function1() {
    console.log("mensaje-desde-funtion-1");
}
function function2() {
    console.log("mensaje-desde-funtion-2");
}

function1();
function2();

// Parte 2

function function3() {
    setTimeout(() => {
        console.log("mensaje-desde-funtion-3");
    }, 3000);
}
function function4() {
    console.log("mensaje-desde-funtion-4");
}

function3();
function4();

// Parte 3

function function5(fn) {
    setTimeout(() => {
        console.log("mensaje-desde-funtion-5");
        fn();
    }, 5000);
}

function function6() {
    console.log("mensaje-desde-funtion-6");
}

function5(function6);
