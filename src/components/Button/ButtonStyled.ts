import styled, { css } from 'styled-components';
import { ButtonContainerInterfaceProps, COLORBUTTON } from './ButtonInterface';

export const ButtonContainer = styled.button<ButtonContainerInterfaceProps>`
  ${({
    $textColor,
    $backgroundColor,
    $paddingY,
    $paddingX,
    $gap,
    $weight,
    $textTransform,
    $hoverBackgroundColor,
    $hoverTextColor,
    $display,
    $fontSize,
  }) => css`
    display: ${$display ? $display : 'flex'};
    text-align: ${$display === 'block' ? 'center' : 'left'};
    ${$display === 'block' &&
    css`
      width: 100%;
    `}
    align-items: center;

    ${$backgroundColor &&
    css`
      background-color: ${COLORBUTTON[$backgroundColor]};
    `}
    ${$textColor &&
    css`
      color: ${COLORBUTTON[$textColor]};
    `}

    border: 0;
    border-radius: 0.375rem;
    cursor: pointer;
    font-size: ${$fontSize ? $fontSize : '0.875rem'};
    ${$textTransform &&
    css`
      text-transform: ${$textTransform};
    `}
    ${$weight &&
    css`
      font-weight: ${$weight};
    `}
    ${$gap &&
    css`
      gap: ${$gap};
    `}
    ${!$paddingY &&
    !$paddingX &&
    css`
      padding: 1rem 1rem;
    `}
      ${$paddingY &&
    $paddingX &&
    css`
      padding: ${$paddingY} ${$paddingX};
    `}
      ${$paddingY &&
    !$paddingX &&
    css`
      padding: ${$paddingY} 1rem;
    `}
      ${$paddingX &&
    !$paddingY &&
    css`
      padding: 1rem ${$paddingX};
    `};
    &:hover {
      ${$hoverBackgroundColor &&
      css`
        background-color: ${COLORBUTTON[$hoverBackgroundColor]};
      `}
      ${$hoverTextColor &&
      css`
        color: ${COLORBUTTON[$hoverTextColor]};
      `}
      svg {
        ${$hoverTextColor &&
        css`
          fill: ${COLORBUTTON[$hoverTextColor]};
        `}
      }
    }
    &.active {
      ${$hoverBackgroundColor &&
      css`
        background-color: ${COLORBUTTON[$hoverBackgroundColor]};
      `}
      ${$hoverTextColor &&
      css`
        color: ${COLORBUTTON[$hoverTextColor]};
      `}
    }
  `}
`;
