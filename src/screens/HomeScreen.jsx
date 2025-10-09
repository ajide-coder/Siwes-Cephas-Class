import { useNavigation } from "@react-navigation/native";
import {
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.page}>
      <View style={{ marginTop: 100 }}></View>
      <Text style={styles.Text}>Welcome Back!</Text>

      <View
        style={{
          borderWidth: 1,
          padding: 10,
          borderRadius: 15,
          flexDirection: "row",
          gap: 10,
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <Image
          source={require("../assets/icons/user.png")}
          style={{ height: 20, width: 20 }}
        />
        <TextInput
          placeholder="Enter Username"
          placeholderTextColor={"black"}
          style={{ width: 320, height: 30 }}
        />
      </View>

      <View
        style={{
          borderWidth: 1,
          padding: 10,
          borderRadius: 15,
          flexDirection: "row",
          gap: 10,
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <TextInput
          placeholder="Enter Password"
          placeholderTextColor={"black"}
          style={{ width: 350, height: 35 }}
        />
      </View>
      <Text style={{ paddingLeft: 200, marginTop: 30, color: "blue" }}>
        Forgot Password?
      </Text>
      <TouchableOpacity onPress={()=>navigation.navigate('About')} >
        <View style={styles.bot}>
          <Text style={{ color: "white" }}>SIGN IN</Text>
        </View>
        <Text style={{ paddingLeft: 160, marginTop: 20 }}>or</Text>
      </TouchableOpacity>
      <View style={{ flexDirection: "row" }}>
        <Image
          source={require("../assets/icons/apple.jpg")}
          style={{ height: 50, width: 50 }}
        />
        <Image
          source={require("../assets/icons/apple.jpg")}
          style={{ height: 50, width: 50 }}
        />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
    flex: 1,
    paddingTop: 50,
    padding: 40,
    alignItems: "center",
  },

  Text: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },

  bot: {
    backgroundColor: "blue",
    width: 350,
    height: 60,
    borderRadius: 20,
    marginTop: 15,
    alignItems: "center",
    paddingTop: 20,
  },
});
