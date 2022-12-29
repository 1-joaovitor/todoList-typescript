import TodoTask from "./components/TodoTask/TodoTask";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import "./styles/styles.css";

export interface Itasks {
  id: number;
  nameTask: string;
}

function App() {
  const [task, setTask] = useState<string>("");
  const [todoList, setTodoList] = useState<Itasks[]>([]);

  const addTask = (): void => {
    const idRandom = (num: number) => Math.floor(Math.random() * num);
    const newTask = {
      id: idRandom(1234456),
      nameTask: task,
    };
    if (task == "" || null) {
      toast.error("É necessário adicionar alguma tarefa");
      return;
    }
    setTodoList([...todoList, newTask]);
    setTask("");
    toast.success("Adicionado com sucesso");
  };

  const DeleteTask = (idTask: number) => {
    setTodoList(todoList.filter((taskName) => taskName.id !== idTask));
    toast.success("Excluido com sucesso");
  };
  return (
    <div className="App">
      <header>
        <h2>Todo-List</h2>

        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          type="text"
          autoComplete="off"
          placeholder=" Tarefa..."
          name="task"
          className="input"
        />

        <button type="submit" className="btn-header" onClick={addTask}>
          Adicionar Tarefa
        </button>
      </header>

      <div className="line"></div>

      {todoList.map((task) => (
        <TodoTask DeleteTask={DeleteTask} key={task.id} task={task} />
      ))}
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          className: "",
          duration: 3000,
          style: {
            background: "black",
            color: "#fff",
			fontWeight:900,
          },
        }}
      />
    </div>
  );
}

export default App;
