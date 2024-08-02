import { createContext, ReactNode, useReducer } from 'react';
import { ProductInterfaceProps } from '../interfaces/Product';
import { productList } from '../mocks/ProductList';
import {
  handleAddProductCart,
  handleRemoveProductCart,
  handleUpdateProductCart,
} from '../reducers/Coffee/actions';
import { coffeeReducer } from '../reducers/Coffee/reducer';
interface CoffeeContextType {
  coffeeList: ProductInterfaceProps[];
  cartList: ProductInterfaceProps[];
  addProductCart: (product: ProductInterfaceProps) => void;
  removeProductCart: (id: ProductInterfaceProps['id']) => void;
  updateProductCart: (
    id: ProductInterfaceProps['id'],
    amount: ProductInterfaceProps['amount'],
  ) => void;
}

export const CoffeeContext = createContext({} as CoffeeContextType);

interface CoffeeContextProviderProps {
  children: ReactNode;
}

export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {
  const [CoffeeState, dispatch] = useReducer(
    coffeeReducer,
    {
      coffeeList: [],
      cartList: [],
    },

    () => {
      return {
        coffeeList: productList,
        cartList: [],
      };
    },
  );

  function addProductCart(product: ProductInterfaceProps) {
    dispatch(handleAddProductCart(product));
  }

  function removeProductCart(id: ProductInterfaceProps['id']) {
    dispatch(handleRemoveProductCart(id));
  }

  function updateProductCart(
    id: ProductInterfaceProps['id'],
    amount: ProductInterfaceProps['amount'],
  ) {
    dispatch(handleUpdateProductCart(id, amount));
  }

  const { cartList, coffeeList } = CoffeeState;

  return (
    <CoffeeContext.Provider
      value={{
        coffeeList,
        cartList,
        addProductCart,
        removeProductCart,
        updateProductCart,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  );
}
