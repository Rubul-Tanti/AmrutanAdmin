

export interface Product {
  id: number;
  name: string;
  image: string;
  description: string;
  status: 'Active' | 'Inactive';
}