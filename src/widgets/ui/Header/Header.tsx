import { Burger } from 'shared';
import cls from './Header.module.scss';
import { Links } from '../Links/Links';
export const Header = ( ) => {
  return (
    <div className={cls.Header}>
      
      <Links/>
      <Burger/>
    </div>
  );
};
