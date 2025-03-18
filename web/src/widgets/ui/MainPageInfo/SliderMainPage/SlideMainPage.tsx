import { classNames } from 'shared/lib/classNames/classNames';
import cls from './SlideMainPage.module.scss';
interface SlideMainPageProps {
  className?: string;
}

export const SlideMainPage  = ({className}:SlideMainPageProps) => {

  return (
    <div
      className={classNames(cls.SlideMainPage, {}, [className])}
    >
    </div>
  );
};