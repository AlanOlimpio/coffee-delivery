import styled, { css } from 'styled-components';
import { COLORS, DisclaimerInterfaceProps } from './DisclaimerInterface';

export const ContainerDisclaimer = styled.div<DisclaimerInterfaceProps>`
  ${({ $backgroundColor, $subtitle, $gap, $alignItems }) => css`
    display: grid;
    gap: ${$gap ? $gap : '0.75rem'};
    line-height: 1.3rem;
    align-items: ${$alignItems ? $alignItems : 'center'};
    grid-template-columns: 2rem 1fr;
    span {
      width: 2rem;
      height: 2rem;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 0;
      border-radius: 50%;

      ${$backgroundColor &&
      css`
        background-color: ${COLORS[$backgroundColor]};
      `}
    }
    ul {
      list-style: none;

      ${$alignItems === 'start' &&
      css`
        li {
          &:first-child {
            padding-top: 0.25rem;
            color: ${COLORS['base-subtitle']};
          }
          ${$subtitle &&
          $alignItems === 'start' &&
          css`
            &:last-child {
              font-size: 0.875rem;
              padding-top: 0.25rem;
            }
          `}
        }
      `}
    }

    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr;
      text-align: center;
    }
  `}
`;
