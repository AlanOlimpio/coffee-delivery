import { MapPin, ShoppingCart } from 'phosphor-react';
import { HeaderContainer, HeaderwrapperRight } from './HeaderStyled';
import coffeeDeliveryLogo from '../../assets/coffee-delivery-logo.svg';
import Button from '../Button';
import { defaultTheme } from '../../styles/themes/default';

function Header() {
  return (
    <HeaderContainer>
      <img src={coffeeDeliveryLogo} alt="Coffee Delivery" />
      <HeaderwrapperRight>
        <Button
          text="Porto Alegre, RS"
          $gap="0.25rem"
          $backgroundColor="purple-light"
          $textColor="purple-dark"
          $paddingY="0.5rem"
          $paddingX="0.5rem"
          $weight="400"
        >
          <MapPin
            color={defaultTheme.font.color['purple-dark']}
            size={22}
            weight="fill"
          />
        </Button>
        <Button
          $gap="0.25rem"
          $backgroundColor="yellow-light"
          $paddingY="0.5rem"
          $paddingX="0.5rem"
        >
          <ShoppingCart
            color={defaultTheme.font.color['yellow-dark']}
            size={22}
            weight="fill"
          />
        </Button>
      </HeaderwrapperRight>
    </HeaderContainer>
  );
}
export default Header;
