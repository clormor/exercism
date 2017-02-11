
var BeerSong = function() {};

BeerSong.prototype.verse = function(verse) {
    var bottleStr = (verse == 1) ? "bottle" : "bottles"
    var bottles1 = (verse == 0) ? "No more" : verse
    var bottles2 = (verse == 0) ? "no more" : verse
    var bottlesLeft = (verse == 0) ? 99 : ((verse == 1)? "no more" : verse - 1)
    var bottlesLeftStr = (bottlesLeft == 1) ? "bottle" : "bottles"
    var it = (verse == 1) ? "it" : "one"
    var action = (verse == 0) ? "Go to the store and buy some more" : "Take " + it +  " down and pass it around"

    var song = bottles1 + " " + bottleStr + " of beer on the wall, "
    song += bottles2 + " " + bottleStr + " of beer.\n"
    song += action + ", " + bottlesLeft + " " + bottlesLeftStr + " of beer on the wall.\n"
    return song
};

BeerSong.prototype.sing = function(startVerse, endVerse = 0) {
    var song = this.verse(startVerse--)
    while (startVerse >= endVerse) {
        song += "\n" + this.verse(startVerse)
        startVerse--
    }
    return song
};

module.exports = BeerSong;
