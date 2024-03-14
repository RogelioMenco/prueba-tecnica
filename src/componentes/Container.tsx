import { FC, useState } from "react";
import Input from "./Input";
import Task from "./Task";
interface TaskItem {
  id: number;
  title: string;
}

const Container: FC = () => {
  const [tasks, setTasks] = useState<TaskItem[]>([]);

  const addTask = (title: string) => {
    const newTask: TaskItem = {
      id: tasks.length + 1,
      title,
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId: number) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div>
      <Input onAddTask={addTask} />
      {tasks.map((task) => (
        <Task key={task.id} title={task.title} onTaskDelete={() => deleteTask(task.id)} />
      ))}
    </div>
  );
};

export default Container;
