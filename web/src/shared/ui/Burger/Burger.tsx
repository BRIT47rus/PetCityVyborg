import cls from './Burger.module.scss';
interface BurgerProps {
    className?: string;
}
export const Burger = ({  }: BurgerProps) => {
    return (
        <div className={cls.Burger}>
            <div className={cls.line}></div>
            <div className={cls.line}></div>
            <div className={cls.line}></div>
        </div>
    );
};
 