import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 2rem;
  display: grid;
  gap: 0.75rem;
  grid-template-columns: repeat(auto-fill, minmax(9rem, auto));
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(9rem, auto));
  }
`;
export const OptionsPayment = styled.label`
  ${({ theme }) => css`
      position: relative;
      display: grid;
      grid-template-columns: 1rem 1fr;
      gap: 0.75rem;
      background-color: ${theme.font.color['base-button']};
      color: ${theme.font.color['base-text']};
      padding: 1rem;
      text-transform: uppercase;
      font-size: ${theme.font.size.button.m};
      border-radius: 0.25rem;
      input[type='radio'] {
        opacity: 0;
        position: absolute;
        left: 0;
        right: 0;
        margin: 0 auto;
        width: 1.25rem;
        z-index: 0;
        padding: 1rem;
        height: 100%;

      }
   
      &:hover {
      background-color: ${theme.font.color['base-hover']};
      color: ${theme.font.color['base-subtitle']};
    }
    &:has(input[type='radio']:checked) {
      background-color: ${theme.font.color['purple-light']};
      color: ${theme.font.color['base-text']};
    }
     }
  `}
`;
