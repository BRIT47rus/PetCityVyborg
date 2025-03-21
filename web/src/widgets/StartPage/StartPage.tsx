import { classNames } from "shared/lib/classNames/classNames";
import cls from "./StartPage.module.scss";
import { Image, TextInfo } from "shared";

export enum TitleSize {
  TITLE_LOW = "title_low",
  TITLE_MIDDLE = "title_middle",
  TITLE_HIGHT = "title_hight",
}

interface StartPageProps {
  title: string;
  titleSize?: TitleSize;
  className?: string;
  img?: string;
}

export const StartPage = ({
  title,
  titleSize = TitleSize.TITLE_LOW,
  className = "",
  img = "",
}: StartPageProps) => {
  return (
    <div className={classNames(cls.StartPage, {}, [className])}>
      <Image img={img} alt="замок" className="image__bg" />
      <TextInfo title={title} titleSize={titleSize} />
      
    </div>
  );
};
