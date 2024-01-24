export interface ProductRating {
  rate: number;
  count: number;
}

export interface ProductModel {
  id: number;
  title: string;
  price: number;
  image: string;
  description?: string;
  category?: string;
  rating?: ProductRating;
}

//   export interface CartProduct extends Product {
//     quantity: number;
//   }
