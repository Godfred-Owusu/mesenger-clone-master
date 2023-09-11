import { StyleSheet, Text, View } from "react-native";
const Footer = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        marginTop: 8,
      }}
    >
      <View style={styles.containerStyle}>
        <View style={styles.containerStyle}>
          <Text style={styles.footer}>English (UK)</Text>
          <Text style={styles.footer}>Basa Jawa</Text>
          <Text style={styles.footer}>Portuges (Brazil)</Text>
        </View>
      </View>

      <View style={styles.containerStyle}>
        <View style={styles.containerStyle}>
          <Text style={styles.footer}>Bahasa Indonsia</Text>
          <Text style={styles.footer}>Bahasa Melayu</Text>
          <Text style={styles.footer}>Espanol</Text>
        </View>
      </View>
    </View>
  );
};
export default Footer;
const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  footer: {
    color: "grey",
  },
});
