module.exports = function scrambe(word) {
    let lastLetter = word.charAt(word.length - 1),
        result = word.split(''),
        firstLetter = result.splice(0, 1);

    result = result.slice(0, -1);
    result = result.reverse().join('');
    result = firstLetter + result + lastLetter;
    
    if (result == word) {
        result = result.split('');
        word = word.split('');
        result[1] = word[2];
        result[2] = word[1];
        result.join("")
    }
    return result;
}
