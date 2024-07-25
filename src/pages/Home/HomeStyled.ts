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
  display: flex;
  margin-top: 3.375rem;
  row-gap: 2.5rem;
  column-gap: 2rem;
  flex-wrap: wrap;
  justify-content: space-between;
  @media screen and (max-width: 576px) {
    justify-content: center;
    > div {
      flex-grow: 1;
      flex-basis: auto;
    }
  }

  @media screen and (min-width: 577px) {
    &:after {
      content: '';
      flex: auto;
    }
  }
`;
