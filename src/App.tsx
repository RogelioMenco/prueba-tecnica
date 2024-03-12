import { FC } from "react";
import "./App.css";
import Container from "./componentes/Container";
import Title from "./componentes/Title";

const App: FC = () => {
  const handleAddTask = (): void => {};
  return (
    <>
      <Title />
      <Container onAddTask={handleAddTask} />
    </>
  );
};

export default App;
