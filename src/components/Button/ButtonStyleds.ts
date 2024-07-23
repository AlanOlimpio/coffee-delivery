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
  }) => css`
    display: flex;
    align-items: center;
    text-align: left;
    ${$backgroundColor &&
    css`
      background-color: ${COLORBUTTON[$backgroundColor]};
    `}
    ${$textColor &&
    css`
      color: ${COLORBUTTON[$textColor]};
    `}

    border: 0;
    border-radius: 0.5rem;
    cursor: pointer;
    font-size: 0.875rem;
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
