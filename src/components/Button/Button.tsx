import { MouseEvent } from 'react';
import { ButtonInterfaceProps } from './ButtonInterface';
import { ButtonContainer } from './ButtonStyled';

function Button({
  $textColor,
  $backgroundColor,
  $gap,
  text,
  $paddingY,
  $paddingX,
  children,
  $weight,
  $hoverBackgroundColor,
  $hoverTextColor,
  $textTransform,
  $display,
  $fontSize,
  $onClick,
}: ButtonInterfaceProps) {
  function handleOnclick(event: MouseEvent<HTMLButtonElement>) {
    $onClick?.(event);
  }
  return (
    <ButtonContainer
      $gap={$gap}
      $textColor={$textColor}
      $backgroundColor={$backgroundColor}
      $paddingY={$paddingY}
      $paddingX={$paddingX}
      $weight={$weight}
      $hoverBackgroundColor={$hoverBackgroundColor}
      $hoverTextColor={$hoverTextColor}
      $textTransform={$textTransform}
      $display={$display}
      onClick={(event) => handleOnclick(event)}
      $fontSize={$fontSize}
    >
      {children}
      {text}
    </ButtonContainer>
  );
}

export default Button;
