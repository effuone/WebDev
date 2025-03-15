import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product, Category } from '../models/products';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private categories: Category[] = [
    { id: 1, name: 'Smartphones' },
    { id: 2, name: 'Laptops' },
    { id: 3, name: 'Gadgets' },
    { id: 4, name: 'Home Appliances' },
  ];

  private products: Product[] = [
    // Category 1: Smartphones
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
      categoryId: 1,
      likes: 0,
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
      categoryId: 1,
      likes: 0,
    },
    {
      id: 11,
      name: 'Google Pixel 8 Pro',
      description:
        'Pure Android experience with a 50MP camera, Tensor G3 chip and 120Hz display',
      rating: 4.7,
      imageUrl:
        'https://resources.cdn-kaspi.kz/img/m/p/hd1/hc9/84326216630302.jpg?format=preview-large',
      kaspiLink:
        'https://kaspi.kz/shop/p/google-pixel-8-pro-12-gb-128-gb-chernyi-114166752/',
      price: '499 990 ₸',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hd1/hc9/84326216630302.jpg?format=preview-large',
        'https://resources.cdn-kaspi.kz/img/m/p/hd1/hc9/84326216630302.jpg?format=preview-large',
      ],
      categoryId: 1,
      likes: 0,
    },
    {
      id: 12,
      name: 'Xiaomi 14 Ultra',
      description:
        'High-end smartphone with Snapdragon 8 Gen 3, Leica cameras and AMOLED display',
      rating: 4.6,
      imageUrl:
        'https://resources.cdn-kaspi.kz/img/m/p/h86/h08/85506637168670.jpg?format=preview-large',
      kaspiLink:
        'https://kaspi.kz/shop/p/xiaomi-14-ultra-16-gb-512-gb-chernyi-116694055/',
      price: '599 990 ₸',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h86/h08/85506637168670.jpg?format=preview-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h86/h08/85506637168670.jpg?format=preview-large',
      ],
      categoryId: 1,
      likes: 0,
    },
    {
      id: 13,
      name: 'OnePlus 12',
      description:
        'Flagship with Snapdragon 8 Gen 3, Hasselblad cameras and super-fast charging',
      rating: 4.5,
      imageUrl:
        'https://resources.cdn-kaspi.kz/img/m/p/p62/p82/24035969.jpg?format=preview-large',
      kaspiLink:
        'https://kaspi.kz/shop/p/oneplus-12-16-gb-512-gb-chernyi-116234002/',
      price: '539 990 ₸',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p62/p82/24035969.jpg?format=preview-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p62/p82/24035969.jpg?format=preview-large',
      ],
      categoryId: 1,
      likes: 0,
    },

    // Category 2: Laptops
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
      categoryId: 2,
      likes: 0,
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
      categoryId: 2,
      likes: 0,
    },
    {
      id: 14,
      name: 'Dell XPS 15',
      description:
        'Premium laptop with Intel Core i7, 16GB RAM, 512GB SSD and NVIDIA RTX 3050 Ti',
      rating: 4.7,
      imageUrl:
        'https://resources.cdn-kaspi.kz/img/m/p/h2d/hb8/67728241262622.jpg?format=preview-large',
      kaspiLink:
        'https://kaspi.kz/shop/p/dell-xps-15-9530-15-6-32-gb-ssd-1000-gb-windows-11-home-111249781/',
      price: '1 199 990 ₸',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h2d/hb8/67728241262622.jpg?format=preview-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h2d/hb8/67728241262622.jpg?format=preview-large',
      ],
      categoryId: 2,
      likes: 0,
    },
    {
      id: 15,
      name: 'HP Spectre x360',
      description:
        'Convertible laptop with OLED display, Intel Core i7, 16GB RAM and touchscreen',
      rating: 4.6,
      imageUrl:
        'https://resources.cdn-kaspi.kz/img/m/p/h82/hbb/85832389918750.png?format=preview-large',
      kaspiLink:
        'https://kaspi.kz/shop/p/hp-spectre-x360-14-ef0172na-14-16-gb-ssd-1000-gb-windows-11-home-chernyi-108971393/',
      price: '899 990 ₸',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h82/hbb/85832389918750.png?format=preview-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h82/hbb/85832389918750.png?format=preview-large',
      ],
      categoryId: 2,
      likes: 0,
    },
    {
      id: 16,
      name: 'HP Spectre x360',
      description:
        'Business laptop with Intel Core i7, 16GB RAM, 1TB SSD and excellent keyboard',
      rating: 4.8,
      imageUrl:
        'https://resources.cdn-kaspi.kz/img/m/p/h56/h7b/85832828157982.jpg?format=preview-large',
      kaspiLink:
        'https://kaspi.kz/shop/p/lenovo-thinkpad-x1-carbon-gen-10-21cb0067rt-14-32-gb-ssd-1000-gb-windows-11-pro-chernyi-108137062/',
      price: '1 099 990 ₸',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h56/h7b/85832828157982.jpg?format=preview-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h56/h7b/85832828157982.jpg?format=preview-large',
      ],
      categoryId: 2,
      likes: 0,
    },

    // Category 3: Gadgets
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
      categoryId: 3,
      likes: 0,
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
      categoryId: 3,
      likes: 0,
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
      categoryId: 3,
      likes: 0,
    },
    {
      id: 17,
      name: 'GoPro HERO12 Black',
      description:
        'Action camera with 5.3K video, HyperSmooth 6.0 stabilization and waterproof design',
      rating: 4.7,
      imageUrl:
        'https://resources.cdn-kaspi.kz/img/m/p/p14/pe8/28750744.jpg?format=preview-large',
      kaspiLink:
        'https://kaspi.kz/shop/p/gopro-hero12-black-chernyi-112864254/',
      price: '189 990 ₸',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p14/pe8/28750744.jpg?format=preview-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p14/pe8/28750744.jpg?format=preview-large',
      ],
      categoryId: 3,
      likes: 0,
    },
    {
      id: 18,
      name: 'Oculus Quest 3',
      description:
        'Advanced VR headset with high-resolution display and motion controllers',
      rating: 4.6,
      imageUrl:
        'https://resources.cdn-kaspi.kz/img/m/p/h00/h89/84023738925086.png?format=preview-large',
      kaspiLink: 'https://kaspi.kz/shop/p/meta-quest-3-128-gb-belyi-114087027/',
      price: '249 990 ₸',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h00/h89/84023738925086.png?format=preview-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h00/h89/84023738925086.png?format=preview-large',
      ],
      categoryId: 3,
      likes: 0,
    },

    // Category 4: Home Appliances
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
      categoryId: 4,
      likes: 0,
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
        'https://kaspi.kz/shop/p/samsung-qe65s95cauxce-165-sm-chernyi-109228453/',
      price: '1 589 990 ₸',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h03/h20/85428948598814.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h03/h20/85428948598814.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h03/h20/85428948598814.png?format=gallery-medium',
      ],
      categoryId: 4,
      likes: 0,
    },
    {
      id: 19,
      name: 'Bosch Series 6 Dishwasher',
      description:
        'Energy-efficient dishwasher with multiple programs and quiet operation',
      rating: 4.7,
      imageUrl:
        'https://resources.cdn-kaspi.kz/img/m/p/h95/h0a/63784196636702.jpg?format=gallery-medium',
      kaspiLink:
        'https://kaspi.kz/shop/p/bosch-sms6eci03e-serebristyi-100344115/',
      price: '349 990 ₸',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h95/h0a/63784196636702.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h95/h0a/63784196636702.jpg?format=gallery-medium',
      ],
      categoryId: 4,
      likes: 0,
    },
    {
      id: 20,
      name: 'LG InstaView Refrigerator',
      description:
        'Smart refrigerator with knock-twice-to-see-inside feature and large capacity',
      rating: 4.8,
      imageUrl:
        'https://resources.cdn-kaspi.kz/img/m/p/h42/hb8/64411622809630.jpg?format=gallery-medium',
      kaspiLink: 'https://kaspi.kz/shop/p/lg-gr-x257csav-serebristyi-2700387/',
      price: '1 299 990 ₸',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h42/hb8/64411622809630.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h42/hb8/64411622809630.jpg?format=gallery-medium',
      ],
      categoryId: 4,
      likes: 0,
    },
    {
      id: 21,
      name: 'Dyson V15 Detect',
      description:
        'Advanced cordless vacuum with laser dust detection and powerful suction',
      rating: 4.9,
      imageUrl:
        'https://resources.cdn-kaspi.kz/img/m/p/h46/h41/64144716349470.jpg?format=gallery-medium',
      kaspiLink:
        'https://kaspi.kz/shop/p/dyson-v15-detect-absolute-sinii-102531142/',
      price: '499 990 ₸',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h46/h41/64144716349470.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h46/h41/64144716349470.jpg?format=gallery-medium',
      ],
      categoryId: 4,
      likes: 0,
    },
  ];

  constructor() {}

  getCategories(): Observable<Category[]> {
    return of(this.categories);
  }

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getProductsByCategory(categoryId: number): Observable<Product[]> {
    return of(
      this.products.filter((product) => product.categoryId === categoryId)
    );
  }

  getProduct(id: number): Observable<Product | undefined> {
    return of(this.products.find((product) => product.id === id));
  }

  likeProduct(productId: number): Observable<Product> {
    const product = this.products.find((p) => p.id === productId);
    if (product) {
      product.likes += 1;
    }
    return of(product as Product);
  }

  removeProduct(productId: number): void {
    this.products = this.products.filter((product) => product.id !== productId);
  }
}
