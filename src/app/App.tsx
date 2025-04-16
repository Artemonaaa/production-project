import { Suspense, useState } from 'react';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

import { useTheme } from 'app/providers/ThemeProvider';

import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';

const App = () => {
  const { theme } = useTheme();

  return (
    <Suspense fallback="">
      <div className={classNames('app', {}, [theme])}>
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </div>
    </Suspense>
  );
};

export default App;
