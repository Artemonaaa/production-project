import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Button from 'shared/ui/Button/Button';
import cls from './PageError.scss';

interface ErrorPageProps {
    className?: string;
}

export const PageError = ({ className }: ErrorPageProps) => {
  const { t } = useTranslation();

  const reloadPage = () => {
    location.reload();
  };

  return (
    <div className={classNames(cls.pageError, {}, [className])}>
      <p>{ t('An unforeseen error occurred') }</p>
      <Button onClick={reloadPage}>
        { t('Refresh page') }
      </Button>
    </div>
  );
};
