def equilateral(sides):
    return triangle(sides) and sides[0] == sides[1] == sides[2]


def isosceles(sides):
    return triangle(sides) and not scalene(sides)


def scalene(sides):
    return triangle(sides) and len(set(sides)) == 3


def triangle(sides):
    if 0 in sides:
        return False
    if sides[0] + sides[1] < sides[2]:
        return False
    if sides[0] + sides[2] < sides[1]:
        return False
    if sides[1] + sides[2] < sides[0]:
        return False
    return True