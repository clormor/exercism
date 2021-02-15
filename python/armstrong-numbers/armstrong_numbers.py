def is_armstrong_number(number):
    numberAsString = str(number)
    numDigits = len(numberAsString)
    
    result = 0
    for digit in numberAsString:
        result += int(digit) ** numDigits

    return result == number

