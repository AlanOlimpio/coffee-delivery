import { ChangeEvent, useState } from 'react';
import { OptionsPayment, Wrapper } from './ PaymentStyled';
import { Bank, CreditCard, Money } from 'phosphor-react';
import { defaultTheme } from '../../../../styles/themes/default';

export const options = [
  {
    id: '123',
    label: 'Cartão de crédito',
    icon: 'creditCard',
  },
  {
    id: '456',
    label: 'cartão de débito',
    icon: 'bank',
  },
  {
    id: '789',
    label: 'dinheiro',
    icon: 'money',
  },
];

function Payment() {
  const [valueSelected, setValueSelected] = useState('');

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setValueSelected(event.target.value);
  }
  return (
    <Wrapper>
      {options.map((item) => {
        return (
          <OptionsPayment key={item.id} htmlFor={item.id}>
            <input
              name="payment"
              id={item.id}
              type="radio"
              value={item.id}
              checked={valueSelected === item.id}
              onChange={(e) => handleChange(e)}
              required
            />
            {item.icon === 'creditCard' && (
              <CreditCard size={16} color={defaultTheme.font.color['purple']} />
            )}
            {item.icon === 'bank' && (
              <Bank size={16} color={defaultTheme.font.color['purple']} />
            )}
            {item.icon === 'money' && (
              <Money size={16} color={defaultTheme.font.color['purple']} />
            )}
            {item.label}
          </OptionsPayment>
        );
      })}
    </Wrapper>
  );
}
export default Payment;
