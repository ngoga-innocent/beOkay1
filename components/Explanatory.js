import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import { height, width, COLORS } from "./Colors";

const Explanatory = ({ title, paragraph }) => {
  const [showModal, setShowModal] = useState(true);

  return (
    <View style={styles.modal}>
      <View style={styles.modalheader}>
        <Text
          style={{
            color: "#809502",
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          {title}
        </Text>
        <TouchableOpacity onPress={() => setShowModal(!showModal)}>
          <Entypo name="circle-with-cross" color={COLORS.primary} size={24} />
        </TouchableOpacity>
      </View>

      <Text style={{ fontSize: 14, color: "#809502", marginHorizontal: 4 }}>
        {paragraph}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  modal: {
    marginHorizontal: width / 30,
    paddingVertical: height / 50,
    paddingHorizontal: width / 40,
    backgroundColor: "#FFF6C5",
    borderRadius: width / 30,
    marginTop: height / 50,
  },
  modalheader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 4,
    alignItems: "center",
  },
});
export default Explanatory;
