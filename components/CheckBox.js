import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { COLORS, width,height } from "./Colors";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
const CustomCheckbox = ({ label }) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={toggleCheckbox}>
      <View>
        {isChecked ? (
          <FontAwesome name="check-square" size={30} color={COLORS.doctor} />
        ) : (
          <FontAwesome name="square-o" size={30} />
          // <View style={[styles.unchecked, styles.checkbox]} />
        )}
      </View>
      <Text style={{marginLeft:width/60}}>{label}</Text>
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
    width: height/50,
    height: height/50,
    borderWidth: 1,
    marginRight: 8,
    borderRadius: height/50,
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
