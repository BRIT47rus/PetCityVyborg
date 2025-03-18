import { classNames } from 'shared/lib/classNames/classNames';
import cls from './SinceDate.module.scss';
interface SinceDateProps {
  className?: string;
}

export const SinceDate  = ({className}:SinceDateProps) => {

  return (
    <div
      className={classNames(cls.SinceDate, {}, [className])}
    >
    </div>
  );
};