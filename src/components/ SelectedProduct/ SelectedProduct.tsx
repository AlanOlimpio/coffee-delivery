import {
  WrapperActions,
  WrapperSelectedProduct,
} from './ SelectedProductStyled';

import Button from '../Button';
import { Trash } from 'phosphor-react';
import { defaultTheme } from '../../styles/themes/default';
import Counter from '../Counter';
import { ProductInterfaceProps } from '../../interfaces/Product';

function SelectedProduct({ image, name, price }: ProductInterfaceProps) {
  return (
    <WrapperSelectedProduct>
      <div>
        <img src={image} alt={`imagem de ${name}`} />
        <WrapperActions>
          <h2>{name}</h2>
          <div>
            <Counter />
            <Button
              $gap="0.25rem"
              $backgroundColor="base-button"
              $hoverBackgroundColor="base-hover"
              $textColor="base-text"
              $hoverTextColor="base-subtitle"
              $paddingY="0.5rem"
              $paddingX="0.5rem"
              $fontSize="0.75rem"
              $textTransform="uppercase"
              $onClick={(e) => {
                e.preventDefault();
                console.log(e);
              }}
            >
              <Trash color={defaultTheme.font.color['purple']} size={16} />
              Remover
            </Button>
          </div>
        </WrapperActions>
      </div>
      <p>
        <span>R$</span>{' '}
        {price.toLocaleString('pt-br', { minimumFractionDigits: 2 })}
      </p>
    </WrapperSelectedProduct>
  );
}

export default SelectedProduct;
