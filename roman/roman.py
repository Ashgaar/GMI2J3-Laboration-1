class OutOfRangeError(ValueError): pass
class NotIntegerError(ValueError): pass
class InvalidRomanNumeralError(ValueError): pass

roman_numeral_map = (('M',  1000),
                     ('CM', 900),
                     ('D',  500),
                     ('CD', 400),
                     ('C',  100),
                     ('XC', 90),
                     ('L',  50),
                     ('XL', 40),
                     ('X',  10),
                     ('IX', 9),
                     ('V',  5),
                     ('IV', 4),
                     ('I',  1))

to_roman_table = [ None ]
from_roman_table = {}

def to_roman(n):
    if int(n) != n:
        raise NotIntegerError('non-integers can not be converted')
    if not (0 < n < 5000):
        raise OutOfRangeError('number out of range (must be 1..4999)')
    return to_roman_table[n]

def from_roman(s):
    if not isinstance(s, str):
        raise InvalidRomanNumeralError('Input must be a string')
    if not s:
        raise InvalidRomanNumeralError('Input can not be blank')
    if s not in from_roman_table:
        raise InvalidRomanNumeralError('Invalid Roman numeral: {0}'.format(s))
    if not s.isupper():
        raise InvalidRomanNumeralError('Input must be uppercase.')
    return from_roman_table[s]

def build_lookup_tables():
    def to_roman(n):
        result = ''
        for numeral, integer in roman_numeral_map:
            if n >= integer:
                result = numeral
                n -= integer
                break
        if n > 0:
            result += to_roman_table[n]
        return result

    for integer in range(1, 5000):
        roman_numeral = to_roman(integer)
        to_roman_table.append(roman_numeral)
        from_roman_table[roman_numeral] = integer
        
def menu():
    print('Welcome to the Roman Numeral Converter')
    print('1 - Convert from integer to Roman')
    print('2 - Convert from Roman to integer')
    print('Press enter to exit')
    print('Enter a choice: ', end='')
    choice = input()
    if choice == '1':
        print('Input integer: ', end='')
        integer = int(input())
        try:
            print(to_roman(integer))
            menu()
        except OutOfRangeError as e:
            print(e)
            menu()
        except NotIntegerError as e:
            print(e)
            menu()
        except InvalidRomanNumeralError as e:
            print(e)
            menu()
    elif choice == '2':
        print('Input Roman numeral: ', end='')
        numeral = input()
        try:
            print(from_roman(numeral))
            menu()
        except InvalidRomanNumeralError as e:
            menu()




if __name__=='__main__':
    build_lookup_tables()
    menu()