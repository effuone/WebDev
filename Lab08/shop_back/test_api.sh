#!/bin/bash

# Make sure the server is running in another terminal with:
# python3 manage.py runserver

# Set base URL
BASE_URL="http://127.0.0.1:8000//api"

# Testing API endpoints
echo "Testing products endpoint..."
curl -s $BASE_URL/products/ | python3 -m json.tool

echo -e "\nTesting products detail endpoint..."
curl -s $BASE_URL/products/1/ | python3 -m json.tool

echo -e "\nTesting categories endpoint..."
curl -s $BASE_URL/categories/ | python3 -m json.tool

echo -e "\nTesting categories detail endpoint..."
curl -s $BASE_URL/categories/1/ | python3 -m json.tool

echo -e "\nTesting products by category endpoint..."
curl -s $BASE_URL/categories/1/products/ | python3 -m json.tool

echo -e "\nAPI test completed!" 