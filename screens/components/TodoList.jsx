import React from "react";
import { styled } from "styled-components/native";
import TodoListItem from "./TodoListItem";

function TodoList({ todos, onPressCheck, onPressDelete }) {
  return (
    <Container>
      {todos.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          onPressCheck={onPressCheck}
          onPressDelete={onPressDelete}
        />
      ))}
    </Container>
  );
}

const Container = styled.View`
  height: 90%;
`;

export default TodoList;
