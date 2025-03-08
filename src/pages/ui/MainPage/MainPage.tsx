import cls from './MainPage.module.scss';

interface MainPageProps {
  className?: string;
}


export const MainPage = ({ }: MainPageProps) => {
  return (
    <div className={cls.MainPage}>
      Hello world
    </div>
  );
};
    