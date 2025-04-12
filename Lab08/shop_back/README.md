# Shop Back API

This is a Django REST API for the Online Shop application from Lab 5.

## Setup

### Option 1: Using the setup script

1. Make sure the setup script is executable:

   ```bash
   chmod +x setup.sh
   ```

2. Run the setup script:

   ```bash
   ./setup.sh
   ```

   The script will guide you through:

   - Creating a virtual environment
   - Installing dependencies
   - Running migrations
   - Seeding the database with sample data from Lab 5
   - Creating a superuser (optional)
   - Running the server (optional)

### Option 2: Manual setup

1. Create a virtual environment:

   ```bash
   python3 -m venv .venv
   ```

2. Activate the virtual environment:

   ```bash
   source .venv/bin/activate
   ```

3. Install dependencies:

   ```bash
   pip install -r requirements.txt
   ```

4. Run migrations:

   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```

5. Seed the database with sample data from Lab 5 (optional):

   ```bash
   python manage.py seed_data
   ```

6. Create a superuser (optional):

   ```bash
   python manage.py createsuperuser
   ```

7. Run the server:
   ```bash
   python manage.py runserver
   ```

## API Endpoints

- `/api/products/` - List of all Products
- `/api/products/<int:id>/` - Get one Product
- `/api/categories/` - List of all Categories
- `/api/categories/<int:id>/` - Get one Category
- `/api/categories/<int:id>/products/` - List of Products by Category

## Admin Interface

Access the admin interface at `/admin/` to manage products and categories.

## Sample Data

The seed_data command populates the database with:

- 4 categories: Smartphones, Laptops, Gadgets, and Home Appliances
- 20 products spread across these categories

This data matches the products displayed in the Lab 5 frontend application.
