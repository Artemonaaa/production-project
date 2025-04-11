import { Suspense, useState } from 'react';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import Modal from 'shared/ui/Modal/Modal';
import Button from 'shared/ui/Button/Button';

import { useTheme } from 'app/providers/ThemeProvider';

import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';
import './styles/index.scss';

const App = () => {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Suspense fallback="">
      <div className={classNames('app', {}, [theme])}>
        <Navbar />
        <Button onClick={() => setIsOpen(true)}>
          Toogle
        </Button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
        </Modal>
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </div>
    </Suspense>
  );
};

export default App;
