import React, { useState } from "react";
import { View, Text, TouchableOpacity, Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { width } from "./Colors";

const DateTime = ({ mode }) => {
  const [isTimePickerVisible, setTimePickerVisible] = useState(false);
  const [selectedTime, setSelectedTime] = useState("");

  const showTimePicker = () => {
    setTimePickerVisible(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisible(false);
  };

  const handleTimeChange = (event, time) => {
    if (time) {
      setSelectedTime(time.toLocaleTimeString());
    }
    hideTimePicker();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.inputField} onPress={showTimePicker}>
        <Text>{selectedTime || "Select Time"}</Text>
      </TouchableOpacity>
      {isTimePickerVisible && (
        <DateTimePicker
          value={new Date()}
          mode={mode}
          display="spinner"
          onChange={handleTimeChange}
          style={{ width: width / 3 }}
        />
      )}
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
  },
  inputField: {
    padding: 10,
    paddingLeft: 15,

    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 15,
  },
};
export default DateTime;
