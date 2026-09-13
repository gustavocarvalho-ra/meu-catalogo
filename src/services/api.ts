import axios from 'axios';
import { Product, ProductsResponse } from '../types';

export const api = axios.create({
  baseURL: 'https://dummyjson.com',
  timeout: 10000,
});

export const fetchProductsByCategory = async (
  category: string
): Promise<Product[]> => {
  const response = await api.get<ProductsResponse>(
    `/products/category/${category}`
  );
  return response.data.products;
};

export const fetchProductById = async (id: number): Promise<Product> => {
  const response = await api.get<Product>(`/products/${id}`);
  return response.data;
};