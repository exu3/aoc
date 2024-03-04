"""
untested
probably doesn't work
"""

VALID_DIGITS = ["one", "two", "three", "four",
                "five", "six", "seven", "eight", "nine"]

input = open("real_input.txt", "r")
lines = input.readlines()

digit_word = ''
if digit_word == "one":
    digit_digit = 1
elif digit_word == "two":
    digit_digit = 2

present_digits = []
for line in lines:
    for digit_word in VALID_DIGITS:
        if digit_word in line:
            present_digits.append(digit_word)
