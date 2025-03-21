import { classNames } from "shared/lib/classNames/classNames";
import cls from "./TextInfo.module.scss";
import { TitleSize } from "widgets/StartPage/StartPage";
interface TextInfoProps {
  className?: string;
  title: string;
  titleSize?: TitleSize;
}

export const TextInfo = ({
  className = "",
  titleSize,
  title,
}: TextInfoProps) => {
  return (
    <div className={classNames(cls.TextInfo, {}, [className])}>
      <div>Привет, это просто сообщение</div>
      <div className={titleSize}>{title}</div>
    </div>
  );
};
