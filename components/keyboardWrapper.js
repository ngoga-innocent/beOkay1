import {
  KeyboardAvoidingView,
  ScrollView,
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React from "react";
import { COLORS } from "./Colors";

const KeyboardWrapper = ({ children }) => {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <View>{children}</View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});

export default KeyboardWrapper;
