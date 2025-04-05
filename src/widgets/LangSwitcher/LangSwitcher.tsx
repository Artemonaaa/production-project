import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';

interface LangSwitcherInterface {
  className?: string;
  short?: boolean;
}

const LangSwitcher = ({ className, short }: LangSwitcherInterface) => {
  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ua' ? 'en' : 'ua');
  };

  return (
    <Button
      className={classNames('', {}, [className])}
      theme={ButtonTheme.CLEAR}
      onClick={toggle}
    >
      {t(short ? 'shorts' : 'translate')}
    </Button>
  );
};

export default LangSwitcher;
