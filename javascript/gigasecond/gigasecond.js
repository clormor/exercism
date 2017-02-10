const gigaseconds = 1000000000;

var Gigasecond = function(date) {
    this.birthDate = date
};

Gigasecond.prototype.date = function() {
    return new Date(this.birthDate.getTime() + (gigaseconds * 1000))
};

module.exports = Gigasecond;
