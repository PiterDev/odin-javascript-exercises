const removeFromArray = function(array, ...args) {
    for (i=1; i<args.length; i++) {
        let argIndex = array.indexOf(args[i]);
        if (argIndex != -1) {
            array.splice(array.indexOf(args[i]), 1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
