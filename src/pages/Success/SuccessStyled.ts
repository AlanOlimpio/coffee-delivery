import styled, { css } from 'styled-components';
export const WrapperSuccess = styled.main`
  padding-top: 2.5rem;
  padding-bottom: 3rem;
  display: grid;
  gap: 2rem;
  justify-content: space-between;
  grid-template-columns: minmax(min-content, 32.875rem) minmax(
      min-content,
      30.75rem
    );
  > div {
    img {
      width: 100%;
      height: auto;
    }
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const TitleSection = styled.h2`
  ${({ theme }) => css`
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: ${theme.font.size.title.l};
    color: ${theme.font.color['yellow-dark']};
    padding-top: 5rem;
    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr;
      padding-top: 1rem;
    }
  `}
`;
export const SubTitleSection = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.size.title.s};
    color: ${theme.font.color['base-subtitle']};
  `}
`;

export const WrapperOrderInfo = styled.div`
  ${({ theme }) => css`
    background: linear-gradient(
        -63deg,
        ${theme.font.color['purple']},
        ${theme.font.color['yellow']}
      )
      border-box;
    border-radius: 0.375rem 2.25rem 0.375rem 2.25rem;
    border: 1px solid transparent;
    > div {
      display: grid;
      gap: 2rem;
      background-color: ${theme.font.color['base-background']};
      border-radius: 0.375rem 2.25rem 0.375rem 2.25rem;
      padding: 2.5rem;
      height: 100%;
    }
  `}
`;
