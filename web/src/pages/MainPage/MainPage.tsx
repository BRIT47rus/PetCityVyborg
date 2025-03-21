import { TitleSize } from "widgets/StartPage/StartPage";
import imgCastle from "../../app/essets/images/castle/замокДракар.jpg";
import cls from "./MainPage.module.scss";
import { StartPage } from "widgets";

const MainPage = () => {
  return (
    <div className={cls.MainPage}>
      <StartPage img={imgCastle} title="Выборгский замок" titleSize={TitleSize.TITLE_HIGHT}/>
  
    </div>
  );
};
export default MainPage;
