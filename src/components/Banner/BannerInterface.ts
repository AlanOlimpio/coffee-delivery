import { ReactNode } from 'react';
import { defaultTheme } from '../../styles/themes/default';

export const COLORS = defaultTheme.font.color;
export interface BannerInterfaceProps {
  title?: string;
  subTitle?: string;
  children?: ReactNode;
  imageUrl?: string;
  $backgroundImage?: string;
  $backgroundColor?: keyof typeof COLORS;
}
