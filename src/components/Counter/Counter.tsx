import { Minus, Plus } from 'phosphor-react';
import { InputCounter, ButtonCounter, WrapperCounter } from './CounterStyled';
import { defaultTheme } from '../../styles/themes/default';
import { MouseEvent, useRef } from 'react';

function Counter() {
  const counterRef = useRef<HTMLInputElement>(null);

  function upCounter(
    event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
  ) {
    event.preventDefault();
    if (counterRef?.current) {
      counterRef.current.stepUp();
    }
  }

  function downCounter(
    event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
  ) {
    event.preventDefault();
    if (counterRef?.current) {
      counterRef.current.stepDown();
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
        defaultValue={0}
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
