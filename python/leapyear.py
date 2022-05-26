# -*- coding: utf-8 -*-
'''
There is a leap year every year whose number is perfectly divisible by four - 
except for years which are both divisible by 100 and not divisible by 400. 
The second part of the rule effects century years. 
For example; the century years 1600 and 2000 are leap years, 
but the century years 1700, 1800, and 1900 are not.
'''

from unittest import result

from sqlalchemy import true


class InvalidInputError(Exception):
    pass



def to_leap_year(year):
    if not year:
        raise InvalidInputError('Input can not be blank')
    if not isinstance(year, int):
        raise InvalidInputError('Input must be an integer')
    if year < 0:
        raise InvalidInputError('Input must be a positive integer')
    
    if year%4 == 0 and year%100 != 0:
        print(year, ' is a leap year')
        result = True
    elif year%400 == 0:
        print(year, ' is a leap year')
        result = True
    elif year%100 == 0:
        print(year, ' is not a leap year')
        result = False
    else:
        print(year, ' is not a leap year')
        result = False
        
    return result
    

if __name__ == '__main__':
    to_leap_year(int(input("Enter a year: ")))
