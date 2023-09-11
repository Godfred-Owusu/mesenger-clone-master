import { TouchableOpacity } from "react-native";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import Footer from "../../components/Footer";

const PhoneNumber = ({ navigation }) => {
  const nextHandler = () => {
    navigation.navigate("Email");
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
              textAlign: "center",
            }}
          >
            <Text style={{ fontWeight: 700, fontSize: 20 }}>
              Enter your phone number
            </Text>
            <Text
              style={{
                textAlign: "center",
              }}
            >
              Enter your number on which you can be contacted. You can hide this
              from your profile later
            </Text>
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
          </View>
          <View
            style={{
              marginTop: 10,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              //   style={{ width: 200, }}
              onPress={nextHandler}
              title="Next"
              rounded
            />
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
export default PhoneNumber;
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
    width: 370,
    marginTop: 3,
    paddingLeft: 10,
    // gap: 5,
  },
  footer: {
    color: "grey",
  },
});
