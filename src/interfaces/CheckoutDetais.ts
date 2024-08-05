import { ProductInterfaceProps } from './Product';

export interface CheckoutDetails {
  number: string;
  amount: number;
  cep: string;
  city: string;
  downtown: string;
  address: string;
  complement: string;
  payment: string;
  uf: string;
  itensCart: number;
  costFreight: number;
  cartList: ProductInterfaceProps[];
}
