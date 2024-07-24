import styled, { css } from 'styled-components';

export const WrapperLocation = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    text-align: left;
    background-color: ${theme.font.color['purple-light']};
    color: ${theme.font.color['purple-dark']};
    border: 0;
    border-radius: 0.5rem;
    font-size: 0.875rem;
    font-weight: 400;
    gap: 0.25rem;
    padding: 0.5rem 0.5rem;
  `}
`;
