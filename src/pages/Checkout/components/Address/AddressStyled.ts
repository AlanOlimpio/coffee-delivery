import styled, { css } from 'styled-components';
export const Wrapper = styled.div`
  ${({ theme }) => css`
    margin-top: 2rem;
    display: grid;
    row-gap: 1rem;
    input {
      padding: 0.75rem;
      color: ${theme.font.color['base-text']};
      background-color: ${theme.font.color['base-input']};
      font-size: 0.875rem;
      border: solid 1px ${theme.font.color['base-button']};
      border-radius: 0.25rem;
      width: 100%;
    }
    ::placeholder {
      color: ${theme.font.color['base-label']};
      opacity: 1;
    }

    ::-ms-input-placeholder {
      color: ${theme.font.color['base-label']};
    }
  `}
`;

const column = styled.div`
  display: grid;
`;

export const InputComplementLabel = styled.label`
  ${({ theme }) => css`
    position: relative;
    span {
      position: absolute;
      right: 0.75rem;
      font-size: 0.75rem;
      top: 0.85rem;
      color: ${theme.font.color['base-label']};
      text-decoration: underline;
      font-style: italic;
    }
    input {
      padding-right: 4rem;
    }
  `}
`;
export const TwoCol = styled(column)`
  column-gap: 0.75rem;
  grid-template-columns: minmax(min-content, 12.5rem) minmax(min-content, auto);
}
`;

export const ThreeCol = styled(column)`
  column-gap: 0.75rem;
  grid-template-columns: minmax(min-content, 12.5rem) auto 3.75rem; 
}
`;
