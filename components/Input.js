import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";
import { COLORS } from "./Colors";
import Icon from "react-native-vector-icons/Ionicons";
import { TouchableOpacity } from "react-native-gesture-handler";

const Input = ({
  placeholder,
  onChangeText,
  multiline,
  style,
  onPress,
  style1,
  name,
  name2,
  value,
  secureTextEntry,
  keyboardType,
  numberOfLines,
  ...rest
}) => {
  return (
    <View style={styles.container}>
      <View style={[styles.inputcontainer, style]}>
        <Icon name={name} style={styles.icon} size={20} color={COLORS.text} />
        <TextInput
          style={[styles.input, style1]}
          placeholder={placeholder}
          onChangeText={onChangeText}
          value={value}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          multiline={multiline}
          {...rest}
          numberOfLines={numberOfLines}
        />
        <TouchableOpacity onPress={onPress}>
          <Icon name={name2} style={style1} size={25} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 10,
  },
  input: {
    color: COLORS.text,

    flex: 1,
  },
  inputcontainer: {
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 20,
    borderColor: COLORS.primary,
    width: "90%",
    height: 48,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    paddingHorizontal: 10,
  },
});

export default Input;
