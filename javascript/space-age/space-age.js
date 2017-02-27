
var SpaceAge = function(seconds) {
    this.seconds = seconds
}

SpaceAge.prototype.onEarth = function() {
    return this.round(this.seconds / 31557600)
}

SpaceAge.prototype.onMercury = function() {
    return this.round(this.seconds / 31557600 / 0.2408467)
}

SpaceAge.prototype.onVenus = function() {
    return this.round(this.seconds / 31557600 / 0.61519726)
}

SpaceAge.prototype.onMars = function() {
    return this.round(this.seconds / 31557600 / 1.8808158)
}

SpaceAge.prototype.onJupiter = function() {
    return this.round(this.seconds / 31557600 / 11.862615)
}

SpaceAge.prototype.onSaturn = function() {
    return this.round(this.seconds / 31557600 / 29.447498)
}

SpaceAge.prototype.onUranus = function() {
    return this.round(this.seconds / 31557600 / 84.016846)
}

SpaceAge.prototype.onNeptune = function() {
    return this.round(this.seconds / 31557600 / 164.79132)
}

SpaceAge.prototype.round = function(age) {
    return Number(age.toFixed(2))
}

module.exports = SpaceAge

