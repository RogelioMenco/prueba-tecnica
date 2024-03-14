import { FC } from "react";
interface TaskProsp {
  title: string;
  onTaskDelete: () => void;
}
const Task: FC<TaskProsp> = ({ title, onTaskDelete }) => {
  return (
    <div className="bg-slate-600 rounded-xl flex px-3 justify-between overflow-hidden my-3 pr-0">
      <span className="min-w-0 flex-grow inline-block break-words p-3 ">{title}</span>
      <button onClick={onTaskDelete} className="text-red-500 bg-slate-700 rounded-none text-lg py-2 px-4">
        Eliminar
      </button>
    </div>
  );
};

export default Task;
