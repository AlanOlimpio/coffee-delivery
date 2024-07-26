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
} from './CheckoutStyled';
import { defaultTheme } from '../../styles/themes/default';

function Checkout() {
  return (
    <LayoutContainer>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(e.target);
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
            </WrapperAddress>
            <WrapperPayment>
              <Disclaimer
                title="Pagamento    "
                $subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
                icon={
                  <CurrencyDollar
                    color={defaultTheme.font.color['purple-dark']}
                    size={22}
                    weight="light"
                  />
                }
                $gap="0.5rem"
                $alignItems="start"
              />
            </WrapperPayment>
          </div>
          <div>
            <TitleSection>Cafés selecionados</TitleSection>
            <WrapperAside>
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
