import cls from './MainPage.module.scss';

interface MainPageProps {
  className?: string;
}


export const MainPage = ({className }: MainPageProps) => {
  return (
    <div className={className}>
      Hello world
    </div>
  );
};
    