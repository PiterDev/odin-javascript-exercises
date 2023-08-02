const palindromes = function (text) {
    const allowed = "abcdefghijklmnopqrstuwxyzABCDEFGHIJKLMNOPQRSTUWXYZ1234567890";
    let cleanText = text.split("").filter((letter) => allowed.includes(letter)).join("").toLowerCase();
    let cleanTextBackwards = cleanText.split("").reverse().join("");
    return cleanText === cleanTextBackwards;
};

// Do not edit below this line
module.exports = palindromes;
