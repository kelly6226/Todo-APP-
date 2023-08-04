import React from "react";
import { styled } from "styled-components/native";

function TodoInsert({ content, onChange, onPressAdd }) {
  return (
    <Container>
      <InputBorderBottom>
        <Input
          value={content}
          onChangeText={onChange}
          placeholder="Add new item"
        />
      </InputBorderBottom>
      <AddButton onPress={onPressAdd}>
        <ButtonLabel>ADD</ButtonLabel>
      </AddButton>
    </Container>
  );
}

const Container = styled.View`
  width: 100%;
  height: 10%;

  flex-direction: row;

  align-items: center;
  justify-content: space-around;
`;

const Input = styled.TextInput`
  width: 100%;
  height: 100%;

  padding-left: 4px;
`;

const InputBorderBottom = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: #00948a;

  width: 60%;
  height: 40px;
`;

const AddButton = styled.TouchableOpacity`
  width: 90px;
  height: 40px;

  background-color: #00948a;

  justify-content: center;
  align-items: center;
`;

const ButtonLabel = styled.Text`
  color: #fff;
  font-weight: 700;
`;

export default TodoInsert;
