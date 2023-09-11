import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Formik } from "formik";
import { schema } from "../components/LoginValidation";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";

const LoginScreen = ({ navigation }) => {
  const [securePassword, setSecurePassword] = useState(true);
  return (
    <Formik
      initialValues={{ email: "", Password: "" }}
      onSubmit={(values) =>
        Alert.alert(
          "Messenger wants to use Facebook.com to sign In",
          "This allows the app to share information about you",
          [
            {
              text: "Continue",
              onPress: () => navigation.navigate("Home"),
            },
          ],
          { cancelable: false }
        )
      }
      validationSchema={schema}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        touched,
        errors,
        isValid,
      }) => (
        <View style={styles.container}>
          <Image
            style={{
              width: 150,
              height: 150,
              alignItems: "center",
              justifyContent: "center",
            }}
            source={require("../assets/messenger_icon.png")}
          />
          <View>
            <TextInput
              style={[
                styles.inputStyle,
                {
                  borderWidth: errors.email && touched.email ? 1 : 0,
                  borderColor: errors.email && touched.email ? "red" : "#000",
                  padding: 15,
                },
              ]}
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              placeholder="Phone number or Email"
            />
            {errors.email && touched.email && (
              <Text style={styles.errors}>{errors.email}</Text>
            )}
            <View
              style={[
                styles.inputStyle,
                {
                  borderWidth: errors.Password && touched.Password ? 1 : 0,
                  borderColor:
                    errors.Password && touched.Password ? "red" : "#000",
                },
              ]}
            >
              <TextInput
                style={{
                  width: "80%",
                }}
                onChangeText={handleChange("Password")}
                onBlur={handleBlur("Password")}
                value={values.Password}
                secureTextEntry={securePassword}
                placeholder="password"
              />
              <Feather
                name={securePassword ? "eye-off" : "eye"}
                size={18}
                color="black"
                onPress={() => setSecurePassword((prev) => !prev)} // Toggle the securePassword state
              />
            </View>
            {errors.Password && touched.Password && (
              <Text style={styles.errors}>{errors.Password}</Text>
            )}
            <Button
              style={{ borderRadius: 20 }}
              onPress={handleSubmit}
              title="Login"
              disabled={!isValid}
            />
          </View>
          <View style={{ marginTop: 10, width: "85%" }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("SignUp")}
              style={{
                backgroundColor: "#eee", // Button background color
                paddingVertical: 10,
                paddingHorizontal: 20,
                borderRadius: 8,
              }}
            >
              <Text
                style={{
                  color: "black",
                  fontSize: 16,
                  textAlign: "center",
                  fontWeight: 500,
                }}
              >
                Create New Account
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 20 }}>
            <Text style={{ color: "blue" }}>Forgot Password?</Text>
          </View>
        </View>
      )}
    </Formik>
  );
};

export default LoginScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "10%",
  },
  inputStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 5,
    height: 45,
  },
  errors: {
    color: "red",
    marginTop: 5,
    marginBottom: 3,
    fontSize: 10,
  },
});
