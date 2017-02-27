
var BigInt = require('./big-integer');

var Grains = function() {
}

Grains.prototype.square = function(square) {
    result = BigInt(2)
    return result.pow(square - 1).toString()
}

Grains.prototype.total = function() {
    result = BigInt(0)
    for (i = 1; i <= 64; i++) {
        result = result.add(this.square(i))
    }
    return result.toString()
}

module.exports = Grains

