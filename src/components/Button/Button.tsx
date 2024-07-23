import { ButtonInterfaceProps } from './ButtonInterface';
import { ButtonContainer } from './ButtonStyleds';

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
}: ButtonInterfaceProps) {
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
    >
      {children}
      {text}
    </ButtonContainer>
  );
}

export default Button;
