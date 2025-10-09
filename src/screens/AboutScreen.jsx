import { useNavigation } from "expo-router";
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const AboutScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>navigation.goBack()}>
        <Image
          source={require("../assets/icons/arrow.png")}
          style={{ width: 30, height: 30 }}
        />
      </TouchableOpacity>

      <View style={{ alignSelf: "center", justifyContent: "center" }}>
        <Text>Olamide</Text>
      </View>
      <Button on title="click"></Button>
    </View>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    padding: 40,
  },
});
