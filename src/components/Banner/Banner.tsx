import { BannerInterfaceProps } from './BannerInterface';
import {
  ContainerBanner,
  WrapperBanner,
  WrapperChildren,
  WrapperLeft,
} from './BannerStyled';
import coffeeDeliveryBanner from '../../assets/coffeeDeliveryBanner.png';
import { LayoutContainer } from '../../layouts/DefaultLayoutStyled';
function Banner({
  title,
  subTitle,
  $backgroundColor,
  $backgroundImage,
  children,
}: BannerInterfaceProps) {
  return (
    <ContainerBanner
      $backgroundColor={$backgroundColor}
      $backgroundImage={$backgroundImage}
    >
      <LayoutContainer>
        <WrapperBanner>
          <WrapperLeft>
            <h1>{title}</h1>
            <h2>{subTitle}</h2>
            {children && <WrapperChildren>{children}</WrapperChildren>}
          </WrapperLeft>
          <div>
            <img src={coffeeDeliveryBanner} alt="Coffee Delivery" />
          </div>
        </WrapperBanner>
      </LayoutContainer>
    </ContainerBanner>
  );
}

export default Banner;
