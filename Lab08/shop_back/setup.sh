#!/bin/bash

# Create virtual environment if it doesn't exist
if [ ! -d ".venv" ]; then
    echo "Creating virtual environment..."
    python3 -m venv .venv
fi

# Activate virtual environment
source .venv/bin/activate

# Install dependencies
echo "Installing dependencies..."
pip install -r requirements.txt

# Run migrations
echo "Running migrations..."
python manage.py makemigrations
python manage.py migrate

# Seed data
read -p "Do you want to seed the database with sample data? (y/n): " seed_database
if [ "$seed_database" = "y" ]; then
    echo "Seeding database..."
    python manage.py seed_data
fi

# Create a superuser if needed
read -p "Do you want to create a superuser? (y/n): " create_superuser
if [ "$create_superuser" = "y" ]; then
    python manage.py createsuperuser
fi

# Run server
read -p "Do you want to run the server now? (y/n): " run_server
if [ "$run_server" = "y" ]; then
    python manage.py runserver
fi 