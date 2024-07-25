import styled, { css } from 'styled-components';
import { COLORS, DisclaimerInterfaceProps } from './DisclaimerInterface';

export const ContainerDisclaimer = styled.div<DisclaimerInterfaceProps>`
  display: grid;
  gap: 0.75rem;
  line-height: 1.3rem;
  align-items: center;
  grid-template-columns: 2rem 1fr;

  span {
    background-color: #4b2995;
    width: 2rem;
    height: 2rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    border-radius: 50%;
    ${({ $backgroundColor }) => css`
      ${$backgroundColor &&
      css`
        background-color: ${COLORS[$backgroundColor]};
      `}
    `}
  }
  ul {
    list-style: none;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;
