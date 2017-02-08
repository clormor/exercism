
var Bob = function() {};

Bob.prototype.hey = function(input) {

    // string is empty or blank
    if (input.search(/[^\s]/) < 0) {
        return "Fine. Be that way!"
    }

    // string contains letters that are exclusively upper-case
    if (input.search(/[a-z\xF8-\xFF\xE0-\xF6]/) < 0 && input.search(/[A-Z]/) >= 0) {
        return "Whoa, chill out!"
    }

    // string ends in a question mark
    if (input[input.length - 1] == '?') {
        return "Sure."
    }

    // default response
    return "Whatever."
};

module.exports = Bob;
