import { ShoppingCart } from 'phosphor-react';
import { HeaderContainer, HeaderwrapperRight } from './HeaderStyled';
import coffeeDeliveryLogo from '../../assets/coffee-delivery-logo.svg';
import Button from '../Button';
import { defaultTheme } from '../../styles/themes/default';
import Location from '../Location';
import { LayoutContainer } from '../../layouts/DefaultLayoutStyled';

function Header() {
  return (
    <LayoutContainer>
      <HeaderContainer>
        <img src={coffeeDeliveryLogo} alt="Coffee Delivery" />
        <HeaderwrapperRight>
          <Location />
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
    </LayoutContainer>
  );
}
export default Header;
