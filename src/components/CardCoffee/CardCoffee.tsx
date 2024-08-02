import TagInfo from '../TagInfo';
import {
  ImageCard,
  WrapperActions,
  WrapperCard,
  WrapperTag,
} from './CardCoffeeStyled';

import Button from '../Button';
import { ShoppingCartSimple } from 'phosphor-react';
import { defaultTheme } from '../../styles/themes/default';
import Counter from '../Counter';
import { ProductInterfaceProps } from '../../interfaces/Product';
import { CoffeeContext } from '../../contexts/CoffeeContext';
import { useContext, useState } from 'react';

function CardCoffee({
  id,
  image,
  label,
  name,
  price,
  tags,
  amount,
}: ProductInterfaceProps) {
  const { cartList } = useContext(CoffeeContext);
  const { addProductCart, removeProductCart } = useContext(CoffeeContext);
  const [amountProduct, setAmountProduct] = useState(0);

  const amountCart = cartList.find((item) => item.id === id);

  function handleCartAdd() {
    if (amountProduct > 0) {
      addProductCart({
        id,
        image,
        label,
        name,
        price,
        tags,
        amount: amountProduct,
      });
    } else {
      removeProductCart(id);
    }
  }
  return (
    <WrapperCard>
      <ImageCard src={image} alt={`imagem de ${name}`} />
      <WrapperTag>
        {tags.map((tag) => {
          return <TagInfo key={`${id}-${tag.label}`} label={tag.label} />;
        })}
      </WrapperTag>

      <h2>{name}</h2>
      <p>{label}</p>
      <WrapperActions>
        <p>
          <span>R$</span>
          {price.toLocaleString('pt-br', { minimumFractionDigits: 2 })}
        </p>
        <div>
          <Counter
            onClickCounter={(amountCount) => setAmountProduct(amountCount)}
            amount={amountCart ? amountCart.amount : amount}
            idProdutct={id}
            cartUpdate={false}
          />
          <Button
            $gap="0.25rem"
            $backgroundColor="purple-dark"
            $hoverBackgroundColor="purple"
            $paddingY="0.5rem"
            $paddingX="0.5rem"
            $onClick={() => handleCartAdd()}
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
