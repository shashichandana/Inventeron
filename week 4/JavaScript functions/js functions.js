// Function Declaration
function declarationDemo() {
    function greet() {
        alert("Hello from Function Declaration");
    }
    greet();
}

// Function Expression
function expressionDemo() {
    const greet = function() {
        alert("Hello from Function Expression");
    };
    greet();
}

// Arrow Function
function arrowDemo() {
    const greet = () => {
        alert("Hello from Arrow Function");
    };
    greet();
}

// Parameters & Return
function parameterDemo() {
    function add(a, b) {
        return a + b;
    }

    let result = add(5, 10);
    alert("Result of add(5, 10) is: " + result);
}

// Callback Function
function callbackDemo() {
    function process(callback) {
        alert("Processing...");
        callback();
    }

    process(function() {
        alert("Callback Executed!");
    });
}