import { DisclaimerInterfaceProps } from './DisclaimerInterface';
import { ContainerDisclaimer } from './DisclaimerStyled';

function Disclaimer({
  title,
  $subtitle,
  icon,
  $backgroundColor,
  $gap,
  $alignItems,
}: DisclaimerInterfaceProps) {
  return (
    <ContainerDisclaimer
      $backgroundColor={$backgroundColor}
      $subtitle={$subtitle}
      $gap={$gap}
      $alignItems={$alignItems}
    >
      <span>{icon}</span>
      <ul>
        <li>{title}</li>
        <li>{$subtitle}</li>
      </ul>
    </ContainerDisclaimer>
  );
}

export default Disclaimer;
