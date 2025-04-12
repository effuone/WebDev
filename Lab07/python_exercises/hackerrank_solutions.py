"""
Solutions for 10 HackerRank Python problems
https://www.hackerrank.com/domains/python
"""

# 1. Say "Hello, World!" With Python
def hello_world():
    print("Hello, World!")

# 2. Python If-Else
def if_else():
    n = int(input().strip())
    if n % 2 != 0:
        print("Weird")
    elif n >= 2 and n <= 5:
        print("Not Weird")
    elif n >= 6 and n <= 20:
        print("Weird")
    else:
        print("Not Weird")

# 3. Arithmetic Operators
def arithmetic_operators():
    a = int(input())
    b = int(input())
    print(a + b)
    print(a - b)
    print(a * b)

# 4. Python: Division
def division():
    a = int(input())
    b = int(input())
    print(a // b)  # Integer division
    print(a / b)   # Float division

# 5. Loops
def loops():
    n = int(input())
    for i in range(n):
        print(i ** 2)

# 6. Write a function (is leap year)
def is_leap(year):
    if year % 400 == 0:
        return True
    if year % 100 == 0:
        return False
    if year % 4 == 0:
        return True
    return False

# 7. Print Function
def print_function():
    n = int(input())
    for i in range(1, n + 1):
        print(i, end="")

# 8. List Comprehensions
def list_comprehensions():
    x = int(input())
    y = int(input())
    z = int(input())
    n = int(input())
    
    result = [[i, j, k] for i in range(x + 1) for j in range(y + 1) for k in range(z + 1) if i + j + k != n]
    print(result)

# 9. Find the Runner-Up Score!
def runner_up_score():
    n = int(input())
    arr = list(map(int, input().split()))
    max_score = max(arr)
    filtered = [score for score in arr if score != max_score]
    print(max(filtered))

# 10. Nested Lists
def nested_lists():
    records = []
    for _ in range(int(input())):
        name = input()
        score = float(input())
        records.append([name, score])
    
    # Find second lowest grade
    grades = sorted(set([record[1] for record in records]))
    second_lowest = grades[1]
    
    # Get names of students with second lowest grade
    names = sorted([record[0] for record in records if record[1] == second_lowest])
    
    # Print names
    for name in names:
        print(name)

if __name__ == "__main__":
    print("This file contains solutions for HackerRank Python problems") 