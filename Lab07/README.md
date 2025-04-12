# Lab07 - Python & Django Introduction

This laboratory work demonstrates Python programming skills and Django project setup.

## Directory Structure

```
Lab07/
├── django_project/        # Django project setup
│   ├── manage.py          # Django management script
│   └── mysite/            # Django project configuration
├── python_exercises/      # Python exercise solutions
│   ├── informatics_tasks.py   # Solutions for informatics.msk.ru tasks
│   ├── hackerrank_solutions.py # Solutions for HackerRank tasks
│   └── codingbat_solutions.py  # Solutions for CodingBat Python problems
└── README.md              # This file
```

## Task 1: Python Exercises

### Informatics.msk.ru Tasks

The file `python_exercises/informatics_tasks.py` contains solutions for the following sections:

- Ввод-вывод, оператор присваивания (А-E)
- Условный оператор (А-Е)
- Циклы: Цикл for (A-M)
- Циклы: Цикл while (А-E)
- Массивы (А-G)
- Функции (А-С)

### HackerRank Python Problems

The file `python_exercises/hackerrank_solutions.py` contains solutions for 10 HackerRank Python problems.

### CodingBat Python Problems

The file `python_exercises/codingbat_solutions.py` contains solutions for all sections in CodingBat Python:

- Warmup-1
- Warmup-2
- String-1
- List-1
- Logic-1
- Logic-2
- String-2
- List-2

## Task 2: Django Project Setup

A basic Django project has been set up in the `django_project` directory.

### How to Run the Django Project

1. Navigate to the django_project directory:

   ```
   cd django_project
   ```

2. Start the development server:

   ```
   python3 manage.py runserver
   ```

3. Access the application in your browser at:

   ```
   http://127.0.0.1:8000/
   ```

4. Access the admin site at:
   ```
   http://127.0.0.1:8000/admin/
   ```

### Admin User

A superuser has been created with the following credentials:

- Username: admin
- Password: (create your own password using the createsuperuser command)

To create your own superuser:

```
python3 manage.py createsuperuser
```

## Resources

- Python Documentation: https://www.python.org/doc/
- Django Documentation: https://docs.djangoproject.com/
- PEP 8 Style Guide: https://www.python.org/dev/peps/pep-0008/
- HackerRank Python: https://www.hackerrank.com/domains/python
- CodingBat Python: https://codingbat.com/python
- Informatics.msk.ru: https://informatics.msk.ru/
