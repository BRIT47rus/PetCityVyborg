import { Header } from "widgets";
import "./index.scss";
import { AppRouter } from "./providers/ui/AppRouter";

export const App = () => {
  return (
    <div className="App">
      <Header />
      <AppRouter />
    </div>
  );
};
