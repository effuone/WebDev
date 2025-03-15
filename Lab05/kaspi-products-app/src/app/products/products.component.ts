import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../services/products.service';
import { Product, Category } from '../models/products';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  categories: Category[] = [];
  selectedProduct: Product | null = null;
  currentImageIndex = 0;
  selectedCategory: Category | null = null;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.productService.getCategories().subscribe((categories) => {
      this.categories = categories;
      if (categories.length > 0) {
        this.selectCategory(categories[0]);
      }
    });
  }

  selectCategory(category: Category): void {
    this.selectedCategory = category;
    this.loadProductsByCategory(category.id);
  }

  loadProductsByCategory(categoryId: number): void {
    this.productService
      .getProductsByCategory(categoryId)
      .subscribe((products) => {
        this.products = products;
      });
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }

  shareOnWhatsApp(product: Product): void {
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(
      product.kaspiLink
    )}`;
    window.open(whatsappUrl, '_blank');
  }

  shareOnTelegram(product: Product): void {
    const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(
      product.kaspiLink
    )}&text=${encodeURIComponent(product.name)}`;
    window.open(telegramUrl, '_blank');
  }

  likeProduct(product: Product): void {
    this.productService.likeProduct(product.id).subscribe((updatedProduct) => {
      if (updatedProduct) {
        product.likes = updatedProduct.likes;
      }
    });
  }

  removeProduct(product: Product): void {
    this.productService.removeProduct(product.id);
    this.products = this.products.filter((p) => p.id !== product.id);
  }

  openGallery(product: Product): void {
    this.selectedProduct = product;
    this.currentImageIndex = 0;
  }

  closeGallery(): void {
    this.selectedProduct = null;
  }

  nextImage(): void {
    if (this.selectedProduct && this.selectedProduct.images) {
      this.currentImageIndex =
        (this.currentImageIndex + 1) % this.selectedProduct.images.length;
    }
  }

  prevImage(): void {
    if (this.selectedProduct && this.selectedProduct.images) {
      this.currentImageIndex =
        (this.currentImageIndex - 1 + this.selectedProduct.images.length) %
        this.selectedProduct.images.length;
    }
  }

  getStarsArray(rating: number): number[] {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const starsArray = Array(5).fill(0);

    for (let i = 0; i < fullStars; i++) {
      starsArray[i] = 1;
    }

    if (hasHalfStar && fullStars < 5) {
      starsArray[fullStars] = 0.5; // Half star
    }

    return starsArray;
  }
}
