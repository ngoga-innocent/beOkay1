import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { COLORS } from "./Colors";
const CustomCheckbox = ({ label }) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={toggleCheckbox}>
      <View
        style={[styles.checkbox, isChecked ? styles.checked : styles.unchecked]}
      />
      <Text>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 17,
  },
  checkbox: {
    width: 30,
    height: 30,
    borderWidth: 1,
    marginRight: 8,
    borderRadius: 6,
  },
  checked: {
    borderColor: "#000",
    backgroundColor: COLORS.doctor,
  },
  unchecked: {
    borderColor: "#000",
    backgroundColor: "transparent",
  },
});

export default CustomCheckbox;
