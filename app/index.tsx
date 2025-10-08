import React from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";

const index = () => {
  return (
    <View style={styles.page}>
{/* 
        <Image source={require("../assets/icons/customer.png")} style={{width:67, height:59}} /> */}


      
      <Text style={{textAlign:"center", fontSize:20, fontWeight:"bold"}}>Welcome back!</Text>



      <View
        style={{
          borderWidth: 1,
          padding: 10,
          borderRadius: 15,
          flexDirection:"row",
          gap:10,
          alignItems:"center",
          marginTop:10,
        }}
      >
        <Image source={require("../assets/icons/customer.png")} style={{width:20, height:20}} />

        <TextInput
          placeholder="Enter Username"
          placeholderTextColor={"black"}
          style={{ width:240, height:40}}
        />
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "white",
    padding: 40,
    // alignItems: "center",
    // justifyContent: "center",
  },
});
