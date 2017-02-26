
var PhoneNumber = function(phoneNumber) {
    this.phoneNumber = ""
    for (var i = 0; i < phoneNumber.length; i++) {
        if (phoneNumber[i].match(/[0-9]/)) {
            this.phoneNumber += phoneNumber[i]
        }
    }
    if (this.phoneNumber.length == 11 && this.phoneNumber[0] == 1) {
        this.phoneNumber = this.phoneNumber.substring(1,11)
    }
    if (this.phoneNumber.length != 10) {
        this.phoneNumber = '0000000000'
    }
};

PhoneNumber.prototype.number = function() {
    return this.phoneNumber
};

PhoneNumber.prototype.areaCode = function() {
    return this.phoneNumber.substring(0,3)
};

PhoneNumber.prototype.toString = function() {
    return "(" + this.areaCode() + ") " + this.phoneNumber.substring(3,6) + "-" + this.phoneNumber.substring(6,10)
};

module.exports = PhoneNumber;
