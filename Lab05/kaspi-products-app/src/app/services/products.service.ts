import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/products';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Apple iPhone 15 Pro Max',
      description:
        'A16 Pro chip, 48MP camera, titanium design, USB-C, and all-day battery life',
      rating: 4.9,
      imageUrl:
        'https://resources.cdn-kaspi.kz/img/m/p/ha3/hda/86319874048030.jpg?format=gallery-medium',
      kaspiLink:
        'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-256-gb-seryi-116043556/?c=750000000',
      price: '699 990 ₸',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/ha3/hda/86319874048030.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/ha3/hda/86319874048030.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/ha3/hda/86319874048030.jpg?format=gallery-medium',
      ],
    },
    {
      id: 2,
      name: 'Samsung Galaxy S24 Ultra',
      description:
        'Flagship smartphone with Snapdragon 8 Gen 3 chip, 200MP camera and S Pen support',
      rating: 4.8,
      imageUrl:
        'https://resources.cdn-kaspi.kz/img/m/p/h7c/h38/84963297329182.png?format=gallery-medium',
      kaspiLink:
        'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-512gb-seryi-116356471/',
      price: '649 990 ₸',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h7c/h38/84963297329182.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h7c/h38/84963297329182.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h7c/h38/84963297329182.png?format=gallery-medium',
      ],
    },
    {
      id: 3,
      name: 'Apple MacBook Air 13 M2',
      description:
        'Powerful laptop with M2 chip, 13.6" Liquid Retina display, and up to 18 hours of battery life',
      rating: 4.9,
      imageUrl:
        'https://resources.cdn-kaspi.kz/img/m/p/hf4/h52/64509322919966.jpg?format=gallery-medium',
      kaspiLink:
        'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-8-gb-ssd-256-gb-macos-mlxw3-105933794/?c=750000000',
      price: '599 990 ₸',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hf4/h52/64509322919966.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hf4/h52/64509322919966.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hf4/h52/64509322919966.jpg?format=gallery-medium',
      ],
    },
    {
      id: 4,
      name: 'PlayStation 5 Slim',
      description:
        'Next-gen gaming console with ray tracing support, ultra-fast SSD, and DualSense controller',
      rating: 4.7,
      imageUrl:
        'https://resources.cdn-kaspi.kz/img/m/p/h20/h7e/84776332984350.jpg?format=gallery-medium',
      kaspiLink:
        'https://kaspi.kz/shop/p/sony-playstation-5-slim-geimpad-charging-station-115629963/?c=750000000',
      price: '356 823 ₸',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h20/h7e/84776332984350.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h20/h7e/84776332984350.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h20/h7e/84776332984350.jpg?format=gallery-medium',
      ],
    },
    {
      id: 5,
      name: 'Xiaomi Robot Vacuum S10+',
      description:
        'Smart robot vacuum with strong suction power, LiDAR navigation, and mopping functionality',
      rating: 4.6,
      imageUrl:
        'https://resources.cdn-kaspi.kz/img/m/p/p8d/pf5/6541167.jpg?format=gallery-medium',
      kaspiLink:
        'https://kaspi.kz/shop/p/xiaomi-robot-vacuum-s10-bhr6368eu-belyi-108100032/?c=750000000',
      price: '140 030 ₸',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p8d/pf5/6541167.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p8d/pf5/6541167.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p8d/pf5/6541167.jpg?format=gallery-medium',
      ],
    },
    {
      id: 6,
      name: 'ASUS ROG Strix G16',
      description:
        'Gaming laptop with Intel Core i9, RTX 4060, 16GB RAM, and high refresh rate display',
      rating: 4.8,
      imageUrl:
        'https://resources.cdn-kaspi.kz/img/m/p/hfe/h28/85628076032030.png?format=gallery-medium',
      kaspiLink:
        'https://kaspi.kz/shop/p/asus-rog-strix-g16-16-32-gb-ssd-1000-gb-dos-g614ji-n4181-90nr0d41-m00v20-118060952/?c=750000000',
      price: '1 029 800 ₸',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hfe/h28/85628076032030.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hfe/h28/85628076032030.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hfe/h28/85628076032030.png?format=gallery-medium',
      ],
    },
    {
      id: 7,
      name: 'Apple Watch Series 9',
      description:
        'Advanced smartwatch with always-on display, health monitoring, and fitness tracking',
      rating: 4.9,
      imageUrl:
        'https://resources.cdn-kaspi.kz/img/m/p/hd6/h66/83874218508318.png?format=gallery-medium',
      kaspiLink:
        'https://kaspi.kz/shop/p/apple-watch-series-9-gps-s-m-45-mm-sinii-chernyi-113398151/?c=750000000',
      price: '181 521 ₸',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hd6/h66/83874218508318.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hd6/h66/83874218508318.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hd6/h66/83874218508318.png?format=gallery-medium',
      ],
    },
    {
      id: 8,
      name: 'DJI Mini 3',
      description:
        'Lightweight drone with 4K camera, 38-minute flight time, and obstacle avoidance',
      rating: 4.7,
      imageUrl:
        'https://resources.cdn-kaspi.kz/img/m/p/h13/h41/68813194985502.jpg?format=gallery-medium',
      kaspiLink:
        'https://kaspi.kz/shop/p/dji-mini-3-dji-rc-fly-more-combo-plus-belyi-108821418/?c=750000000',
      price: '594 990 ₸',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h13/h41/68813194985502.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h13/h41/68813194985502.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h13/h41/68813194985502.jpg?format=gallery-medium',
      ],
    },
    {
      id: 9,
      name: 'Samsung QE65S95C',
      description:
        '65" 4K OLED TV with Quantum Processor, Dolby Atmos, and Gaming Hub',
      rating: 4.8,
      imageUrl:
        'https://resources.cdn-kaspi.kz/img/m/p/h03/h20/85428948598814.png?format=gallery-medium',
      kaspiLink:
        'https://kaspi.kz/shop/p/samsung-galaxy-a55-5g-8-gb-128-gb-temno-sinii-117420239/?c=750000000',
      price: '1 589 990 ₸',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h03/h20/85428948598814.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h03/h20/85428948598814.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h03/h20/85428948598814.png?format=gallery-medium',
      ],
    },
    {
      id: 10,
      name: 'Bose QuietComfort Ultra',
      description:
        'Premium noise-cancelling headphones with spatial audio and up to 24 hours of battery life',
      rating: 4.9,
      imageUrl:
        'https://resources.cdn-kaspi.kz/img/m/p/hf5/hb2/84622783053854.jpg?format=gallery-medium',
      kaspiLink:
        'https://kaspi.kz/shop/p/bose-quietcomfort-ultra-chernyi-115025647/?c=750000000',
      price: '249 990 ₸',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hf5/hb2/84622783053854.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hf5/hb2/84622783053854.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hf5/hb2/84622783053854.jpg?format=gallery-medium',
      ],
    },
  ];

  constructor() {}

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getProduct(id: number): Observable<Product | undefined> {
    return of(this.products.find((product) => product.id === id));
  }
}
