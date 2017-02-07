//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Year = function() {};

Year.prototype.isLeap = function(input) {
    if (input % 4 == 0) {

        if (input % 100 == 0) {

            if (input % 400 == 0) {
                return true
            }

            return false
        }

        return true
    }
    return false
};

module.exports = Year;
