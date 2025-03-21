import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => (
  <div className={classNames(cls.navbar, {}, [className])}>
    <div className={cls.links}>
      <AppLink
        theme={AppLinkTheme.SECONDARY}
        to="/"
        className={cls.mainLink}
      >
        Main
      </AppLink>
      <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
        About
      </AppLink>
    </div>
  </div>
);

export default Navbar;
