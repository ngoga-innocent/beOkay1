import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Avatar } from "react-native-elements";
import { COLORS, height, width } from "../../components/Colors";
import AntiDesign from "react-native-vector-icons/AntDesign";
import { FlatList } from "react-native-gesture-handler";

const Dashboard = () => {
  const [name, setName] = useState("Jessica");
  const [joinCall, setJoin] = useState(false);
  const consultations = [
    {
      Image: require("../../assets/cuate.png"),
      fname: "Michael",
      sname: "Simpson",
      time: "4:4pm",
      date: "dEC 7",
    },
    {
      Image: require("../../assets/amico.png"),
      fname: "Michael",
      sname: "Simpson",
      time: "4:4pm",
      date: "dEC 7",
    },
    {
      Image: require("../../assets/amico.png"),
      fname: "Michael",
      sname: "Simpson",
      time: "4:4pm",
      date: "dEC 7",
    },
    {
      Image: require("../../assets/amico.png"),
      fname: "Michael",
      sname: "Simpson",
      time: "4:4pm",
      date: "dEC 7",
    },
  ];
  return (
    <SafeAreaView style={{ paddingHorizontal: width / 15 }}></SafeAreaView>
  );
};
const styles = StyleSheet.create({
  text: {
    color: COLORS.white,
    fontWeight: "bold",
  },
});
export default Dashboard;
