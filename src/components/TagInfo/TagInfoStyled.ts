import styled, { css } from 'styled-components';
export const WrapperTag = styled.span`
  ${({ theme }) => css`
    background-color: ${theme.font.color['yellow-light']};
    color: ${theme.font.color['yellow-dark']};
    font-size: ${theme.font.size.tag.xs};
    font-weight: bold;
    padding: 0.25rem 0.5rem;
    border: 0;
    border-radius: 6.25rem;
  `}
`;
