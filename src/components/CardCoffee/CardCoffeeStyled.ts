import styled, { css } from 'styled-components';

export const WrapperCard = styled.div`
  ${({ theme }) => css`
    width: 16rem;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    min-height: 20rem;
    margin: 1.25rem 0 0;
    padding: 7.625rem 1.25rem 1.25rem;
    background-color: ${theme.font.color['base-card']};
    border: 0;
    border-radius: 0.375rem 2.25rem 0.375rem 2.25rem;
    position: relative;
    h2 {
      font-family: 'Baloo 2', sans-serif;
      font-weight: 800;
      font-size: 1.25rem;
      line-height: 1.3rem;
      margin-top: 1rem;
      text-align: center;
      color: ${theme.font.color['base-subtitle']};
    }
    > p {
      font-size: 0.875rem;
      line-height: 1.3rem;
      margin-top: 1rem;
      text-align: center;
      color: ${theme.font.color['base-label']};
    }
  `}
`;

export const ImageCard = styled.img`
  position: absolute;
  top: -1.25rem;
  left: 0;
  right: 0;
  display: block;
  margin: 0 auto;
`;
export const WrapperTag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.25rem;
`;

export const WrapperActions = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.25rem;
    margin-top: 2.063rem;
    p {
      font-family: 'Baloo 2', sans-serif;
      font-weight: 800;
      font-size: 1.5rem;
      line-height: 1.3rem;
      text-align: center;
      color: ${theme.font.color['base-text']};
      span {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 0.875rem;
        line-height: 1.3rem;
      }
    }
    div {
      display: flex;
      gap: 0.5rem;
    }
  `}
`;
