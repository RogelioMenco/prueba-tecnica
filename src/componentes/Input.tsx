import { FC, useState } from "react";
interface InputProps {
  onAddTask: (title: string) => void;
}
const Input: FC<InputProps> = ({ onAddTask }) => {
  const [newTaskTitle, setNewTaskTitle] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTaskTitle(e.target.value);
  };

  const handleAddTask = () => {
    if (newTaskTitle.trim() !== "") {
      onAddTask(newTaskTitle);
      setNewTaskTitle("");
    }
  };

  return (
    <form
      className="flex bg-white rounded-md text-gray-800 "
      onSubmit={(e) => {
        e.preventDefault();
        handleAddTask();
      }}
    >
      <input
        type="text"
        placeholder="Nuevo Contacto"
        value={newTaskTitle}
        onChange={handleInputChange}
        className="bg-transparent outline-none focus:outline-none focus:bg-white border-b border-gray-300 px-3 w-full gri"
      />
      <button onClick={handleAddTask} className="col-span-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Agregar
      </button>
    </form>
  );
};

export default Input;
0;
