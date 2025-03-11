import { Link } from "shared";
import cls from "./Links.module.scss";

export const Links = () => {
  return (
    <div className={cls.links}>
      <Link linkTo="/">Главная </Link>
      <Link linkTo="/map">Карта</Link>
      <Link linkTo="/other">Всякое</Link>
    </div>
  );
};
