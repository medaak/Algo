/*
    TIPS : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/RegExp
    http://www.regexr.com/
*/


module.exports = function vowelConsonantCount(word) {
    let result = {
        v: 0,
        c: 0
    }
    if (typeof word != "string" || word == "") {
        return result
    }
    word = word.toLowerCase().split("")
    for (char of word) {
        switch (char) {
            case "a":
            case "e":
            case "i":
            case "o":
            case "u":
                result.v += 1
                break;
            default:
                result.c += 1

        }
    }
    return result;

}
