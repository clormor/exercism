
usedNames = {}
chars="ABCDEFGHIJKLMNOPQRSTUVWXYZ"

var Robot = function() {
    this.reset()
}

Robot.prototype.reset = function() {
    do {
        this.name =
                chars[Math.floor(Math.random() * 26)] +
                chars[Math.floor(Math.random() * 26)] +
                Math.floor(Math.random() * 10) +
                Math.floor(Math.random() * 10) +
                Math.floor(Math.random() * 10)
    } while(usedNames[this.name] == true)

    usedNames[this.name] = true
}

module.exports = Robot
