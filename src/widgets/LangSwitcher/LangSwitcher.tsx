import { useTranslation } from "react-i18next";

import cls from "./LangSwitcher.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import Button, { ThemeButton } from "shared/ui/Button/Button";

interface LangSwitcherInterface {
  className?: string
}

const LangSwitcher = ({className}: LangSwitcherInterface) => {
  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === "ua" ? "en" : "ua");
  };

  return (
    <Button
      className={classNames(cls.langSwitcher, {}, [className])}
      theme={ThemeButton.CLEAR}
      onClick={toggle}
    >
      {t("translate")}
    </Button>
  );
};

export default LangSwitcher;
