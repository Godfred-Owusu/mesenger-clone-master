import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Navigator from "./navigations/Navigator";
import AppContext from "./context/Context";
import Footer from "./components/Footer";
// import LoginScreen from "./Screens/LoginScreen";
// import SignUpScreen from "../Screens/SignUpScreen/UserName";
// import UserName from "../Screens/SignupScreens/UserName";

export default function App() {
  return (
    <AppContext>
      <Navigator />
    </AppContext>

    // <View>
    //   <Footer />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
