import { ReactNode } from 'react';
import { defaultTheme } from '../../styles/themes/default';

type GapType = '0.75rem' | '0.5rem';
type AlignItemsType = 'start' | 'center' | ' end';
export const COLORS = defaultTheme.font.color;
export interface DisclaimerInterfaceProps {
  title?: ReactNode;
  $subtitle?: ReactNode;
  icon?: ReactNode;
  $backgroundColor?: keyof typeof COLORS;
  $gap?: GapType;
  $alignItems?: AlignItemsType;
}
