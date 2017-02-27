
var FoodChain = function() {
    this.verseMap = [
            'fly',
            'spider',
            'bird',
            'cat',
            'dog',
            'goat',
            'cow',
            'horse'
    ]

    this.howSwallowMap = [
            'I don\'t know why she swallowed the fly. Perhaps she\'ll die.',
            'It wriggled and jiggled and tickled inside her.',
            'How absurd to swallow a bird!',
            'Imagine that, to swallow a cat!',
            'What a hog, to swallow a dog!',
            'Just opened her throat and swallowed a goat!',
            'I don\'t know how she swallowed a cow!',
            'She\'s dead, of course!'
    ]

    this.verseOpen = "I know an old lady who swallowed a "
    this.verseRepeat1 = "She swallowed the "
    this.verseRepeat2 = " to catch the "
}

FoodChain.prototype.verses = function(start,end) {
    var result = ""
    for (var i = start; i <= end; i++) {
        result += this.verse(i) + "\n"
    }
    return result
}

FoodChain.prototype.verse = function(verse) {
    var result = ""
    
    result += this.verseOpen + this.verseMap[verse - 1] + ".\n"

    if (verse > 1) {
        result += this.howSwallowMap[verse - 1] + "\n"
        if (verse < 8) {
            for (var i = verse; i > 1; i--) {
                result += this.verseRepeat1 + this.verseMap[i - 1] + this.verseRepeat2 + this.verseMap[i - 2]
                if (i == 3) {
                    result += " that wriggled and jiggled and tickled inside her."
                } else {
                    result += "."
                }
                result += "\n"
            }
        }
    }

    if (verse != 8) {
        result += this.howSwallowMap[0] + "\n"
    }

    console.log(result)
    return result
}

module.exports = FoodChain
