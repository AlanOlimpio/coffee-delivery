import { CurrencyDollar, MapPinLine, ShoppingCart } from 'phosphor-react';
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
} from './CheckoutStyled';
import { defaultTheme } from '../../styles/themes/default';
import Address from './components/Address';
import Payment from './components/ Payment';
import SelectedProduct from '../../components/ SelectedProduct';
import { useNavigate } from 'react-router-dom';
import { CoffeeContext } from '../../contexts/CoffeeContext';
import { useContext, useEffect, useState } from 'react';

function Checkout() {
  const navigate = useNavigate();
  const { cartList } = useContext(CoffeeContext);
  const [sum, setSum] = useState(0);
  const deliveryValue = 3.5;

  useEffect(() => {
    function handleTotalCart() {
      setSum(
        cartList.reduce(function (valueSum, product) {
          return valueSum + product.price * product.amount;
        }, 0),
      );
    }
    handleTotalCart();
  }, [cartList]);
  return (
    <LayoutContainer>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          navigate('/success');
        }}
      >
        <WrapperCheckout>
          <div>
            <TitleSection>Complete seu pedido</TitleSection>
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
                $subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
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
                      <p>{`R$ ${sum.toLocaleString('pt-br', {
                        minimumFractionDigits: 2,
                      })}`}</p>
                    </div>
                    <div>
                      <p>Entrega</p>
                      <p>{`R$ ${deliveryValue.toLocaleString('pt-br', {
                        minimumFractionDigits: 2,
                      })}`}</p>
                    </div>
                    <div>
                      <h3>Total</h3>
                      <h3>
                        {`R$ ${(sum + deliveryValue).toLocaleString('pt-br', {
                          minimumFractionDigits: 2,
                        })}`}
                      </h3>
                    </div>
                  </WrapperAmount>

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
                </>
              ) : (
                <Disclaimer
                  title="Adicione itens no carrinho!"
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
            </WrapperAside>
          </div>
        </WrapperCheckout>
      </form>
    </LayoutContainer>
  );
}
export default Checkout;
