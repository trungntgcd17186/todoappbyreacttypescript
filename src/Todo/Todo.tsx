import React, { FunctionComponent as FC, useState } from "react";
import Form from "../Components/TodoForm/Form";
import { ITodo } from "../Components/interfaces";
import TodoList from "../Components/TodoList/TodoList";

const Todo: FC = () => {
  const [todoList, setTodoList] = useState<ITodo[]>([
    {
      id: 1,
      todo: "test todo",
      completed: true,
    },
    {
      id: 2,
      todo: "do coding",
      completed: false,
    },
  ]);

  const addTodo = (todo: string): void => {
    if (!todo) {
      alert("please add todo!");
      return;
    }
    const data: ITodo = {
      id: todoList.length < 1 ? 1 : todoList[todoList.length - 1].id + 1,
      todo: todo,
      completed: false,
    };
    setTodoList([...todoList, data]);
    alert("Todo added successfully!");
  };

  const completeTodo = (id: number): void => {
    setTodoList(
      todoList.map(
        (todo: ITodo): ITodo =>
          todo.id === id
            ? Object.assign(todo, { completed: true }) && todo
            : todo
      )
    );
  };

  const deleteTodo = (id: number): void => {
    setTodoList(
      todoList.filter((todo: ITodo): ITodo | null =>
        todo.id !== id ? todo : null
      )
    );
    alert("Todo deleted successfully!");
  };
  return (
    <div className="container">
      <h1 className="text-center my-2">React TypeScript Todo App</h1>
      <div className="row">
        <Form addTodo={addTodo} />
        <div className="todoList">
          {todoList.map((todo: ITodo, key: number) => (
            <TodoList
              key={key}
              todo={todo}
              completeTodo={completeTodo}
              deleteTodo={deleteTodo}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Todo;
