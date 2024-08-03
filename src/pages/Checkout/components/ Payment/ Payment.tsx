import { OptionsPayment, Wrapper } from './ PaymentStyled';
import { Bank, CreditCard, Money } from 'phosphor-react';
import { defaultTheme } from '../../../../styles/themes/default';
import { useFormContext } from 'react-hook-form';

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
  const { register } = useFormContext();

  return (
    <Wrapper>
      {options.map((item) => {
        return (
          <OptionsPayment key={item.id} htmlFor={item.id}>
            <input
              id={item.id}
              type="radio"
              value={item.id}
              required
              {...register('payment')}
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
