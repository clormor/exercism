def leap_year(year):
    if year % 4 == 0:
        return (year % 100 != 0) | (year % 400 == 0)
    return False
