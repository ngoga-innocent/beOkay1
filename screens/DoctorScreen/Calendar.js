import React from "react";
import { View, Text } from "react-native";
import { Calendar } from "react-native-calendars";

class CalendarScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Calendar
          // Initial selected dates
          selected={[new Date().toISOString().split("T")[0]]}
          // Disable specific dates
          disabledDates={["2023-06-01", "2023-06-02"]}
          // Customize the header
          renderHeader={(date) => {
            /* Your custom header component */
            return <Text>{date.toString()}</Text>;
          }}
          // Define event dates
          markedDates={{
            "2023-06-05": { marked: true },
            "2023-06-10": { marked: true, dotColor: "red" },
            "2023-06-15": { marked: true, dotColor: "blue", activeOpacity: 0 },
          }}
        />
      </View>
    );
  }
}

export default CalendarScreen;
