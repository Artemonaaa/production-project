import { Theme, useTheme } from "app/providers/ThemeProvider";

import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ThemeSwitcher.module.scss";

import LigthIcon from "shared/assets/icons/theme-light.svg";
import DarkIcon from "shared/assets/icons/theme-dark.svg";

interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={classNames(cls.themeSwitcher, {}, [className])}
    >
      {theme === Theme.DARK ? <DarkIcon /> : <LigthIcon />}
    </button>
  );
};

export default ThemeSwitcher;
