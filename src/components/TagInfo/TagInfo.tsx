import { WrapperTag } from './TagInfoStyled';
interface TagInterfaceProps {
  label: string;
}
function TagInfo({ label }: TagInterfaceProps) {
  return <WrapperTag>{label}</WrapperTag>;
}

export default TagInfo;
