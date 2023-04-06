import React, { Component } from "react";
import { View, Text,StatusBar } from "react-native";

const User = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <StatusBar hidden />
      <Text
        style={{
          color: "white",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        
        User Page
      </Text>
    </View>
  );
};
export default User;
