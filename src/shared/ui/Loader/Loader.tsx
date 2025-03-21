import { classNames } from 'shared/lib/classNames/classNames';
import './Loader.scss';

interface LoaderProps {
  className?: string;
}

const Loader = ({ className }: LoaderProps) => (
  <div className={classNames('lds-ellipsis')}>
    <div />
    <div />
    <div />
    <div />
  </div>
);

export default Loader;
