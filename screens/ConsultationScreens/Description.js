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
import AsyncStorage from "@react-native-async-storage/async-storage";
import Url from "../../Url";
import Spinner from "react-native-loading-spinner-overlay/lib";

const Description = ({ navigation, route }) => {
  const [value, setValue] = useState("");
  const height = useHeaderHeight();
  const [choice, setChoice] = useState("Myself");
  const [isLoading, setLoading] = useState(false);

  const getResults = async () => {
    // const JWT = await AsyncStorage.getItem("token");
    setLoading(true);
    const JWT =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjg2MzIwMTI2LCJpYXQiOjE2ODYyMzM3MjYsImp0aSI6IjA5Y2Y1MjI5YzkyNjQ0NWViYjI3OTExYjE3NTRjZTJhIiwidXNlcl9pZCI6Ijg4NTY2MjZlLWRlMTUtNGE0Zi04NmVlLWZmYmE3N2NkZmZhZCIsInVzZXJuYW1lIjoiU29waG9uaWUiLCJmdWxsX25hbWUiOiJCZW5qYW1pbiBOZ2Frb3V0b3UiLCJlbWFpbCI6InNvcGhvLm5nYWtAZ21haWwuY29tZWVlZWUiLCJwaG9uZV9udW1iZXIiOiIrMjUwNzg4ODg4IiwiYWRkcmVzcyI6bnVsbCwidXNlcl90eXBlIjoicGF0aWVudCJ9.bkQWCdWJdDBaOewcNHbsDfNaUDzPiuS1yWpG41bCp4I";

    console.log(JWT);
    console.log(value);
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "JWT " + `${JWT}`);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      symptoms: value,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`${Url}/patients/consult-doctor/?choice=Myself`, requestOptions)
      .then((response) => {
        if (response.ok) {
          navigation.navigate("Method");
          setLoading(false);
          return response.json();
        } else {
          setLoading(false);
          return response.json();
        }
      })
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  return (
    // <KeyboardWrapper>
    <KeyboardAvoidingView
      enabled
      behavior={Platform.OS == "ios" ? "position" : null}
      // keyboardVerticalOffset={height}
    >
      <Spinner visible={isLoading} />
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
              onPress={() => getResults()}
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
