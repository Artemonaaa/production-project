import { Theme, useTheme } from 'app/providers/ThemeProvider';
import Button, { ThemeButton } from 'shared/ui/Button/Button';

import { classNames } from 'shared/lib/classNames/classNames';

import LigthIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';

interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      theme={ThemeButton.CLEAR}
      onClick={toggleTheme}
      className={classNames('', {}, [className])}
    >
      {theme === Theme.DARK ? <DarkIcon /> : <LigthIcon />}
    </Button>
  );
};

export default ThemeSwitcher;
