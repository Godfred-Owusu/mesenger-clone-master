import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import Footer from "../../components/Footer";
import AntDesign from "@expo/vector-icons/AntDesign";

const day = [
  { label: "1", value: "1" },
  { label: "2", value: "2" },
  { label: "3", value: "3" },
  { label: "4", value: "4" },
  { label: "5", value: "5" },
  { label: "6", value: "6" },
  { label: "7", value: "7" },
  { label: "8", value: "8" },
  { label: "9", value: "9" },
  { label: "10", value: "10" },
  { label: "11", value: "11" },
  { label: "12", value: "12" },
];
const months = [
  { label: "Jan", value: "1" },
  { label: "Feb", value: "2" },
  { label: "Mar", value: "3" },
  { label: "Apr", value: "4" },
  { label: "May", value: "5" },
  { label: "Jun", value: "6" },
  { label: "Jul", value: "7" },
  { label: "Aug", value: "8" },
  { label: "Sep", value: "9" },
  { label: "Oct", value: "10" },
  { label: "Nov", value: "11" },
  { label: "Dec", value: "12" },
];

const year = [
  { label: "2011", value: "12" },
  { label: "2012", value: "11" },
  { label: "2013", value: "10" },
  { label: "2014", value: "9" },
  { label: "2015", value: "8" },
  { label: "2016", value: "7" },
  { label: "2017", value: "6" },
  { label: "2018", value: "5" },
  { label: "2019", value: "4" },
  { label: "2020", value: "1" },
  { label: "2021", value: "2" },
  { label: "2022", value: "3" },
];

const DropdownComponent = ({ navigation }) => {
  const [monthsArray, setMonthsArray] = useState(null);
  const [dayArray, setDayArray] = useState(null);
  const [yearArray, setYearArray] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  function nextHandler() {
    navigation.navigate("Phone");
  }

  return (
    <View>
      <View
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingVertical: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontWeight: 700, fontSize: 20 }}>
            What is your date of birth?
          </Text>
        </View>
        <Text style={{ textAlign: "center", fontSize: 16 }}>
          Choose your date of birth. You can always make this private later
        </Text>
        <Text
          style={{
            paddingLeft: 16,
            fontSize: 16,
            color: "grey",
            paddingTop: 16,
          }}
        >
          Date of Birth
        </Text>
        <View style={styles.allcontainer}>
          <View style={styles.container}>
            <Dropdown
              style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={day}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={!isFocus ? "30" : "..."}
              searchPlaceholder="Search..."
              dayArray={dayArray}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={(item) => {
                setDayArray(item.value);
                setIsFocus(false);
              }}
            />
          </View>

          <View style={styles.container}>
            <Dropdown
              style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={months}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={!isFocus ? "July" : "..."}
              searchPlaceholder="Search..."
              monthsArray={monthsArray}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={(item) => {
                setMonthsArray(item.value);
                setIsFocus(false);
              }}
            />
          </View>

          <View style={styles.container}>
            <Dropdown
              style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={year}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={!isFocus ? "2023" : "..."}
              searchPlaceholder="Search..."
              yearArray={yearArray}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={(item) => {
                setYearArray(item.value);
                setIsFocus(false);
              }}
            />
          </View>
        </View>
        <View style={{ marginTop: 85, width: 200, marginBottom: 20 }}>
          <Button onPress={nextHandler} title="Next" rounded />
        </View>
      </View>
      <Footer />
    </View>
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  allcontainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: 10,
  },
  container: {
    // backgroundColor: "white",
    width: 140,
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
