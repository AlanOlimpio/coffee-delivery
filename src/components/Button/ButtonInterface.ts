import { ReactNode } from 'react';
import { defaultTheme } from '../../styles/themes/default';

export const COLORBUTTON = defaultTheme.font.color;

type PaddingButton =
  | '0.5rem'
  | '0.6rem'
  | '0.7rem'
  | '0.8rem'
  | '0.9rem'
  | '1rem';
type WeightButton = '400' | '500' | '600' | '700';
type GapButton =
  | '0.25rem'
  | '0.5rem'
  | '0.6rem'
  | '0.7rem'
  | '0.8rem'
  | '0.9rem'
  | '1rem';

type TextTransformButton = 'capitalize' | 'uppercase' | 'lowercase';
type DisplayButton = 'flex' | 'block' | 'inline-block';

export interface ButtonInterfaceProps {
  text?: string;
  $textColor?: keyof typeof COLORBUTTON;
  $backgroundColor?: keyof typeof COLORBUTTON;
  $hoverTextColor?: keyof typeof COLORBUTTON;
  $hoverBackgroundColor?: keyof typeof COLORBUTTON;
  $gap?: GapButton;
  $paddingY?: PaddingButton;
  $paddingX?: PaddingButton;
  children?: ReactNode;
  $weight?: WeightButton;
  $textTransform?: TextTransformButton;
  $display?: DisplayButton;
  onClick?: () => void;
}

export interface ButtonContainerInterfaceProps
  extends Omit<ButtonInterfaceProps, 'text'> {}
