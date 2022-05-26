# -*- coding: utf-8 -*-
'''
Unit test for leapyear.py
Student version
'''

import unittest
import leapyear

class KnownValues(unittest.TestCase):
    known_values =( (2000, True),
                    (1904, True),
                    (2400, True),
                    (2020, True),
                    (2010, False),
                    (1900, False),
                    (1800, False),
                    (2002, False))
    
    def test_to_leap_year(self):
        for year, result in self.known_values:
            self.assertEqual(result, leapyear.to_leap_year(year))
                    
class LeapYearBadInput(unittest.TestCase):
    def test_blank_input(self):
        '''to_leap_year should fail with blank string input'''
        self.assertRaises(leapyear.InvalidInputError, leapyear.to_leap_year, '')
    def test_negative(self):
        '''to_leap_year should fail with negative integer input'''
        self.assertRaises(leapyear.InvalidInputError, leapyear.to_leap_year, -1)
    def test_non_integer(self):
        '''to_leap_year should fail with non-integer input'''
        self.assertRaises(leapyear.InvalidInputError, leapyear.to_leap_year, 'a')
    def test_string(self):
        '''to_leap_year should fail with string input'''
        self.assertRaises(leapyear.InvalidInputError, leapyear.to_leap_year, 'a')
    
     

if __name__ == '__main__':
    unittest.main()
