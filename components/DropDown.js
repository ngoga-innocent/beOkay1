import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  FlatList,
} from "react-native";
import { COLORS, width, height } from "./Colors";
import Entypo from "react-native-vector-icons/Entypo";

const Dropdown = ({ Items, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemSelection = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.dropdownButton} onPress={toggleDropdown}>
        <Text>{selectedItem || placeholder}</Text>
        <Entypo name="chevron-down" size={20} />
      </TouchableOpacity>

      {isOpen && (
        <View style={styles.dropdownList}>
          {Items.map((item, index) => {
            return (
              <TouchableOpacity
                key={index.toString()}
                style={styles.dropdownItem}
                onPress={() => handleItemSelection(item.name)}
              >
                <Text key={item.id}>{item.name}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dropdownButton: {
    padding: 10,
    borderWidth: 1,
    height: height / 18,
    width: "100%",
    alignSelf: "center",
    borderRadius: width / 10,
    marginTop: 10,
    backgroundColor: COLORS.backgrounds,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dropdownList: {
    position: "relative",
    alignSelf: "center",
    width: "70%",
    marginTop: 4,

    backgroundColor: "#FFF",
  },
  dropdownItem: {
    width: "100%",
    height: height / 27,
    justifyContent: "center",
    borderRadius: 10,
    marginBottom: 7,
    borderWidth: 1,
    alignItems: "center",
  },
});

export default Dropdown;
