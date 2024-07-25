import styled, { css } from 'styled-components';
export const WrapperCounter = styled.div`
  ${({ theme }) => css`
    input[type='number'] {
      -webkit-appearance: textfield;
      -moz-appearance: textfield;
      appearance: textfield;
    }
    input[type='number']::-webkit-inner-spin-button,
    input[type='number']::-webkit-outer-spin-button {
      -webkit-appearance: none;
    }
    background-color: ${theme.font.color['base-button']};
    display: flex;
    align-items: center;
    gap: 0.25rem;
    justify-content: center;
    padding: 0.5rem;
    border-radius: 0.375rem;
  `}
`;

const BaseInput = styled.input`
  ${({ theme }) => css`
    background: transparent;
    border: 0;
    font-size: 1rem;
    color: ${theme.font.color['base-title']};
    &:focus {
      box-shadow: none;
      border-color: ${theme['green-500']};
    }
    &::placeholder {
      color: ${theme['gray-500']};
    }
  `}
`;

export const InputCounter = styled(BaseInput)`
  width: 1.25rem;
  height: 1.25rem;
  padding: 0;
  text-align: center;
`;

export const ButtonCounter = styled.button`
  ${({ theme }) => css`
    background: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    &:hover svg line {
      stroke: ${theme.font.color['purple-dark']};
    }
  `}
`;
