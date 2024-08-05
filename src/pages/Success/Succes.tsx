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
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { CoffeeContext } from '../../contexts/CoffeeContext';

interface Map {
  [key: string]: string | undefined;
}

function Success() {
  const navigate = useNavigate();

  const { detailsCheckout } = useContext(CoffeeContext);

  const mapPaymentOptions: Map = {
    '123': 'Cartão de crédito',
    '456': 'Cartão de débito',
    '789': 'Dinheiro',
  };

  useEffect(() => {
    if (JSON.stringify(detailsCheckout) === '{}') {
      navigate('/');
    }
  }, []);

  if (JSON.stringify(detailsCheckout) === '{}') {
    return null;
  }
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
              title={`Entrega em ${detailsCheckout.address}, ${detailsCheckout.number}`}
              $subtitle={`${detailsCheckout.downtown} - ${
                detailsCheckout.city
              }, ${detailsCheckout.uf.toUpperCase()} ${
                detailsCheckout.complement
                  ? `, ${detailsCheckout.complement}`
                  : ``
              }`}
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
              $subtitle={
                detailsCheckout && (
                  <strong>
                    {mapPaymentOptions[`${detailsCheckout.payment}`]}
                  </strong>
                )
              }
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
