
var Anagram = function(word) {
	// Store the word itself
	this.word = word

	// Create a map counting occurrence of each letter
	this.letters = []
}

// Builds the map which counts letter occurrences
Anagram.prototype.build = function() {
	this.letters = []

	for (var i = 0; i < this.word.length; i++) {
		var letter = this.word[i].toLowerCase()

		if (this.letters[letter] > 0) {
			this.letters[letter] += 1
		} else {
			this.letters[letter] = 1
		}
	}
}

Anagram.prototype.matches = function() {
	var result = []

	for (var i = 0; i < arguments.length; i++) {

		// If the argument is a word, test the word
		if (typeof arguments[i] === "string" && this.isAnagram(arguments[i])) {
			result.push(arguments[i])

		} else {

			// If the argument is an array, test each word in the array
			for (var j = 0; j < arguments[i].length; j++) {
				if (this.isAnagram(arguments[i][j])) {
					result.push(arguments[i][j])
				}
			}
		}
	}

	return result
}

Anagram.prototype.isAnagram = function(word) {
	this.build()

	// Anagrams must have the same length
	if (word.length != this.word.length) {
		return false
	}

	// A word is not an anagram of itself
	if (word.toLowerCase() === this.word.toLowerCase()) {
		return false
	}

	// Count off each letter occurence
	for (var i = 0; i < word.length; i++) {
		if (this.letters[word[i].toLowerCase()] > 0) {
			this.letters[word[i].toLowerCase()] -= 1
		} else {
			// Found an extra letter
			return false
		}
	}

	// If all tests pass, it's an anagram
	return true
}

module.exports = Anagram