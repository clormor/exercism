
var RnaTranscriber = function() {};

RnaTranscriber.prototype.toRna = function(input) {
    var result = ''
    for (i = 0; i < input.length; i++) {
        switch (input[i]) {
        case 'G':
            result += 'C'
            break
        case 'C':
            result += 'G'
            break
        case 'T':
            result += 'A'
            break
        case 'A':
            result += 'U'
            break
        default:
            throw new Error("Invalid input")
        }
    }
    return result
};

module.exports = RnaTranscriber;
