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
} from "react-native";
import { React, useState } from "react";
import Header from "../../components/Header";
import { COLORS } from "../../components/Colors";
import Input from "../../components/Input";
import KeyboardWrapper from "../../components/keyboardWrapper";
import Button from "../../components/Button";
import { useHeaderHeight } from "@react-navigation/elements";

const Description = ({ navigation, route }) => {
  const [value, setValue] = useState("");
  const height = useHeaderHeight();
  const ChangeDesc = (value) => {
    setValue(value);
  };

  return (
    <KeyboardWrapper>
      {/* <KeyboardAvoidingView
        enabled
        behavior="padding"
        keyboardVerticalOffset={height}
      > */}
      <View>
        <Header />
        <View style={{ marginLeft: 16, marginTop: 16 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>
            Consult with Be Okay
          </Text>
          <Text style={{ maxWidth: 180, color: "#BDBDBD", fontSize: 15 }}>
            We take care of your health as is variable to you!
          </Text>
        </View>
        <View
          style={{
            marginHorizontal: 8,
            marginTop: 48,
            height: 98,
            alignItems: "center",
            backgroundColor: COLORS.white,
          }}
        >
          <Text>Adress your Consultation</Text>
          <Text style={styles.text}>{route.params.part}</Text>
        </View>
        <View style={{ marginHorizontal: 30 }}>
          <Text>Please select</Text>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 6,
            }}
          >
            <Image source={require("../../assets/lungs.png")} />
            <Text style={{ marginLeft: 10 }}>Lungs</Text>
          </TouchableOpacity>
          <View>
            <Text style={{ marginBottom: 5 }}>Describe Illiness</Text>
            <TextInput
              autoCorrect={false}
              multiline
              numberOfLines={7}
              style={{
                borderRadius: 5,
                backgroundColor: COLORS.paragraph,
                height: 200,
                marginLeft: 4,
                paddingLeft: 10,
                paddingTop: 3,
                textAlignVertical: "top",
                borderRadius: 10,
              }}
              onChangeText={(value) => ChangeDesc(value)}
              value={value}
            />
          </View>
          <Button
            text="Next"
            onPress={() => navigation.navigate("Method", { desc: value })}
            style={{
              backgroundColor: COLORS.primary,
              height: 50,
              marginTop: 10,
              marginBottom: 10,
              width: "100%",
            }}
          />
        </View>
      </View>
    </KeyboardWrapper>
  );
};
const styles = StyleSheet.create({
  list: {
    marginTop: 7,
  },
  text: {
    color: COLORS.white,

    marginLeft: 10,
    marginTop: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: COLORS.primary,
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
