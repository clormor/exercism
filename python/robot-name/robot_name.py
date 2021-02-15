import random
import os

asciiA = ord('A')
asciiZ = ord('Z')

def generateRobotName():
    random.seed(os.urandom(10))
    return generateRandomLetter() \
            + generateRandomLetter() \
            + generateRandom3DigitNumber()

def generateRandom3DigitNumber():
    randomNumber = random.randint(0,999)
    return "{:03d}".format(randomNumber)

def generateRandomLetter():
    charCode = random.randint(asciiA, asciiZ)
    return chr(charCode)

class Robot:
    def __init__(self):
        self.name = generateRobotName()

    def reset(self):
        self.name = generateRobotName()

