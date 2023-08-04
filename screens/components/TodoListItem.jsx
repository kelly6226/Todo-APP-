import React from "react";
import { styled } from "styled-components/native";
import Feather from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

function TodoListItem({ todo, onPressCheck, onPressDelete }) {
  const { id, content, date, complete } = todo;

  const [form, setForm] = useState(content);

  return (
    <Container>
      <CheckBox onPress={() => onPressCheck(id)}>
        {complete && <Feather name={"check"} size={12} />}
      </CheckBox>
      <ContentGroup>
        <Content>{content}</Content>
        <Date>{date}</Date>
      </ContentGroup>

      {/* 여기에서 이제 form으로 바뀐부분을 다시 배열 속에 수정해서 해야함
        모든 수정은 부모 컨테스트에서 만들어진 함수를 사용해서 하고 있는 거임.
      */}
      <TextInput value={form} onChangeText={setForm} />

      <MaterialCommunityIcons name={"pencil"} size={20} color={"#00948A"} />
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

const Content = styled.Text`
  font-weight: 700;
`;

const Date = styled.Text``;

export default TodoListItem;
