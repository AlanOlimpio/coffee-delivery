import { Minus, Plus } from 'phosphor-react';
import { InputCounter, ButtonCounter, WrapperCounter } from './CounterStyled';
import { defaultTheme } from '../../styles/themes/default';
import { MouseEvent, useContext, useRef } from 'react';
import { CoffeeContext } from '../../contexts/CoffeeContext';

interface CounterInterfaceProps {
  onClickCounter: (amountCount: number) => void;
  amount: number;
  cartUpdate: boolean;
  idProdutct: string;
}
function Counter({
  onClickCounter,
  amount,
  idProdutct,
  cartUpdate,
}: CounterInterfaceProps) {
  const counterRef = useRef<HTMLInputElement>(null);
  const { updateProductCart } = useContext(CoffeeContext);

  function upCounter(
    event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
  ) {
    event.preventDefault();
    if (counterRef?.current) {
      counterRef.current.stepUp();
      onClickCounter(parseInt(counterRef.current.value));
      if (cartUpdate) {
        updateProductCart(idProdutct, parseInt(counterRef.current.value));
      }
    }
  }

  function downCounter(
    event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
  ) {
    event.preventDefault();
    if (counterRef?.current) {
      counterRef.current.stepDown();
      onClickCounter(parseInt(counterRef.current.value));
      if (cartUpdate) {
        updateProductCart(idProdutct, parseInt(counterRef.current.value));
      }
    }
  }

  return (
    <WrapperCounter>
      <ButtonCounter
        onClick={(e) => {
          downCounter(e);
        }}
      >
        <Minus size={14} color={defaultTheme.font.color['purple']} />
      </ButtonCounter>
      <InputCounter
        ref={counterRef}
        type="number"
        defaultValue={amount}
        min={0}
        max={20}
      />
      <ButtonCounter
        onClick={(e) => {
          upCounter(e);
        }}
      >
        <Plus
          size={14}
          color={defaultTheme.font.color['purple']}
          colorInterpolation={defaultTheme.font.color['yellow-dark']}
        />
      </ButtonCounter>
    </WrapperCounter>
  );
}
export default Counter;
