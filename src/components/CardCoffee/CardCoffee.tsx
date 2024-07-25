import TagInfo from '../TagInfo';
import {
  ImageCard,
  WrapperActions,
  WrapperCard,
  WrapperTag,
} from './CardCoffeeStyled';
import cardCoffeeImage from '../../assets/CardCoffee/coffee-1.png';
import Button from '../Button';
import { ShoppingCartSimple } from 'phosphor-react';
import { defaultTheme } from '../../styles/themes/default';
import Counter from '../Counter';

function CardCoffee() {
  return (
    <WrapperCard>
      <ImageCard src={cardCoffeeImage} alt="Expresso Tradicional" />
      <WrapperTag>
        <TagInfo label="Tradicional" />
      </WrapperTag>

      <h2>Expresso Tradicional</h2>
      <p>O tradicional café feito com água quente e grãos moídos</p>
      <WrapperActions>
        <p>
          <span>R$</span> 9,90
        </p>
        <div>
          <Counter />
          <Button
            $gap="0.25rem"
            $backgroundColor="purple-dark"
            $hoverBackgroundColor="purple"
            $paddingY="0.5rem"
            $paddingX="0.5rem"
          >
            <ShoppingCartSimple
              color={defaultTheme.font.color['base-card']}
              size={22}
              weight="fill"
            />
          </Button>
        </div>
      </WrapperActions>
    </WrapperCard>
  );
}

export default CardCoffee;
