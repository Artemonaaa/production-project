import { ButtonHTMLAttributes, FC } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: string;
  square?: boolean;
  size?: ButtonSize
}

const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    theme,
    children,
    square,
    size = ButtonSize.M,
    ...otherProps
  } = props;

  const mods: Record<string, boolean> = {
    [cls.square]: square,
  };

  return (
    <button type="button" className={classNames(cls.button, mods, [className, cls[theme], cls[size]])} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
