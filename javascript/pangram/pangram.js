
var Pangram = function(words) {
    this.words = words
};

Pangram.prototype.isPangram = function() {
    var letters = []
    var count = 0

    for (i = 0; i < this.words.length; i++) {
        var letter = this.words[i].toLowerCase()

        if (letter.match(/[a-z]/) && ! letters[letter] > 0) {
            letters[letter] = 1
            count++
        }
    }
    return (count == 26)
};

module.exports = Pangram;
