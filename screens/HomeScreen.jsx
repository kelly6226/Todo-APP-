import React, { useState } from "react";
import { styled } from "styled-components/native";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

function HomeScreen() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      content: "fhdkfhk@jf",
      date: "2023-01-20",
      complete: false,
    },
    {
      id: 2,
      content: "dfsd@jf",
      date: "2023-01-15",
      complete: false,
    },
    {
      id: 3,
      content: "hgfb@jf",
      date: "2023-01-24",
      complete: false,
    },
  ]);

  const [content, setContent] = useState("");

  const onChange = (text) => setContent(text);

  const onPressAdd = () => {
    const newTodo = {
      id: todos.length + 1,
      content: content,
      date: new Date().toISOString(),
      complete: false,
    };

    setTodos((prev) => [...prev, newTodo]);
    setContent("");
  };

  const onPressCheck = (todoId) => {
    setTodos((prev) =>
      prev.map((todo) => ({
        ...todo,
        complete: todo.id === todoId ? !todo.complete : todo.complete,
      }))
    );
  };

  const onPressDelete = (todoId) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== todoId));
  };

  const onPressModify = (todoId, todoForm) => {
    setTodos((prev) =>
      prev.map((todo) => ({
        ...todo,
        content: todo.id === todoId ? todoForm : todo.content,
      }))
    );
  };

  return (
    <Container>
      <TodoInsert
        content={content}
        onChange={onChange}
        onPressAdd={onPressAdd}
      />
      <TodoList
        todos={todos}
        onPressCheck={onPressCheck}
        onPressDelete={onPressDelete}
        onPressModify={onPressModify}
      />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: white;
`;

export default HomeScreen;
