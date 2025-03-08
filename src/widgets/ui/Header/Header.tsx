import { Link } from '../../../shared';
import cls from './Header.module.scss';
interface HeaderProps {
  className?: string;
}
export const Header = ({  }: HeaderProps) => {
  return (
    <div className={cls.Header}>
      
        <Link>Главная</Link>
        <Link>Карта</Link>
        <Link>Всякое</Link>

    </div>
  );
};
