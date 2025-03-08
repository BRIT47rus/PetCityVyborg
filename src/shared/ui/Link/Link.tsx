import { classNames } from '../../lib/classNames/classNames';
import cls from './Link.module.scss';

interface LinkProps {
    children: string;
    className?: string;
}
export const Link = ({ children }: LinkProps) => {
    return (
        <div className={classNames(cls.link)}>
            <a>{children.toUpperCase()}</a>
        </div>
    );
};
