import { Burger, Link } from '../../../shared';
import cls from './Links.module.scss';
interface LinksProps {
  className?: string;
}
export const Links = ({ className }: LinksProps) => {
  return (
    <div className={className}>
        <Link>Главная</Link>
        <Link>Карта</Link>
        <Link>Всякое</Link>
    
    </div>
  );
};
