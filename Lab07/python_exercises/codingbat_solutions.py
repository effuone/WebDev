"""
Solutions for CodingBat Python problems
https://codingbat.com/python

All sections in the Python tab:
- Warmup-1
- Warmup-2
- String-1
- List-1
- Logic-1
- Logic-2
- String-2
- List-2
"""

# ============= Warmup-1 =============

def sleep_in(weekday, vacation):
    """
    The parameter weekday is True if it is a weekday, and the parameter vacation is True
    if we are on vacation. We sleep in if it is not a weekday or we're on vacation.
    Return True if we sleep in.
    """
    return not weekday or vacation

def monkey_trouble(a_smile, b_smile):
    """
    We have two monkeys, a and b, and the parameters a_smile and b_smile indicate if
    each is smiling. We are in trouble if they are both smiling or if neither of them
    is smiling. Return True if we are in trouble.
    """
    return a_smile == b_smile

def sum_double(a, b):
    """
    Given two int values, return their sum. Unless the two values are the same,
    then return double their sum.
    """
    if a == b:
        return 2 * (a + b)
    return a + b

def diff21(n):
    """
    Given an int n, return the absolute difference between n and 21,
    except return double the absolute difference if n is over 21.
    """
    if n > 21:
        return 2 * abs(n - 21)
    return abs(n - 21)

def parrot_trouble(talking, hour):
    """
    We have a loud talking parrot. The "hour" parameter is the current hour time in
    the range 0..23. We are in trouble if the parrot is talking and the hour is before
    7 or after 20. Return True if we are in trouble.
    """
    return talking and (hour < 7 or hour > 20)

def makes10(a, b):
    """
    Given 2 ints, a and b, return True if one of them is 10 or if their sum is 10.
    """
    return a == 10 or b == 10 or a + b == 10

def near_hundred(n):
    """
    Given an int n, return True if it is within 10 of 100 or 200.
    """
    return abs(100 - n) <= 10 or abs(200 - n) <= 10

def pos_neg(a, b, negative):
    """
    Given 2 int values, return True if one is negative and one is positive.
    Except if the parameter "negative" is True, then return True only if both are negative.
    """
    if negative:
        return a < 0 and b < 0
    return (a < 0 and b > 0) or (a > 0 and b < 0)

def not_string(str):
    """
    Given a string, return a new string where "not " has been added to the front.
    However, if the string already begins with "not", return the string unchanged.
    """
    if str.startswith('not'):
        return str
    return 'not ' + str

def missing_char(str, n):
    """
    Given a non-empty string and an int n, return a new string where the char at index n
    has been removed. The value of n will be a valid index of a char in the original string.
    """
    return str[:n] + str[n+1:]

# ============= Warmup-2 =============

def string_times(str, n):
    """
    Given a string and a non-negative int n, return a larger string that is n copies of the original string.
    """
    return str * n

def front_times(str, n):
    """
    Given a string and a non-negative int n, we'll say that the front of the string is the first 3 chars,
    or whatever is there if the string is less than length 3. Return n copies of the front.
    """
    front = str[:3]
    return front * n

def string_bits(str):
    """
    Given a string, return a new string made of every other char starting with the first.
    """
    return str[::2]

def string_splosion(str):
    """
    Given a non-empty string like "Code" return a string like "CCoCodCode".
    """
    result = ""
    for i in range(len(str) + 1):
        result += str[:i]
    return result

def last2(str):
    """
    Given a string, return the count of the number of times that a substring length 2 appears
    in the string and also as the last 2 chars of the string, so "hixxxhi" yields 1.
    """
    if len(str) < 2:
        return 0
    
    last_two = str[-2:]
    count = 0
    
    for i in range(len(str) - 2):
        if str[i:i+2] == last_two:
            count += 1
    
    return count

def array_count9(nums):
    """
    Given an array of ints, return the number of 9's in the array.
    """
    return nums.count(9)

def array_front9(nums):
    """
    Given an array of ints, return True if one of the first 4 elements in the array is a 9.
    The array length may be less than 4.
    """
    return 9 in nums[:4]

def array123(nums):
    """
    Given an array of ints, return True if the sequence of numbers 1, 2, 3 appears in the array somewhere.
    """
    for i in range(len(nums) - 2):
        if nums[i] == 1 and nums[i+1] == 2 and nums[i+2] == 3:
            return True
    return False

