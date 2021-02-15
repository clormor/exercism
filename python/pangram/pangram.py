asciiA = ord('a')

def is_pangram(sentence):
    charMap = createCharMap()

    for char in sentence.lower():
        visitChar(char, charMap)

    return isEveryCharVisited(charMap)

def createCharMap():
    return [0] * 26

def visitChar(char, charMap):
    charPosition = ord(char) - asciiA
    if (0 <= charPosition & charPosition < 26):
        charMap[charPosition] = 1

def isEveryCharVisited(charMap):
    for charCount in charMap:
        if (charCount == 0):
            return False
    return True


