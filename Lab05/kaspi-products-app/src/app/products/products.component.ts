import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../services/products.service';
import { Product } from '../models/products';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  selectedProduct: Product | null = null;
  currentImageIndex = 0;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
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
