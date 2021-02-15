def convert(number):
    result=''
    if isFactorOf(number, 3):
        result += 'Pling'
    if isFactorOf(number, 5):
        result += 'Plang'
    if isFactorOf(number, 7):
        result += 'Plong'
    if (result == ''):
        result = str(number)
    return result

def isFactorOf(number, factor):
    return (number % factor) == 0
