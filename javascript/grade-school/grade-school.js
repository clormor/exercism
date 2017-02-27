
var School = function() {
    this.schoolRoster = {}
}

School.prototype.roster = function() {
    return this.schoolRoster
}

School.prototype.add = function(name, grade) {
    if (this.schoolRoster[grade] == null) {
        this.schoolRoster[grade] = [name]
    } else {

        // Insert the name into the correct position
        var inserted = false
        for (var i = 0; i < this.schoolRoster[grade].length; i++) {
            if (name < this.schoolRoster[grade][i]) {
                this.schoolRoster[grade].splice(i, 0, name)
                inserted = true
                break
            }
        }

        // Handle the case where the name is greater than any other name
        if (!inserted) {
            this.schoolRoster[grade].push(name)
        }
    }
}

School.prototype.grade = function(grade) {
    if (this.schoolRoster[grade] == null) {
        return []
    } else {
        return this.schoolRoster[grade]
    }
}

module.exports = School
