import { createContext, ReactNode, useReducer } from 'react';
import { ProductInterfaceProps } from '../interfaces/Product';
import { productList } from '../mocks/ProductList';
import {
  handleAddDetailsCheckout,
  handleAddProductCart,
  handleRemoveProductCart,
  handleResetCard,
  handleUpdateProductCart,
} from '../reducers/Coffee/actions';
import { coffeeReducer } from '../reducers/Coffee/reducer';
import { CheckoutDetails } from '../interfaces/CheckoutDetais';
interface CoffeeContextType {
  coffeeList: ProductInterfaceProps[];
  cartList: ProductInterfaceProps[];
  addProductCart: (product: ProductInterfaceProps) => void;
  removeProductCart: (id: ProductInterfaceProps['id']) => void;
  updateProductCart: (
    id: ProductInterfaceProps['id'],
    amount: ProductInterfaceProps['amount'],
  ) => void;
  resetCard: () => void;
  addDetailsCheckout: (data: CheckoutDetails) => void;
  detailsCheckout: CheckoutDetails;
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
      detailsCheckout: {},
    },

    () => {
      return {
        coffeeList: productList,
        cartList: [],
        detailsCheckout: {},
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

  function resetCard() {
    dispatch(handleResetCard());
  }

  function addDetailsCheckout(data: CheckoutDetails) {
    dispatch(handleAddDetailsCheckout(data));
  }

  const { cartList, coffeeList, detailsCheckout } = CoffeeState;

  return (
    <CoffeeContext.Provider
      value={{
        coffeeList,
        cartList,
        addProductCart,
        removeProductCart,
        updateProductCart,
        resetCard,
        addDetailsCheckout,
        detailsCheckout,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  );
}
