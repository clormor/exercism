
var usedNames = []

var Robot = function() {
    this.chars="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    this.reset()
}

Robot.prototype.reset = function() {
    do {
        this.name =
                this.chars[Math.floor(Math.random() * 26)]
                + this.chars[Math.floor(Math.random() * 26)]
                + Math.floor(Math.random() * 10)
                + Math.floor(Math.random() * 10)
                + Math.floor(Math.random() * 10)
    } while(usedNames.includes(this.name))

    usedNames.push(this.name)
}

module.exports = Robot
