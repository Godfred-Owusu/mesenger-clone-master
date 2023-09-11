import { TouchableOpacity } from "react-native";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import Footer from "../../components/Footer";

const UserName = ({ navigation }) => {
  const nextHandler = () => {
    navigation.navigate("DateOfBirth");
  };

  // Move back to login Screen
  const backToLoginScreen = () => {
    navigation.navigate("Login");
  };
  return (
    <View style={{}}>
      <View style={styles.container}>
        <View>
          <View
            style={{
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontWeight: 700, fontSize: 20 }}>
              What's your name?
            </Text>
            <Text>Enter the name you use in real life</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              columnGap: 15,
            }}
          >
            <View>
              <Text>First Name</Text>
              <TextInput style={styles.inputStyle} />
            </View>
            <View>
              <Text>Surname</Text>
              <TextInput style={styles.inputStyle} />
            </View>
          </View>
          <View style={{ marginTop: 10 }}>
            <Button onPress={nextHandler} title="Next" rounded />
          </View>
          <View>
            <TouchableOpacity onPress={backToLoginScreen}>
              <Text style={{ fontWeight: 300, fontSize: 15, marginTop: 20 }}>
                Already have an account?
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Footer />
    </View>
  );
};
export default UserName;
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#F5FCFF",
    paddingVertical: 20,
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: "#aaa",
    borderRadius: 5,
    width: 160,
    marginTop: 3,
    paddingLeft: 10,
    // gap: 5,
  },
  footer: {
    color: "grey",
  },
});
