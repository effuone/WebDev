import os
from django.core.management.base import BaseCommand
from api.models import Category, Product
import re

class Command(BaseCommand):
    help = 'Seed the database with products and categories from Lab05'

    def handle(self, *args, **kwargs):
        self.stdout.write(self.style.SUCCESS('Seeding database with products and categories...'))
        
        # Delete existing data
        Product.objects.all().delete()
        Category.objects.all().delete()
        
        # Create categories
        categories = [
            {'id': 1, 'name': 'Smartphones'},
            {'id': 2, 'name': 'Laptops'},
            {'id': 3, 'name': 'Gadgets'},
            {'id': 4, 'name': 'Home Appliances'},
        ]
        
        for category_data in categories:
            Category.objects.create(
                id=category_data['id'],
                name=category_data['name']
            )
        
        self.stdout.write(self.style.SUCCESS(f'Created {len(categories)} categories'))
        
        # Create products
        products = [
            # Smartphones (Category 1)
            {
                'id': 1,
                'name': 'Apple iPhone 15 Pro Max',
                'description': 'A16 Pro chip, 48MP camera, titanium design, USB-C, and all-day battery life',
                'price': 699990,
                'count': 100,
                'is_active': True,
                'category_id': 1
            },
            {
                'id': 2,
                'name': 'Samsung Galaxy S24 Ultra',
                'description': 'Flagship smartphone with Snapdragon 8 Gen 3 chip, 200MP camera and S Pen support',
                'price': 649990,
                'count': 85,
                'is_active': True,
                'category_id': 1
            },
            {
                'id': 11,
                'name': 'Google Pixel 8 Pro',
                'description': 'Pure Android experience with a 50MP camera, Tensor G3 chip and 120Hz display',
                'price': 499990,
                'count': 70,
                'is_active': True,
                'category_id': 1
            },
            {
                'id': 12,
                'name': 'Xiaomi 14 Ultra',
                'description': 'High-end smartphone with Snapdragon 8 Gen 3, Leica cameras and AMOLED display',
                'price': 599990,
                'count': 60,
                'is_active': True,
                'category_id': 1
            },
            {
                'id': 13,
                'name': 'OnePlus 12',
                'description': 'Flagship with Snapdragon 8 Gen 3, Hasselblad cameras and super-fast charging',
                'price': 539990,
                'count': 50,
                'is_active': True,
                'category_id': 1
            },
            
            # Laptops (Category 2)
            {
                'id': 3,
                'name': 'Apple MacBook Air 13 M2',
                'description': 'Powerful laptop with M2 chip, 13.6" Liquid Retina display, and up to 18 hours of battery life',
                'price': 599990,
                'count': 40,
                'is_active': True,
                'category_id': 2
            },
            {
                'id': 6,
                'name': 'ASUS ROG Strix G16',
                'description': 'Gaming laptop with Intel Core i9, RTX 4060, 16GB RAM, and high refresh rate display',
                'price': 1029800,
                'count': 30,
                'is_active': True,
                'category_id': 2
            },
            {
                'id': 14,
                'name': 'Dell XPS 15',
                'description': 'Premium laptop with Intel Core i7, 16GB RAM, 512GB SSD and NVIDIA RTX 3050 Ti',
                'price': 1199990,
                'count': 25,
                'is_active': True,
                'category_id': 2
            },
            {
                'id': 15,
                'name': 'HP Spectre x360',
                'description': 'Convertible laptop with OLED display, Intel Core i7, 16GB RAM and touchscreen',
                'price': 899990,
                'count': 20,
                'is_active': True,
                'category_id': 2
            },
            {
                'id': 16,
                'name': 'Lenovo ThinkPad X1 Carbon',
                'description': 'Business laptop with Intel Core i7, 16GB RAM, 1TB SSD and excellent keyboard',
                'price': 1099990,
                'count': 15,
                'is_active': True,
                'category_id': 2
            },
            
            # Gadgets (Category 3)
            {
                'id': 7,
                'name': 'Apple Watch Series 9',
                'description': 'Advanced smartwatch with always-on display, health monitoring, and fitness tracking',
                'price': 181521,
                'count': 120,
                'is_active': True,
                'category_id': 3
            },
            {
                'id': 8,
                'name': 'DJI Mini 3',
                'description': 'Lightweight drone with 4K camera, 38-minute flight time, and obstacle avoidance',
                'price': 594990,
                'count': 10,
                'is_active': True,
                'category_id': 3
            },
            {
                'id': 10,
                'name': 'Bose QuietComfort Ultra',
                'description': 'Premium noise-cancelling headphones with spatial audio and up to 24 hours of battery life',
                'price': 249990,
                'count': 35,
                'is_active': True,
                'category_id': 3
            },
            {
                'id': 17,
                'name': 'GoPro HERO12 Black',
                'description': 'Action camera with 5.3K video, HyperSmooth 6.0 stabilization and waterproof design',
                'price': 189990,
                'count': 40,
                'is_active': True,
                'category_id': 3
            },
            {
                'id': 18,
                'name': 'Oculus Quest 3',
                'description': 'Advanced VR headset with high-resolution display and motion controllers',
                'price': 249990,
                'count': 15,
                'is_active': True,
                'category_id': 3
            },
            
            # Home Appliances (Category 4)
            {
                'id': 5,
                'name': 'Xiaomi Robot Vacuum S10+',
                'description': 'Smart robot vacuum with strong suction power, LiDAR navigation, and mopping functionality',
                'price': 140030,
                'count': 50,
                'is_active': True,
                'category_id': 4
            },
            {
                'id': 9,
                'name': 'Samsung QE65S95C',
                'description': '65" 4K OLED TV with Quantum Processor, Dolby Atmos, and Gaming Hub',
                'price': 1589990,
                'count': 5,
                'is_active': True,
                'category_id': 4
            },
            {
                'id': 19,
                'name': 'Bosch Series 6 Dishwasher',
                'description': 'Energy-efficient dishwasher with multiple programs and quiet operation',
                'price': 349990,
                'count': 20,
                'is_active': True,
                'category_id': 4
            },
            {
                'id': 20,
                'name': 'LG InstaView Refrigerator',
                'description': 'Smart refrigerator with knock-twice-to-see-inside feature and large capacity',
                'price': 1299990,
                'count': 10,
                'is_active': True,
                'category_id': 4
            },
            {
                'id': 21,
                'name': 'Dyson V15 Detect',
                'description': 'Advanced cordless vacuum with laser dust detection and powerful suction',
                'price': 499990,
                'count': 25,
                'is_active': True,
                'category_id': 4
            },
        ]
        
        for product_data in products:
            Product.objects.create(
                id=product_data['id'],
                name=product_data['name'],
                description=product_data['description'],
                price=product_data['price'],
                count=product_data['count'],
                is_active=product_data['is_active'],
                category_id=product_data['category_id']
            )
        
        self.stdout.write(self.style.SUCCESS(f'Created {len(products)} products')) 