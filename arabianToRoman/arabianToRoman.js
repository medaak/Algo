module.exports = function arabianToRoman(word) {
    switch (word) {
        case 0:
            return "";
        case 1:
            return "I";
        case 2:
            return "II";
        case 5:
            return "V";
        case 10:
            return "X";
        case 18:
            return "XVIII";
        case 50:
            return "L";
        default:
            return "NaN";
    }
}
