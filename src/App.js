import { TodoCounter } from "./TodoCounter";
import { TodoItem } from "./TodoItem";
import { TodoSearch } from "./TodoSearch";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoList } from "./TodoList";
// import './App.css';
const todos = [
  { text: "Cortar cebolla", completed: false },
  { text: "Tomar agua", completed: false },
  { text: "Estudiar React", completed: false },
];

function App() {
  return (
    <>
      <TodoCounter todos={todos} />
      <TodoSearch />
      <TodoList>
        {todos.map( (todo, index) => (
          
          <TodoItem key={index} text={todo.text} />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App;
