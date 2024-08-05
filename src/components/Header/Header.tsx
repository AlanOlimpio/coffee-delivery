import { ShoppingCart } from 'phosphor-react';
import {
  HeaderButton,
  HeaderContainer,
  HeaderwrapperRight,
} from './HeaderStyled';
import coffeeDeliveryLogo from '../../assets/coffee-delivery-logo.svg';
import Button from '../Button';
import { defaultTheme } from '../../styles/themes/default';
import Location from '../Location';
import { LayoutContainer } from '../../layouts/DefaultLayoutStyled';
import { useNavigate } from 'react-router-dom';
import { CoffeeContext } from '../../contexts/CoffeeContext';
import { useContext } from 'react';

function Header() {
  const navigate = useNavigate();

  const { cartList } = useContext(CoffeeContext);
  return (
    <LayoutContainer>
      <HeaderContainer>
        <img
          src={coffeeDeliveryLogo}
          alt="Coffee Delivery"
          onClick={() => {
            navigate('/');
          }}
        />
        <HeaderwrapperRight>
          <Location />
          <HeaderButton>
            <Button
              $gap="0.25rem"
              $backgroundColor="yellow-light"
              $paddingY="0.5rem"
              $paddingX="0.5rem"
              $onClick={() => {
                navigate('/checkout');
              }}
            >
              <ShoppingCart
                color={defaultTheme.font.color['yellow-dark']}
                size={22}
                weight="fill"
              />
            </Button>
            {cartList.length > 0 && <span>{cartList.length}</span>}
          </HeaderButton>
        </HeaderwrapperRight>
      </HeaderContainer>
    </LayoutContainer>
  );
}
export default Header;
