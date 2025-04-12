"""
Solutions for tasks from informatics.msk.ru

This file contains examples of solutions for the following sections:
- Ввод-вывод, оператор присваивания (А-E)
- Условный оператор (А-Е)
- Циклы: Цикл for (A-M)
- Циклы: Цикл while (А-E)
- Массивы (А-G)
- Функции (А-С)
"""

# ============= Ввод-вывод, оператор присваивания =============

# A - Сумма двух чисел
def sum_two_numbers():
    a = int(input())
    b = int(input())
    print(a + b)

# B - Сумма трёх чисел
def sum_three_numbers():
    a = int(input())
    b = int(input())
    c = int(input())
    print(a + b + c)

# C - Куб
def cube():
    a = int(input())
    print(a**3)

# D - Последняя цифра
def last_digit():
    num = int(input())
    print(num % 10)

# E - Делёж яблок (1)
def apple_share():
    n = int(input())  # number of students
    k = int(input())  # number of apples
    print(k // n)     # apples per student
    print(k % n)      # apples remaining

# ============= Условный оператор =============

# A - Максимум из двух чисел
def max_of_two():
    a = int(input())
    b = int(input())
    if a > b:
        print(a)
    else:
        print(b)

# B - Знак числа
def sign_of_number():
    x = int(input())
    if x > 0:
        print(1)
    elif x < 0:
        print(-1)
    else:
        print(0)

# C - Високосный год
def leap_year():
    year = int(input())
    is_leap = (year % 4 == 0) and (year % 100 != 0 or year % 400 == 0)
    if is_leap:
        print("YES")
    else:
        print("NO")

# D - Минимум из трёх чисел
def min_of_three():
    a = int(input())
    b = int(input())
    c = int(input())
    min_num = a
    if b < min_num:
        min_num = b
    if c < min_num:
        min_num = c
    print(min_num)

# E - Количество равных из трёх
def equal_numbers():
    a = int(input())
    b = int(input())
    c = int(input())
    if a == b == c:
        print(3)
    elif a == b or b == c or a == c:
        print(2)
    else:
        print(0)

# ============= Циклы: Цикл for =============

# A - Ряд чисел 1
def number_sequence_1():
    a = int(input())
    b = int(input())
    for i in range(a, b + 1):
        print(i, end=' ')

# B - Ряд чисел 2
def number_sequence_2():
    a = int(input())
    b = int(input())
    if a < b:
        for i in range(a, b + 1):
            print(i, end=' ')
    else:
        for i in range(a, b - 1, -1):
            print(i, end=' ')

# C - Сумма N чисел
def sum_n_numbers():
    n = int(input())
    total = 0
    for _ in range(n):
        total += int(input())
    print(total)

# D - Факториал
def factorial():
    n = int(input())
    result = 1
    for i in range(2, n + 1):
        result *= i
    print(result)

# E - Количество нулей
def count_zeros():
    n = int(input())
    count = 0
    for _ in range(n):
        if int(input()) == 0:
            count += 1
    print(count)

# F - Лесенка
def staircase():
    n = int(input())
    for i in range(1, n + 1):
        for j in range(1, i + 1):
            print(j, end='')
        print()

# G - Сумма факториалов
def sum_of_factorials():
    n = int(input())
    factorial = 1
    total = 0
    for i in range(1, n + 1):
        factorial *= i
        total += factorial
    print(total)

# H - Поменять местами цифры
def swap_digits():
    n = int(input())
    last_digit = n % 10
    first_digit = n // 10
    print(last_digit * 10 + first_digit)

# I - Утренняя пробежка
def morning_run():
    x = int(input())  # initial run distance
    y = int(input())  # target distance
    days = 1
    while x < y:
        x = x * 1.1
        days += 1
    print(days)

# J - Количество членов последовательности
def sequence_length():
    count = 0
    while int(input()) != 0:
        count += 1
    print(count)

# K - Сумма последовательности
def sequence_sum():
    total = 0
    num = int(input())
    while num != 0:
        total += num
        num = int(input())
    print(total)

# L - Среднее значение последовательности
def sequence_average():
    total = 0
    count = 0
    num = int(input())
    while num != 0:
        total += num
        count += 1
        num = int(input())
    print(total / count)

# M - Максимум последовательности
def sequence_max():
    max_num = int(input())
    num = int(input())
    while num != 0:
        if num > max_num:
            max_num = num
        num = int(input())
    print(max_num)

# ============= Циклы: Цикл while =============

# A - Минимальный делитель
def min_divisor():
    n = int(input())
    i = 2
    while i * i <= n:
        if n % i == 0:
            print(i)
            return
        i += 1
    print(n)

# B - Степень двойки
def power_of_two():
    n = int(input())
    power = 1
    count = 0
    while power <= n:
        power *= 2
        count += 1
    print(count - 1)

# C - Точная степень двойки
def exact_power_of_two():
    n = int(input())
    while n > 1:
        if n % 2 != 0:
            print("NO")
            return
        n //= 2
    print("YES")

# D - Сложное уравнение
def complex_equation():
    a = int(input())
    b = int(input())
    c = int(input())
    d = int(input())
    
    if a == 0 and b == 0:
        print("INF")
    elif a == 0 or b * c == a * d:
        print("NO")
    elif b % a == 0:
        print(-b // a)
    else:
        print("NO")

# E - Циклы с ветвлением
def cycles_with_branching():
    for i in range(1, 21):
        for j in range(1, 21):
            for k in range(1, 21):
                if i**3 + j**3 == k**3:
                    print(f"{i}^3 + {j}^3 = {k}^3")

# ============= Массивы =============

# A - Количество положительных
def count_positive():
    arr = list(map(int, input().split()))
    count = 0
    for num in arr:
        if num > 0:
            count += 1
    print(count)

# B - Чётные индексы
def even_indices():
    arr = list(map(int, input().split()))
    for i in range(0, len(arr), 2):
        print(arr[i], end=' ')

# C - Чётные элементы
def even_elements():
    arr = list(map(int, input().split()))
    for num in arr:
        if num % 2 == 0:
            print(num, end=' ')

# D - Больше предыдущего
def greater_than_previous():
    arr = list(map(int, input().split()))
    for i in range(1, len(arr)):
        if arr[i] > arr[i-1]:
            print(arr[i], end=' ')

# E - Наибольший элемент
def largest_element():
    arr = list(map(int, input().split()))
    max_val = max(arr)
    max_idx = arr.index(max_val)
    print(max_val, max_idx)

# F - Переставить соседние
def swap_adjacent():
    arr = list(map(int, input().split()))
    for i in range(0, len(arr) - len(arr) % 2, 2):
        arr[i], arr[i+1] = arr[i+1], arr[i]
    print(' '.join(map(str, arr)))

# G - Переставить min и max
def swap_min_max():
    arr = list(map(int, input().split()))
    min_idx = arr.index(min(arr))
    max_idx = arr.index(max(arr))
    arr[min_idx], arr[max_idx] = arr[max_idx], arr[min_idx]
    print(' '.join(map(str, arr)))

# ============= Функции =============

# A - Минимум 4 чисел
def min_of_four(a, b, c, d):
    return min(min(a, b), min(c, d))

def min_four_numbers():
    a, b, c, d = map(int, input().split())
    print(min_of_four(a, b, c, d))

# B - Длина отрезка
def distance(x1, y1, x2, y2):
    return ((x2 - x1) ** 2 + (y2 - y1) ** 2) ** 0.5

def segment_length():
    x1, y1 = map(float, input().split())
    x2, y2 = map(float, input().split())
    print(distance(x1, y1, x2, y2))

# C - Принадлежит ли точка квадрату
def is_point_in_square(x, y):
    return abs(x) <= 1 and abs(y) <= 1

def point_in_square():
    x, y = map(float, input().split())
    print("YES" if is_point_in_square(x, y) else "NO")

if __name__ == "__main__":
    # You can call any function here to test it
    print("This file contains solutions for the tasks from informatics.msk.ru") 