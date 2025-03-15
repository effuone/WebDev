export interface Product {
  id: number;
  name: string;
  description: string;
  rating: number;
  imageUrl: string;
  kaspiLink: string;
  price: string;
  images?: string[];
  categoryId: number;
  likes: number;
}

export interface Category {
  id: number;
  name: string;
}
