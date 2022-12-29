import { Itasks } from "../../App";
import "./styles.css";

interface TaskProps {
  task: Itasks;
  DeleteTask(idTask: number): void;
}

function TodoTask({ task, DeleteTask }: TaskProps) {
  return (
    <div className="card">
      <div>
        <p className="Task">{task?.nameTask}</p>
      </div>

      <div className="line2">
        <span onClick={() => DeleteTask(task.id)} className="btn-card">
          X
        </span>
      </div>
    </div>
  );
}

export default TodoTask;
