# HeadHunter API

A simple Django-based API for a headhunter-like service. This project demonstrates model relationships between Companies and Vacancies.

## Installation

1. Clone the repository
2. Activate the virtual environment:
   ```
   source .venv/bin/activate
   ```
3. Install dependencies:
   ```
   pip install -r requirements.txt
   ```
4. Apply migrations:
   ```
   python manage.py migrate
   ```
5. Load sample data:
   ```
   python manage.py populate_db
   ```
6. Create a superuser to access the admin interface:
   ```
   python manage.py createsuperuser
   ```
7. Run the development server:
   ```
   python manage.py runserver
   ```

## API Endpoints

The API provides the following endpoints:

- `/api/companies/` - List of all Companies
- `/api/companies/<int:id>/` - Get one Company
- `/api/companies/<int:id>/vacancies/` - List of Vacancies by Company
- `/api/vacancies/` - List of all Vacancies
- `/api/vacancies/<int:id>/` - Get one Vacancy
- `/api/vacancies/top_ten/` - List of top 10 vacancies sorted by decreasing salary

## Models

### Company

- `name` - Company name
- `description` - Company description
- `city` - City where the company is located
- `address` - Full address of the company

### Vacancy

- `name` - Vacancy title
- `description` - Vacancy description
- `salary` - Salary for the position
- `company` - Foreign key to Company model
