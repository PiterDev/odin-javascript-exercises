const repeatString = function(string, amount) {
    if (amount < 0) {
        return "ERROR";
    }

    let outString = "";
    for (let i = 0; i<amount; i++) {
        outString += string;
    }
    return outString;
};

// Do not edit below this line
module.exports = repeatString;
