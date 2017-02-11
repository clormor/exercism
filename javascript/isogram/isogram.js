
var Isogram = function(word) {
    this.word = word
};

Isogram.prototype.isIsogram = function() {
    var result = []
    for (i = 0; i < this.word.length; i++) {
        var letter = this.word[i].toLowerCase()
        if (letter.match(/[a-zA-Z\xF8-\xFF\xD8-\xF6\xC0-\xD6]/)) {
            if (result[letter] > 0) {
                return false
            } else {
                result[letter] = 1
            }
        }
    }
    return true
};

module.exports = Isogram;
