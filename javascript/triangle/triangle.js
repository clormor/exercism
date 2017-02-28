
Triangle = function(x,y,z) {
    this.x = x
    this.y = y
    this.z = z
}

Triangle.prototype.kind = function() {
    if (! this.isTriangle()) throw "invalid triangle"
    if (this.isDegenerate()) return "degenerate"
    if (this.isEquilateral()) return "equilateral"
    if (this.isIsosceles()) return "isosceles"
    return "scalene"
}

Triangle.prototype.isTriangle = function() {
    if ((this.x <= 0) || (this.y <= 0) || (this.z <= 0)) return false
    if ((this.x + this.y < this.z) || (this.x + this.z < this.y) || (this.y + this.z < this.x)) return false
    return true
}

Triangle.prototype.isDegenerate = function() { 
    return (this.x + this.y == this.z) || (this.x + this.z == this.y) || (this.y + this.z == this.x)
}

Triangle.prototype.isEquilateral = function() {
    return (this.x == this.y) && (this.y == this.z)
}

Triangle.prototype.isIsosceles = function() {
    return (this.x == this.y) || (this.y == this.z) || (this.x == this.z)
}

module.exports = Triangle

