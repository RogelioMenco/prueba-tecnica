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
    
    <div className="mt-2 shadow-sm">
      <input
        type="text"
        placeholder="Nuevo Contacto"
        value={newTaskTitle}
        onChange={handleInputChange}
        className="borde-1px bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      <button
        onClick={handleAddTask} className="text-white bg-blue-700 hover:bg-blue-80">
        Agregar
      </button>                        
    </div>
  );
};

export default Input;
0