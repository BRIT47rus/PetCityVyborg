import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Link.module.scss";
import { NavLink } from "react-router-dom";
type RouteLink = "/" | "/map" | "/other";
interface LinkProps {
  children: string;
  className?: string;
  linkTo?: RouteLink;
}
export const Link = ({ children, linkTo = "/" }: LinkProps) => {
  return (
    <NavLink to={linkTo}>
      <div className={classNames(cls.link)}>{children.toUpperCase()}</div>
    </NavLink>
  );
};
