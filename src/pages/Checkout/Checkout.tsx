import { CurrencyDollar, MapPinLine, ShoppingCart } from 'phosphor-react';
import { FormProvider, useForm } from 'react-hook-form';
import * as zod from 'zod';
import Button from '../../components/Button';
import Disclaimer from '../../components/Disclaimer';
import { LayoutContainer } from '../../layouts/DefaultLayoutStyled';
import {
  WrapperCheckout,
  TitleSection,
  WrapperAddress,
  WrapperAside,
  WrapperPayment,
  WrapperAmount,
  ErrorMessage,
} from './CheckoutStyled';
import { defaultTheme } from '../../styles/themes/default';
import Address from './components/Address';
import Payment from './components/Payment';
import SelectedProduct from '../../components/ SelectedProduct';
import { useNavigate } from 'react-router-dom';
import { CoffeeContext } from '../../contexts/CoffeeContext';
import { useContext, useEffect, useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';

const formValidationSchema = zod.object({
  cep: zod.string().regex(/^\d{5}-\d{3}$/i, 'Informe um CEP válido!'),
  city: zod.string().min(1),
  downtown: zod.string().min(1),
  address: zod.string().min(1),
  number: zod.string().min(1),
  complement: zod.string(),
  payment: zod.string().min(1),
  uf: zod.string().min(2).max(2),
  amount: zod.number(),
  itensCart: zod.number().min(1, 'Adicione itens ao carrinho!'),
});

export type formValidationSchemaData = zod.infer<typeof formValidationSchema>;

function Checkout() {
  const navigate = useNavigate();
  const { cartList, resetCard, addDetailsCheckout } = useContext(CoffeeContext);
  const [sum, setSum] = useState(0);
  const deliveryValue = 3.5;
  const newPaymentForm = useForm<formValidationSchemaData>({
    resolver: zodResolver(formValidationSchema),
    defaultValues: {
      cep: '',
      city: '',
      downtown: '',
      address: '',
      number: '',
      complement: '',
      payment: '',
      uf: '',
      amount: 0,
      itensCart: cartList.length,
    },
  });

  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
    setValue,
  } = newPaymentForm;

  function handleFormCheckout(data: formValidationSchemaData) {
    const dataTemp = {
      ...data,
      costFreight: deliveryValue,
      cartList,
    };
    addDetailsCheckout(dataTemp);
    reset();
    resetCard();
    navigate('/success');
  }

  function handleToLocaleString(total: number, delivery?: number) {
    if (delivery) {
      return (total + delivery).toLocaleString('pt-br', {
        minimumFractionDigits: 2,
      });
    }
    return total.toLocaleString('pt-br', {
      minimumFractionDigits: 2,
    });
  }

  useEffect(() => {
    const totalCart = () =>
      cartList.reduce(function (valueSum, product) {
        return valueSum + product.price * product.amount;
      }, 0);
    function handleTotalCart() {
      setSum(totalCart());
    }
    handleTotalCart();
    setValue('amount', parseFloat((deliveryValue + totalCart()).toFixed(2)));
    setValue('itensCart', cartList.length);
  }, [cartList, setValue]);
  return (
    <LayoutContainer>
      <form onSubmit={handleSubmit(handleFormCheckout)}>
        <WrapperCheckout>
          <div>
            <TitleSection>Complete seu pedido</TitleSection>
            <FormProvider {...newPaymentForm}>
              <WrapperAddress>
                <Disclaimer
                  title="Endereço de Entrega"
                  $subtitle="Informe o endereço onde deseja receber seu pedido"
                  icon={
                    <MapPinLine
                      color={defaultTheme.font.color['yellow-dark']}
                      size={22}
                      weight="light"
                    />
                  }
                  $gap="0.5rem"
                  $alignItems="start"
                />

                <Address />
              </WrapperAddress>
              <WrapperPayment>
                <Disclaimer
                  title="Pagamento    "
                  $subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar!"
                  icon={
                    <CurrencyDollar
                      color={defaultTheme.font.color['purple']}
                      size={22}
                      weight="light"
                    />
                  }
                  $gap="0.5rem"
                  $alignItems="start"
                />
                <Payment />
              </WrapperPayment>
              <input required {...register('itensCart')} type="hidden" />
            </FormProvider>
          </div>
          <div>
            <TitleSection>Cafés selecionados</TitleSection>
            <WrapperAside>
              {cartList.length > 0 ? (
                <>
                  {cartList?.map((product) => {
                    return <SelectedProduct {...product} key={product.id} />;
                  })}

                  <WrapperAmount>
                    <div>
                      <p>Total de itens</p>
                      <p>{`R$ ${handleToLocaleString(sum)}`}</p>
                    </div>
                    <div>
                      <p>Entrega</p>
                      <p>{`R$ ${handleToLocaleString(deliveryValue)}`}</p>
                    </div>
                    <div>
                      <h3>Total</h3>
                      <h3>{`R$ ${handleToLocaleString(
                        sum,
                        deliveryValue,
                      )}`}</h3>
                    </div>
                  </WrapperAmount>
                </>
              ) : (
                <Disclaimer
                  title="Não existem itens selecionados no carrinho!"
                  icon={
                    <ShoppingCart
                      color={defaultTheme.font.color['white']}
                      size={16}
                      weight="fill"
                    />
                  }
                  $backgroundColor="purple"
                />
              )}
              {errors.itensCart?.message && (
                <ErrorMessage>{errors.itensCart?.message}</ErrorMessage>
              )}
              <Button
                $gap="0.25rem"
                $backgroundColor="yellow"
                $hoverBackgroundColor="yellow-dark"
                $textColor="white"
                $paddingY="0.5rem"
                $paddingX="0.5rem"
                $textTransform="uppercase"
                $display="block"
                $weight="700"
              >
                confirmar pedido
              </Button>
            </WrapperAside>
          </div>
        </WrapperCheckout>
      </form>
    </LayoutContainer>
  );
}
export default Checkout;
