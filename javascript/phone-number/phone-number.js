
var PhoneNumber = function(phoneNumber) {
    this.phoneNumber = ""
    this.length = 0
    for (var i = 0; i < phoneNumber.length; i++) {
        if (phoneNumber[i].match(/[0-9]/)) {
            this.phoneNumber += phoneNumber[i]
            this.length++
        }
    }
};

PhoneNumber.prototype.number = function() {
    return this.phoneNumber
};

module.exports = PhoneNumber;
