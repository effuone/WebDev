from django.core.management.base import BaseCommand
from api.models import Company, Vacancy
import random

class Command(BaseCommand):
    help = 'Populate database with sample data'

    def handle(self, *args, **kwargs):
        # Clear existing data
        self.stdout.write('Clearing existing data...')
        Vacancy.objects.all().delete()
        Company.objects.all().delete()

        # Create companies
        self.stdout.write('Creating companies...')
        companies = [
            Company.objects.create(
                name=f'Company {i}',
                description=f'Description for Company {i}',
                city=f'City {i % 5}',
                address=f'Address {i}, Street {i}'
            ) for i in range(1, 11)
        ]

        # Create vacancies
        self.stdout.write('Creating vacancies...')
        for i in range(1, 31):
            company = random.choice(companies)
            Vacancy.objects.create(
                name=f'Vacancy {i}',
                description=f'Description for Vacancy {i}',
                salary=random.uniform(1000, 5000),
                company=company
            )

        self.stdout.write(self.style.SUCCESS('Database has been populated successfully!')) 