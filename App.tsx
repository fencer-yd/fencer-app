import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";

export default function App() {
  return (
    <Container>
      <HelloText>Open up App.tsx to start2 working on your app!</HelloText>
      <StatusBar style="auto" />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

const HelloText = styled.Text`
  color: red;
`;