# ============= String-1 =============

def hello_name(name):
    """
    Given a string name, e.g. "Bob", return a greeting of the form "Hello Bob!".
    """
    return "Hello " + name + "!"

def make_abba(a, b):
    """
    Given two strings, a and b, return the result of putting them together in the order abba.
    """
    return a + b + b + a

def make_tags(tag, word):
    """
    The web is built with HTML strings like "<i>Yay</i>" which draws Yay as italic text.
    In this example, the "i" tag makes <i> and </i> which surround the word "Yay".
    Given tag and word strings, create the HTML string with tags around the word.
    """
    return "<" + tag + ">" + word + "</" + tag + ">"

def make_out_word(out, word):
    """
    Given an "out" string length 4, such as "<<>>", and a word,
    return a new string where the word is in the middle of the out string.
    """
    return out[:2] + word + out[2:]

def extra_end(str):
    """
    Given a string, return a new string made of 3 copies of the last 2 chars of the original string.
    """
    return str[-2:] * 3

# ============= List-1 =============

def first_last6(nums):
    """
    Given an array of ints, return True if 6 appears as either the first or last element in the array.
    """
    return nums[0] == 6 or nums[-1] == 6

def same_first_last(nums):
    """
    Given an array of ints, return True if the array is length 1 or more, and the first element
    and the last element are equal.
    """
    return len(nums) >= 1 and nums[0] == nums[-1]

def make_pi():
    """
    Return an int array length 3 containing the first 3 digits of pi, {3, 1, 4}.
    """
    return [3, 1, 4]

def common_end(a, b):
    """
    Given 2 arrays of ints, a and b, return True if they have the same first element
    or they have the same last element.
    """
    return a[0] == b[0] or a[-1] == b[-1]

def sum3(nums):
    """
    Given an array of ints length 3, return the sum of all the elements.
    """
    return sum(nums)

# ============= Logic-1 =============

def cigar_party(cigars, is_weekend):
    """
    When squirrels get together for a party, they like to have cigars.
    A squirrel party is successful when the number of cigars is between 40 and 60, inclusive.
    Unless it is the weekend, in which case there is no upper bound on the number of cigars.
    Return True if the party with the given values is successful, or False otherwise.
    """
    if is_weekend:
        return cigars >= 40
    return 40 <= cigars <= 60

def date_fashion(you, date):
    """
    You and your date are trying to get a table at a restaurant.
    The parameter "you" is the stylishness of your clothes, in the range 0..10,
    and "date" is the stylishness of your date's clothes.
    The result getting the table is encoded as an int value with 0=no, 1=maybe, 2=yes.
    If either of you is very stylish, 8 or more, then the result is 2 (yes).
    With the exception that if either of you has style of 2 or less, then the result is 0 (no).
    Otherwise the result is 1 (maybe).
    """
    if you <= 2 or date <= 2:
        return 0
    if you >= 8 or date >= 8:
        return 2
    return 1

def squirrel_play(temp, is_summer):
    """
    The squirrels in Palo Alto spend most of the day playing.
    In particular, they play if the temperature is between 60 and 90 (inclusive).
    Unless it is summer, then the upper limit is 100 instead of 90.
    Given an int temperature and a boolean is_summer, return True if the squirrels play and False otherwise.
    """
    upper_limit = 100 if is_summer else 90
    return 60 <= temp <= upper_limit

def caught_speeding(speed, is_birthday):
    """
    You are driving a little too fast, and a police officer stops you.
    Write code to compute the result, encoded as an int value: 0=no ticket, 1=small ticket, 2=big ticket.
    If speed is 60 or less, the result is 0. If speed is between 61 and 80 inclusive, the result is 1.
    If speed is 81 or more, the result is 2. Unless it is your birthday -- on that day,
    your speed can be 5 higher in all cases.
    """
    if is_birthday:
        speed -= 5
    
    if speed <= 60:
        return 0
    elif speed <= 80:
        return 1
    else:
        return 2

def sorta_sum(a, b):
    """
    Given 2 ints, a and b, return their sum. However, sums in the range 10..19 inclusive,
    are forbidden, so in that case just return 20.
    """
    total = a + b
    if 10 <= total <= 19:
        return 20
    return total

