import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { width } from "./Colors";

function DatePicker({ style1, date }) {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setSelectedDate(date);
    hideDatePicker();
  };

  return (
    <View
      style={{
        width: width / 2,
        justifyContent: "flex-end",
        alignItems: "flex-start",
        marginLeft: -width / 5,
      }}
    >
      {/* <Button title="Select Date" onPress={showDatePicker} /> */}

      <DateTimePicker
        value={date}
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        style={[
          {
            width: width,
            justifyContent: "flex-end",
            alignSelf: "flex-end",
            alignItems: "center",
          },
          style1,
        ]}
      />

      {/* {selectedDate && (
        <Text style={{ color: "black" }}>{selectedDate.toDateString()}</Text>
      )} */}
    </View>
  );
}

export default DatePicker;
