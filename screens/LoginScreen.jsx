import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { styled } from "styled-components/native";

function LoginScreen() {
  const navigation = useNavigation();

  const onPressKakao = () => {
    navigation.navigate("home");
  };

  return (
    <Container>
      <KakaoButton onPress={onPressKakao}>
        <ButtonLabel>카카오 버튼</ButtonLabel>
      </KakaoButton>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: #fff;

  justify-content: center;
  align-items: center;
`;

const KakaoButton = styled.TouchableOpacity`
  width: 150px;
  height: 60px;

  background-color: yellow;

  justify-content: center;
  align-items: center;
`;

const ButtonLabel = styled.Text`
  font-size: 20px;
  font-weight: 700;
`;

export default LoginScreen;
