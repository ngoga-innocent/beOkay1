import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Image,
  TextInput,
  KeyboardAvoidingView,
  useWindowDimensions,
  Platform,
} from "react-native";
import { React, useState } from "react";
import Header from "../../components/Header";
import { COLORS } from "../../components/Colors";
import Input from "../../components/Input";
import KeyboardWrapper from "../../components/keyboardWrapper";
import Button from "../../components/Button";
import { useHeaderHeight } from "@react-navigation/elements";
import { ScrollView } from "react-native-gesture-handler";
import { Colors } from "react-native/Libraries/NewAppScreen";

const Description = ({ navigation, route }) => {
  const [value, setValue] = useState("");
  const height = useHeaderHeight();

  return (
    // <KeyboardWrapper>
    <KeyboardAvoidingView
      enabled
      behavior={Platform.OS == "ios" ? "position" : null}
      // keyboardVerticalOffset={height}
    >
      <ScrollView>
        <Header />
        <View style={{ marginHorizontal: "2%" }}>
          <View style={{ marginTop: 16 }}>
            <Text
              style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}
            >
              Consult with Be Okay
            </Text>
            <Text
              style={{
                maxWidth: 180,
                color: "#7E7E7E",

                fontSize: 15,
                fontWeight: "400",
              }}
            >
              We take care of your health as is variable to you!
            </Text>
          </View>
          <View
            style={{
              marginTop: 48,
              height: 98,
              alignItems: "center",
            }}
          >
            <Text style={{ marginBottom: 14, fontWeight: "bold" }}>
              Address your Consultation
            </Text>
            <View style={styles.textCover}>
              <Text style={styles.text}>{route.params.part}</Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "white",
              paddingHorizontal: 10,
              paddingVertical: 20,
              justifyContent: "center",
              borderTopEndRadius: 10,
              borderTopLeftRadius: 10,
            }}
          >
            <View style={{ marginLeft: "7%" }}>
              <Text style={{ marginBottom: 20, fontWeight: "bold" }}>
                Please select
              </Text>
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginBottom: 6,
                }}
              >
                <Image source={require("../../assets/lungs.png")} />
                <Text
                  style={{ marginLeft: 10, fontSize: 18, fontWeight: "700" }}
                >
                  Lungs
                </Text>
              </TouchableOpacity>
            </View>

            <View>
              <Text
                style={{
                  marginBottom: 5,
                  marginLeft: "7%",
                  fontWeight: "bold",
                }}
              >
                Describe illness
              </Text>
              <TextInput
                autoCorrect={false}
                multiline
                style={{
                  borderRadius: 5,
                  backgroundColor: COLORS.paragraph,
                  height: 100,

                  paddingTop: 6,
                  textAlignVertical: "top",
                  borderRadius: 10,
                  marginLeft: 5,
                  paddingLeft: 4,
                }}
                onChangeText={(text) => setValue(text)}
                value={value}
              />
            </View>
            <Button
              text="Next"
              onPress={() => navigation.navigate("Method", { desc: value })}
              style={{
                backgroundColor: COLORS.primary,
                height: 50,
                marginTop: 20,
                marginBottom: 10,
                width: "100%",

                alignSelf: "center",
              }}
              style1={{ color: "white", fontWeight: "bold" }}
            />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  list: {
    marginTop: 7,
  },
  text: {
    color: COLORS.white,
    fontWeight: "bold",
    padding: 10,
  },
  textCover: {
    borderRadius: 40,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
    width: "40%",
  },
  input: {
    borderColor: COLORS.primary,
    borderWidth: 1,
    maxHeight: 70,
    borderRadius: 20,
    backgroundColor: COLORS.paragraph,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  text1: {
    backgroundColor: COLORS.primary,
    marginLeft: 10,
    padding: 10,
    borderRadius: 10,
  },
});

export default Description;
