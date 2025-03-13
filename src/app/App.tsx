import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/NavBar";

import { useTheme } from "app/providers/ThemeProvider";

import { classNames } from "shared/lib/classNames/classNames";
import "./styles/index.scss";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <button onClick={toggleTheme}>Change Them</button>
      <AppRouter />
    </div>
  );
};

export default App;
