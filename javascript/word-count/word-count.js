
var Words = function() {};

Words.prototype.count = function(words) {
    var wordArr = words.split(/[^'0-9A-Za-z\xF8-\xFF\xD8-\xF6\xC0-\xD6]/)
    var result = []
    for (i = 0; i < wordArr.length; i++) {
        var word = wordArr[i].toLowerCase()
        if (wordArr[i] != '') {
            if (result[word] > 0) {
                result[word] += 1
            } else {
                result[word] = 1
            }
        }
    }
    return result
};

module.exports = Words;
