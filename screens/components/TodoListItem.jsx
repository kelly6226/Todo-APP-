import React, { useState } from "react";
import { Text, TextInput } from "react-native";

import { styled } from "styled-components/native";
import Feather from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

function TodoListItem({ todo, onPressCheck, onPressDelete, onPressModify }) {
  const { id, content, date, complete } = todo;

  const [form, setForm] = useState(content);
  const [isInputMode, setInputMode] = useState(false); // input 모드 여부를 저장하는 상태 추가

  const changeToInput = () => {
    setInputMode(true); // input 모드를 활성화
  };

  const changeToText = () => {
    setInputMode(false); // input 모드를 비활성화
    // form 값으로 content를 업데이트 (수정한 내용을 반영)
    onPressModify(id, form);
  };

  return (
    <Container>
      <CheckBox onPress={() => onPressCheck(id)}>
        {complete && <Feather name={"check"} size={12} />}
      </CheckBox>

      {/* 수정 버튼에 따라 input 모드와 text 모드를 전환 */}
      {isInputMode ? (
        <TextInputBox
          value={form}
          onChangeText={setForm}
          onBlur={changeToText} //onBlur는 엘리먼트에서 포커스가 사라졌을때 호출됨 (ex. 바깥 영역 클릭)
        />
      ) : (
        <ContentGroup>
          <Content>{content}</Content>
          <Date>{date}</Date>
        </ContentGroup>
      )}

      <MaterialCommunityIcons
        name={"pencil"}
        size={20}
        color={"#00948A"}
        onPress={() => changeToInput()}
      />
      <FontAwesome5
        name={"trash"}
        size={20}
        color={"#C1372F"}
        onPress={() => onPressDelete(id)}
      />
    </Container>
  );
}

const Container = styled.View`
  padding: 20px;

  flex-direction: row;

  justify-content: space-around;
  align-items: center;

  min-height: 10%;

  border-bottom-width: 1px;
  border-bottom-color: #d9d9d9;
`;

const CheckBox = styled.TouchableOpacity`
  width: 18px;
  height: 18px;

  border: 3px solid #392f31;
  justify-content: center;
  align-items: center;
`;

const ContentGroup = styled.View`
  width: 60%;
`;

const TextInputBox = styled.TextInput`
  width: 60%;
`;

const Content = styled.Text`
  font-weight: 700;
`;

const Date = styled.Text``;

export default TodoListItem;
