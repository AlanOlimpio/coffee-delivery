import { LayoutContainer } from '../../layouts/DefaultLayoutStyled';
import {
  SubTitleSection,
  TitleSection,
  WrapperOrderInfo,
  WrapperSuccess,
} from './SuccessStyled';
import deliverySuccess from '../../assets/Success/delivery-success.png';
import Disclaimer from '../../components/Disclaimer';
import { CurrencyDollarSimple, MapPin, Timer } from 'phosphor-react';
import { defaultTheme } from '../../styles/themes/default';

function Success() {
  return (
    <LayoutContainer>
      <TitleSection>Uhu! Pedido confirmado</TitleSection>
      <SubTitleSection>
        Agora é só aguardar que logo o café chegará até você
      </SubTitleSection>
      <WrapperSuccess>
        <WrapperOrderInfo>
          <div>
            <Disclaimer
              title="Entrega em Rua João Daniel Martinelli, 102"
              $subtitle="Farrapos - Porto Alegre, RS"
              icon={
                <MapPin
                  color={defaultTheme.font.color['white']}
                  size={16}
                  weight="fill"
                />
              }
              $backgroundColor="purple"
            />
            <Disclaimer
              title="Previsão de entrega"
              $subtitle="20 min - 30 min"
              icon={
                <Timer
                  color={defaultTheme.font.color['white']}
                  size={16}
                  weight="fill"
                />
              }
              $backgroundColor="yellow"
            />
            <Disclaimer
              title="Pagamento na entrega"
              $subtitle={<strong>Cartão de Crédito</strong>}
              icon={
                <CurrencyDollarSimple
                  color={defaultTheme.font.color['white']}
                  size={16}
                />
              }
              $backgroundColor="yellow-dark"
            />
          </div>
        </WrapperOrderInfo>
        <div>
          <img src={deliverySuccess} alt="" />
        </div>
      </WrapperSuccess>
    </LayoutContainer>
  );
}
export default Success;
