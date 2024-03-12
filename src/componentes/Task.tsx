import { FC } from "react";

interface TaskProsp {
  title: string;
  completed: boolean;
  onTaskDelete: () => void;
}

const Task: FC<TaskProsp> = ({ title, completed, onTaskDelete }) => {
  return (
    <div className="bg-slate-600 rounded-xl flex justify-between overflow-hidden my-3">
      <input type="checkbox" checked={!!completed ?? false} />
      <span className="text-white m-2">{title}</span>
      <button
        className=" bg-blue-500 text-red-1000 rounded-none text-lg py-2 px-4"
        onClick={onTaskDelete}
      >
        Eliminar
      </button>
    </div>
  );
};

export default Task;
