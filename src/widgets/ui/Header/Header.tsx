import { Burger, } from '../../../shared';
import { Links } from '../Links/Links';
import cls from './Header.module.scss';
interface HeaderProps {
  className?: string;
}
export const Header = ({  }: HeaderProps) => {
  return (
    <div className={cls.Header}>
      
      <Links/>
      <Burger/>
    </div>
  );
};
