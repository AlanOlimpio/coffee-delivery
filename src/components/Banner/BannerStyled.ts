import styled, { css } from 'styled-components';
import { BannerInterfaceProps, COLORS } from './BannerInterface';
import { containerMaxWidth } from '../../layouts/DefaultLayoutStyled';

export const ContainerBanner = styled.div<BannerInterfaceProps>`
  ${({ $backgroundColor, $backgroundImage }) => css`
    min-height: 34rem;
    display: flex;
    align-items: center;
    ${$backgroundColor &&
    css`
      background-color: ${COLORS[$backgroundColor]};
    `}
    ${$backgroundImage &&
    css`
      background-image: url(${$backgroundImage});
      background-size: cover;
      background-repeat: no-repeat;
    `}
  `}
  }
`;
export const WrapperBanner = styled.div<BannerInterfaceProps>`
    display: flex;
    max-width: ${containerMaxWidth};
    margin: 0 auto;
    gap: 3.5rem;
    align-items: center;
    img {
      max-width: 100%;
    }
   
    @media screen and (max-width: 768px) {
      flex-wrap: wrap;
      justify-content: center;
      line-height: 2.5rem;
    }
  }
`;

export const WrapperLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 36.75rem;
  flex-wrap: wrap;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 3rem;
    line-height: 3.9rem;
  }
  h2 {
    font-size: 1.25rem;
    font-weight: 400;
  }
`;
export const WrapperChildren = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  row-gap: 1.25rem;
  column-gap: 2.5rem;
  margin-top: 4.125rem;
  @media screen and (max-width: 768px) {
      margin-top: 1rem;
      row-gap: 2rem;
      column-gap: 0.8rem;
      grid-template-columns: 1fr 1fr;
      align-items: baseline;
    }
  }
`;
