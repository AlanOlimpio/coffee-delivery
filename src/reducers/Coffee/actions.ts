import { ProductInterfaceProps } from '../../interfaces/Product';

export enum ActionEnum {
  ADD_ITEM_CARD = 'ADD_ITEM_CARD',
  REMOVE_ITEM_CARD = 'REMOVE_ITEM_CARD',
  UPDATE_ITEM_CARD = 'UPDATE_ITEM_CARD',
}

export function handleAddProductCart(product: ProductInterfaceProps) {
  return {
    type: ActionEnum.ADD_ITEM_CARD,
    payload: {
      product,
    },
  };
}
export function handleRemoveProductCart(id: ProductInterfaceProps['id']) {
  return {
    type: ActionEnum.REMOVE_ITEM_CARD,
    payload: {
      id,
    },
  };
}

export function handleUpdateProductCart(
  id: ProductInterfaceProps['id'],
  amount: ProductInterfaceProps['amount'],
) {
  return {
    type: ActionEnum.UPDATE_ITEM_CARD,
    payload: {
      id,
      amount,
    },
  };
}
