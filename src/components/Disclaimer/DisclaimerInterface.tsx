import { ReactNode } from 'react';
import { defaultTheme } from '../../styles/themes/default';

export const COLORS = defaultTheme.font.color;
export interface DisclaimerInterfaceProps {
  title?: ReactNode;
  subtitle?: ReactNode;
  icon?: ReactNode;
  $backgroundColor?: keyof typeof COLORS;
}
