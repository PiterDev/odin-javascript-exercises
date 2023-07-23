const sumAll = function(from, to) {
    if (!(typeof from === "number" && typeof to === "number")) return "ERROR";

    if (from > to) [from, to] = [to, from];
    
    let sum = 0;
    for (let i = from; i <= to; i++) {
        sum += i
    }

    if (sum >= 0) {
        return sum;
    } else {
        return "ERROR";
    }
    
};

// Do not edit below this line
module.exports = sumAll;
