import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import Header from "../../components/Header";
import { COLORS, height, width } from "../../components/Colors";

import { TouchableOpacity } from "react-native-gesture-handler";

import * as DocumentPicker from "expo-document-picker";
import { useNavigation } from "@react-navigation/native";

const HomeCare = () => {
  const [document, setDocument] = useState(null);
  const navigation = useNavigation();
  const handleFileSelect = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: "application/pdf", // Specify the file types to be picked (PDF in this case)
      });
      // console.log(result);
      if (!result.canceled) {
        console.log(result);
        // Handle the selected file here, e.g., send it to the server or perform any necessary operations
        setDocument(result.assets[0].name);
      } else {
        console.log("Document picker cancelled");
      }
    } catch (err) {
      console.log("Error:", err);
    }
  };

  const Inputs = ({ name, keyboardType, value, onChangeText, style1 }) => {
    return (
      <View
        style={{
          marginTop: 10,
          paddingLeft: width / 20,
        }}
      >
        <Text style={{ fontWeight: "bold" }}>{name}</Text>
        <TextInput
          keyboardType={keyboardType}
          value={value}
          onChangeText={onChangeText}
          multiline
          style={[
            style1,
            {
              borderWidth: 1,
              marginTop: 10,
              borderRadius: width / 20,
              paddingHorizontal: width / 20,
              width: "90%",
            },
          ]}
        />
      </View>
    );
  };
  return (
    <ScrollView>
      <Header />
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : null}
        keyboardVerticalOffset={60}
      >
        <View style={{ paddingHorizontal: width / 30, marginTop: height / 80 }}>
          <View style={{ alignSelf: "center", width: "90%" }}>
            <Text
              style={{
                fontWeight: "bold",

                marginBottom: 10,
              }}
            >
              Add related Medica Docs
            </Text>
            <TouchableOpacity
              onPress={() => handleFileSelect()}
              style={{
                backgroundColor: COLORS.backgrounds,
                height: height / 20,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: width / 40,
                width: "100%",
              }}
            >
              <Text>Choose</Text>
            </TouchableOpacity>
            {document !== null && <Text>{document}</Text>}
          </View>
          <Inputs name="Location" style1={{ height: height / 20 }} />
          <Inputs name="Contact Address" style1={{ height: height / 20 }} />
          {/* <View>
          <DatePicker
            style={{ width: 200 }}
            date={selectedDate}
            mode="date"
            placeholder="Select date"
            format="YYYY-MM-DD"
            minDate="1900-01-01"
            maxDate="2100-12-31"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                position: "absolute",
                left: 0,
                top: 4,
                marginLeft: 0,
              },
              dateInput: {
                marginLeft: 36,
              },
            }}
            onDateChange={(date) => setSelectedDate(date)}
          />
        </View> */}

          <Inputs name="Other Comment" style1={{ maxHeight: 80, height: 80 }} />
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("consultation", {
                screen: "payment",
                params: { next: "homecare" },
              })
            }
            style={{
              height: height / 20,
              backgroundColor: COLORS.primary,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: width / 20,
              width: "90%",
              alignSelf: "center",

              marginTop: 20,
            }}
          >
            <Text style={{ color: COLORS.white, fontWeight: "bold" }}>
              Proceed To Payment
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default HomeCare;
