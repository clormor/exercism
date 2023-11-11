def is_valid(isbn):
    isbn = isbn.replace('-', '')
    if not len(isbn) == 10:
        return False
    multiplier = 10
    total = 0
    try:
        for digit in isbn[:9]:
            total += int(digit) * multiplier
            multiplier -= 1
        if isbn[9] == 'X':
            total += 10
        else:
            total += int(isbn[9])
        return total % 11 == 0
    except:
        return False
