import { Suspense } from "react";
import { useTranslation } from "react-i18next";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";

import { useTheme } from "app/providers/ThemeProvider";

import { classNames } from "shared/lib/classNames/classNames";
import "./styles/index.scss";

function MyComponent() {
  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === "ua" ? "en" : "ua")
  };

  return (
    <>
      <button onClick={toggle}>{t("translate")}</button>
      <h1>{t("Welcome to React")}</h1>
    </>
  );
}

const App = () => {
  const { theme } = useTheme();

  return (
    <Suspense fallback="">
      <div className={classNames("app", {}, [theme])}>
        <Navbar />
        <MyComponent />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </div>
    </Suspense>
  );
};

export default App;
