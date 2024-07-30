import styled, { css } from 'styled-components';

export const WrapperSelectedProduct = styled.div`
  ${({ theme }) => css`
    max-width: 100%;
    display: flex;
    gap: 1.25rem;
    padding: 0 0 1.5rem 0;
    flex-wrap: wrap;
    justify-content: space-between;
    background-color: ${theme.font.color['base-card']};
    border-bottom: 1px solid ${theme.font.color['base-button']} !important;
    img {
      width: 4rem;
      height: 4rem;
    }
    h2 {
      font-weight: 400;
      font-size: ${theme.font.size.text.m};
      line-height: 1.3rem;
      color: ${theme.font.color['base-subtitle']};
    }
    > p {
      color: ${theme.font.color['base-text']};
      font-size: ${theme.font.size.text.m};
      font-weight: bold;
    }
    > div {
      display: flex;
      gap: 1.25rem;
    }
  `}
`;

export const WrapperActions = styled.div`
  display: grid;
  gap: 0.5rem;
  div {
    display: flex;
    gap: 0.5rem;
  }
`;
