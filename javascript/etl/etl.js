
var Etl = function() {
}

Etl.prototype.transform = function(old) {
    transformed = {}

    for (var i = 1; i <= 10; i++) {
        if (old[i] == null) {
            continue
        }

        for (var j = 0; j < old[i].length; j++) {
            transformed[old[i][j].toLowerCase()] = i
        }
    }

    return transformed
}

module.exports = Etl

