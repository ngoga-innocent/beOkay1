import React, { useState } from "react";
import { View, Text, TouchableOpacity, Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { COLORS, width } from "./Colors";

const DateTime = ({ mode,date }) => {
  const [isTimePickerVisible, setTimePickerVisible] = useState(false);
  const [selectedTime, setSelectedTime] = useState("");

  const showTimePicker = () => {
    setTimePickerVisible(!isTimePickerVisible);
  };

  const hideTimePicker = () => {
    setTimePickerVisible(false);
  };

  const handleTimeChange = (event, time) => {
    if (time) {
      setSelectedTime(time.toLocaleTimeString());
      // console.log(time.toISOstring())
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
          value={date}
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
    backgroundColor: COLORS.backgrounds,
  },
};
export default DateTime;
