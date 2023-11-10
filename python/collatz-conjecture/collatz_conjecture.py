def steps(number):
    if number < 1:
        raise ValueError("Only positive integers are allowed")
    steps = 0
    while not number == 1:
        number = collatz(number)
        steps += 1
    return steps
    

def collatz(number):
    if number % 2 == 0:
        return number / 2
    else:
        return (3 * number) + 1