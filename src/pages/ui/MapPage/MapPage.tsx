import cls from './MapPage.module.scss';
interface MapPageProps {
  className?: string;
}
export const MapPage = ({ className }: MapPageProps) => {
  return (
    <div className={className}>
      Страница карты
      
    </div>
  );
};
