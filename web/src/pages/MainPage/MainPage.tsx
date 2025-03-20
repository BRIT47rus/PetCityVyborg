import {  Image } from "shared";
import imgCastle from "../../app/essets/images/castle/замокДракар.jpg";
import cls from "./MainPage.module.scss";

const MainPage = () => {
  return (
    <div className={cls.MainPage}>
   <Image  img={imgCastle} alt='замок' className="image__bg"/>
    </div>
  );
};
export default MainPage;