# ============= Logic-2 =============

def make_bricks(small, big, goal):
    """
    We want to make a row of bricks that is goal inches long. We have a number of small bricks
    (1 inch each) and big bricks (5 inches each). Return True if it is possible to make the goal
    by choosing from the given bricks.
    """
    max_big_bricks_used = min(big, goal // 5)
    remaining_inches = goal - (max_big_bricks_used * 5)
    return remaining_inches <= small

def lone_sum(a, b, c):
    """
    Given 3 int values, a b c, return their sum. However, if one of the values is the same as another
    of the values, it does not count towards the sum.
    """
    total = 0
    if a != b and a != c:
        total += a
    if b != a and b != c:
        total += b
    if c != a and c != b:
        total += c
    return total

def lucky_sum(a, b, c):
    """
    Given 3 int values, a b c, return their sum. However, if one of the values is 13
    then it does not count towards the sum and values to its right do not count.
    """
    if a == 13:
        return 0
    if b == 13:
        return a
    if c == 13:
        return a + b
    return a + b + c

def no_teen_sum(a, b, c):
    """
    Given 3 int values, a b c, return their sum. However, if any of the values is a teen --
    in the range 13..19 inclusive -- then that value counts as 0, except 15 and 16 do not count as teens.
    """
    return fix_teen(a) + fix_teen(b) + fix_teen(c)

def fix_teen(n):
    """
    Helper for no_teen_sum.
    """
    if 13 <= n <= 19 and n not in [15, 16]:
        return 0
    return n

# ============= String-2 =============

def double_char(str):
    """
    Given a string, return a string where for every char in the original, there are two chars.
    """
    result = ""
    for char in str:
        result += char * 2
    return result

def count_hi(str):
    """
    Return the number of times that the string "hi" appears anywhere in the given string.
    """
    return str.count("hi")

def cat_dog(str):
    """
    Return True if the string "cat" and "dog" appear the same number of times in the given string.
    """
    return str.count("cat") == str.count("dog")

def count_code(str):
    """
    Return the number of times that the string "code" appears anywhere in the given string,
    except we'll accept any letter for the 'd', so "cope" and "cooe" count.
    """
    count = 0
    for i in range(len(str) - 3):
        if str[i:i+2] == "co" and str[i+3] == "e":
            count += 1
    return count

def end_other(a, b):
    """
    Given two strings, return True if either of the strings appears at the very end of the other string,
    ignoring upper/lower case differences.
    """
    a = a.lower()
    b = b.lower()
    return a.endswith(b) or b.endswith(a)

# ============= List-2 =============

def count_evens(nums):
    """
    Return the number of even ints in the given array.
    """
    return len([num for num in nums if num % 2 == 0])

def big_diff(nums):
    """
    Given an array length 1 or more of ints, return the difference between the largest and smallest values in the array.
    """
    return max(nums) - min(nums)

def centered_average(nums):
    """
    Return the "centered" average of an array of ints, which we'll say is the mean average of the values,
    except ignoring the largest and smallest values in the array. If there are multiple copies of the smallest value,
    ignore just one copy, and likewise for the largest value. Use int division to produce the final average.
    You may assume that the array is length 3 or more.
    """
    nums.sort()
    return sum(nums[1:-1]) // (len(nums) - 2)

def sum13(nums):
    """
    Return the sum of the numbers in the array, returning 0 for an empty array.
    Except the number 13 is very unlucky, so it does not count and numbers that
    come immediately after a 13 also do not count.
    """
    if not nums:
        return 0
    
    total = 0
    i = 0
    while i < len(nums):
        if nums[i] == 13:
            i += 2  # Skip current 13 and next number
        else:
            total += nums[i]
            i += 1
    return total

def sum67(nums):
    """
    Return the sum of the numbers in the array, except ignore sections of numbers
    starting with a 6 and extending to the next 7 (every 6 will be followed by at least one 7).
    Return 0 for no numbers.
    """
    total = 0
    ignore = False
    
    for num in nums:
        if num == 6:
            ignore = True
        elif num == 7 and ignore:
            ignore = False
        elif not ignore:
            total += num
    
    return total

if __name__ == "__main__":
    print("This file contains solutions for CodingBat Python problems") 