import { FC } from "react";
import "./App.css";
import Container from "./componentes/Container";
import Title from "./componentes/Title";

const App: FC = () => {
  return (
    <div className="max-w-[500px] flex flex-col align-center">
      <Title />
      <Container />
    </div>
  );
};

export default App;
