import styled, { css } from 'styled-components';

export const Wrapper = styled.main`
  padding-bottom: 3rem;
`;

export const TitleSection = styled.h2`
  ${({ theme }) => css`
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 2rem;
    line-height: 2.625rem;
    margin-top: 2rem;
    color: ${theme.font.color['base-subtitle']};
  `}
`;
export const WrapperProducts = styled.div`

  display: grid;
  column-gap: 2rem;
  row-gap: 2.5rem;
  margin-top: 3.375rem;
  grid-template-columns: repeat(auto-fill, minmax(16rem, auto));
  justify-content: space-between;

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    justify-content: space-between;
    grid-template-columns: repeat(auto-fill, minmax(14rem, auto));
  }

  @media screen and (max-width: 767px)  {
  margin-top: 2.375rem;
  grid-template-columns: repeat(auto-fill, minmax(15rem, auto));
  justify-content: center;
`;
