import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Image.module.scss";
interface ImageProps {
  className?: string;
  img: string;
  alt?: string;
}

export const Image = ({ className = "", img='', alt }: ImageProps) => {
  return (
    <div className={classNames(cls.Image, {}, [className])}>
      <img src={img} alt={alt} />
    </div>
  );
};
