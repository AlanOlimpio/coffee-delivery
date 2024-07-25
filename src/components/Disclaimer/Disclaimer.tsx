import { DisclaimerInterfaceProps } from './DisclaimerInterface';
import { ContainerDisclaimer } from './DisclaimerStyled';

function Disclaimer({
  title,
  subtitle,
  icon,
  $backgroundColor,
}: DisclaimerInterfaceProps) {
  return (
    <ContainerDisclaimer $backgroundColor={$backgroundColor}>
      <span>{icon}</span>
      <ul>
        <li>{title}</li>
        <li>{subtitle}</li>
      </ul>
    </ContainerDisclaimer>
  );
}

export default Disclaimer;
