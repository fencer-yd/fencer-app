import { StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { EditScreenInfo, Text, View, Button } from "@/components";
import { increaseRequest } from "@/containers/home/action";

export default function TabOneScreen() {
  const dispatch = useDispatch();

  const { loading, number } = useSelector<Store.Instance, Store.HomeState>(
    (store) => store.home
  );

  const handleOnPress = () => {
    dispatch(increaseRequest(number));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="app/(home)/index.tsx" />
      <Text>The number is: {number}</Text>
      <Button title="Increase" onPress={handleOnPress} loading={loading} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
