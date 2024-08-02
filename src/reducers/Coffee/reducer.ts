import { ProductInterfaceProps } from '../../interfaces/Product';
import { ActionEnum } from './actions';

interface CoffeeState {
  coffeeList: ProductInterfaceProps[];
  cartList: ProductInterfaceProps[];
}

export function coffeeReducer(state: CoffeeState, action: any) {
  switch (action.type) {
    case ActionEnum.ADD_ITEM_CARD: {
      const hasItem = state.cartList.some(
        (item) => item.id === action.payload.product.id,
      );
      if (!hasItem) {
        return {
          ...state,
          cartList: [...state.cartList, action.payload.product],
        };
      } else {
        return {
          ...state,
          cartList: state.cartList.map((item) => {
            if (item.id === action.payload.product.id) {
              return { ...item, amount: action.payload.product.amount };
            } else {
              return item;
            }
          }),
        };
      }
    }
    case ActionEnum.REMOVE_ITEM_CARD: {
      return {
        ...state,
        cartList: state.cartList.filter((item) => {
          if (item.id !== action.payload.id) {
            return item;
          }
        }),
      };
    }

    case ActionEnum.UPDATE_ITEM_CARD: {
      return {
        ...state,
        cartList: state.cartList.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, amount: action.payload.amount };
          } else {
            return item;
          }
        }),
      };
    }

    default:
      return state;
  }
}
