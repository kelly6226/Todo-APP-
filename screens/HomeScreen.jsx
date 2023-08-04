import React, { useState } from "react";
import { styled } from "styled-components/native";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

function HomeScreen() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      content: "fhdkfhk@jf",
      date: "1/20/2023",
      complete: false,
    },
    {
      id: 2,
      content: "dfsd@jf",
      date: "1/15/2023",
      complete: false,
    },
    {
      id: 3,
      content: "hgfb@jf",
      date: "1/240/2023",
      complete: false,
    },
  ]);

  const [content, setContent] = useState("");

  const onChange = (text) => setContent(text);

  const onPressAdd = () => {
    const newTodo = {
      id: todos.length + 1,
      content: content,
      date: new Date().toISOString,
      complete: false,
    };

    // ...연산자는 객체가 하나씩 넘어노는 것
    // 이 경우에는 ...prev는 todos[0], todos[1], todos[2] 랑 동일 의미
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
      />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: white;
`;

export default HomeScreen;
