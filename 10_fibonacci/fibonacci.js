const fibonacci = function(num) {
    if (num === 1 || num === 2) return 1;
    if (num < 1) return "OOPS"; // Since we start coutning at one we shouldn't allow 0 either
    return fibonacci(num - 1) + fibonacci(num - 2);
};

// Do not edit below this line
module.exports = fibonacci;
