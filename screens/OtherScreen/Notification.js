import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { width, height, COLORS } from "../../components/Colors";

const Notification = () => {
  const [Notifications, setNotifications] = useState([
    { id: 1, text: "Your medication report has been Generated" },
    { id: 2, text: "Welcome on Boarding" },
    { id: 3, text: "Appointment Schedule has been Cancelled" },
    { id: 4, text: "Today is the appointment date" },
    { id: 5, text: "You have a new message " },
  ]);

  handleReadNotification = (itemId) => {
    const updateNotification = Notifications.filter(
      (notification) => notification.id !== itemId
    );
    setNotifications(updateNotification);
  };
  const HeaderComponent = () => {
    return (
      <View
        style={{
          // backgroundColor: COLORS.primary,
          height: height / 10,
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: width / 20,
          justifyContent: "space-between",
        }}
      >
        <Text style={{ color: COLORS.white, fontWeight: "bold", fontSize: 20 }}>
          Notifications
        </Text>
      </View>
    );
  };
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <HeaderComponent />
      <ScrollView
        style={{
          backgroundColor: COLORS.white,
          borderTopLeftRadius: width / 10,
          borderTopRightRadius: width / 10,
          paddingHorizontal: width / 20,
          paddingTop: height / 40,
        }}
      >
        {Notifications.map((item, index) => {
          return (
            <TouchableOpacity
              onPress={() => handleReadNotification(item.id)}
              key={index}
              style={{
                padding: width / 20,
                backgroundColor: COLORS.backgrounds,
                marginBottom: height / 80,
                borderRadius: width / 30,
              }}
            >
              <Text>{item.text}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Notification;
