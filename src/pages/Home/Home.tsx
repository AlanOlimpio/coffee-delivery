import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';
import Banner from '../../components/Banner';
import coffeeDeliveryBannerBackground from '../../assets/coffeeDeliveryBannerBackground.png';
import Disclaimer from '../../components/Disclaimer';
import { defaultTheme } from '../../styles/themes/default';
import { TitleSection, Wrapper, WrapperProducts } from './HomeStyled';
import CardCoffee from '../../components/CardCoffee';
import { LayoutContainer } from '../../layouts/DefaultLayoutStyled';
import { productList } from '../../mocks/ProductList';

function Home() {
  return (
    <Wrapper>
      <Banner
        title="Encontre o café perfeito para qualquer hora do dia"
        subTitle="Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora"
        $backgroundImage={coffeeDeliveryBannerBackground}
      >
        <Disclaimer
          title="Compra simples e segura"
          icon={
            <ShoppingCart
              color={defaultTheme.font.color['white']}
              size={16}
              weight="fill"
            />
          }
          $backgroundColor="yellow-dark"
        />
        <Disclaimer
          title="Embalagem mantém o café intacto"
          icon={
            <Package
              color={defaultTheme.font.color['white']}
              size={16}
              weight="fill"
            />
          }
          $backgroundColor="base-text"
        />
        <Disclaimer
          title="Entrega rápida e rastreada"
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
          title="O café chega fresquinho até você "
          icon={
            <Coffee
              color={defaultTheme.font.color['white']}
              size={16}
              weight="fill"
            />
          }
          $backgroundColor="purple"
        />
      </Banner>
      <LayoutContainer>
        <TitleSection>Nossos cafés</TitleSection>
        <WrapperProducts>
          {productList.map((product) => (
            <CardCoffee {...product} key={product.id} />
          ))}
        </WrapperProducts>
      </LayoutContainer>
    </Wrapper>
  );
}

export default Home;
