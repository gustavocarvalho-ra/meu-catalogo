export interface User {
  name: string;
  email: string;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  thumbnail: string;
  images: string[];
  category: string;
  rating: number;
  stock: number;
  brand?: string;
}

export interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export type RootStackParamList = {
  Login: undefined;
  Main: undefined;
  ProductDetails: { id: number };
};

export type MainTabParamList = {
  Inicio: undefined;
  Configuracoes: undefined;
};

export type ProductCategoryTab = 'masculino' | 'feminino';