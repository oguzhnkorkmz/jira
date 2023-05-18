import TaskShow from "./TaskShow";
import { useContext } from "react";
import TasksContext from "../context/task";

function TaskList() {
  const { tasks } = useContext(TasksContext);
  return (
    <div className="task-list">
      {tasks.map((task, index) => {
        return <TaskShow task={task} key={index} />;
      })}
    </div>
  );
}

export default TaskList;
