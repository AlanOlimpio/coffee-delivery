import { CurrencyDollar, MapPinLine } from 'phosphor-react';
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
import { productList } from '../../mocks/ProductList';

function Checkout() {
  return (
    <LayoutContainer>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(e.target.payment.value);
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
              {productList.map((product) => {
                if (product.id === 'produto-1') {
                  return <SelectedProduct {...product} key={product.id} />;
                }
                if (product.id === 'produto-6') {
                  return <SelectedProduct {...product} key={product.id} />;
                }
              })}
              <WrapperAmount>
                <div>
                  <p>Total de itens</p>
                  <p>R$ 29,70</p>
                </div>
                <div>
                  <p>Entrega</p>
                  <p>R$ 3,50</p>
                </div>
                <div>
                  <h3>Total</h3>
                  <h3>R$ 33,20</h3>
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
            </WrapperAside>
          </div>
        </WrapperCheckout>
      </form>
    </LayoutContainer>
  );
}
export default Checkout;
