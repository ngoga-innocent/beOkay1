import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  Button,
  FlatList,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from "react-native";
import { COLORS, height, width } from "../../components/Colors";
import Header from "../../components/Header";

const Support = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [containerHeight, setContainerHeight] = useState("100%");

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setContainerHeight("90%"); // Adjust the value as per your requirement
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setContainerHeight("100%");
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const handleSend = () => {
    if (message.trim() === "") {
      return;
    }

    const newMessage = {
      id: messages.length + 1,
      text: message,
    };

    setMessages([...messages, newMessage]);
    setMessage("");
  };

  const renderMessage = ({ item }) => (
    <View style={styles.message}>
      <Text>{item.text}</Text>
    </View>
  );

  return (
    <View style={[styles.container, { height: containerHeight }]}>
      <Header />
      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item) => item.id.toString()}
        style={styles.messageList}
      />
      <KeyboardAvoidingView behavior="position" s>
        <View style={styles.inputContainer}>
          <TextInput
            multiline
            style={styles.input}
            placeholder="Type your message"
            value={message}
            onChangeText={(text) => setMessage(text)}
          />
          <Button title="Send" onPress={handleSend} />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  messageList: {
    flex: 1,
    marginBottom: 16,
    marginTop: 16,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    bottom: 0,
  },
  input: {
    flex: 1,
    marginRight: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: width / 12,
    maxHeight: height / 9,
    bottom: 0,
  },
  message: {
    padding: 8,
    borderWidth: 1,

    borderColor: "#ccc",
    borderRadius: 14,
    marginBottom: 8,
    backgroundColor: COLORS.primary,
    width: "85%",
    alignSelf: "flex-start",
  },
});

export default Support;
