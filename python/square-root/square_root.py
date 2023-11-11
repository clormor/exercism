def square_root(number):
    return heron_method(abs(int(number)))


def heron_method(number):
    guess = 1;
    accuracy = 0.1
    while abs((guess * guess) - number) > accuracy:
        print(abs((guess * guess) - number))
        guess = (guess + (number/guess))/2
    return int(guess)
