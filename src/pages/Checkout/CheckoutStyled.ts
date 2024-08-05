import styled, { css } from 'styled-components';
export const WrapperCheckout = styled.main`
  padding-top: 2.5rem;
  padding-bottom: 3rem;
  display: grid;
  grid-template-columns: minmax(min-content, 40rem) minmax(min-content, 28rem);
  column-gap: 2rem;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const TitleSection = styled.h2`
  ${({ theme }) => css`
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 1.125rem;
    line-height: 1.5rem;
    color: ${theme.font.color['base-subtitle']};
    padding-bottom: 0.938rem;
  `}
`;
export const WrapperAddress = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.font.color['base-card']};
    border: none;
    border-radius: 0.375rem;
    padding: 2.5rem;
    @media screen and (max-width: 768px) {
      padding: 1.5rem;
    }
  `}
`;
export const WrapperPayment = styled.div`
  ${({ theme }) => css`
    margin-top: 0.75rem;
    margin-bottom: 0.75rem;
    background-color: ${theme.font.color['base-card']};
    border: none;
    border-radius: 0.375rem;
    padding: 2.5rem;
    @media screen and (max-width: 768px) {
      padding: 1.5rem;
    }
  `}
`;

export const WrapperAside = styled.aside`
  ${({ theme }) => css`
    display: grid;
    gap: 1.5rem;
    background-color: ${theme.font.color['base-card']};
    border: none;
    border-radius: 0.375rem 2.5rem 0.375rem 2.5rem;
    padding: 2.5rem;
    @media screen and (max-width: 768px) {
      border-radius: 0.375rem;
      padding: 1.5rem;
    }
  `}
`;

export const WrapperAmount = styled.div`
  ${({ theme }) => css`
    display: grid;
    gap: 0.75rem;
    > div {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 0.75rem;
      p {
        font-size: ${theme.font.size.text.s};
      }
      h3 {
        font-size: ${theme.font.size.text.l};
      }
    }
  `}
`;

export const ErrorMessage = styled.p`
  ${({ theme }) => css`
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5rem;
    color: ${theme.font.color['yellow']};
  `}
`;
