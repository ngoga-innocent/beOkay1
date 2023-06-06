import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Button from "./Button";
import { COLORS, height } from "./Colors";

const HeaderTab = ({ onPress1, onPress2, title1, title2, style1, style2 }) => {
  return (
    <View style={{ marginTop: 20, flexDirection: "row" }}>
      <Button
        onPress={onPress1}
        text={title1}
        style={[
          {
            height: height / 20,
          },
          style1,
        ]}
        style1={{ fontSize: 15 }}
      />
      <Button
        onPress={onPress2}
        text={title2}
        style={[
          {
            height: height / 20,
          },
          style2,
        ]}
        style1={{ fontSize: 15 }}
      />
    </View>
  );
};
export default HeaderTab;
