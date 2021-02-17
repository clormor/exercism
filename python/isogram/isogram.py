ascii_a = ord('a')
ascii_z = ord('z')

def is_isogram(string):
    chars_seen = [False] * 26

    for char in string.lower():
        index = ord(char) - ascii_a
        if (index >= 0) & (index < 26):
            if chars_seen[index]:
                return False
            chars_seen[index] = True

    return True