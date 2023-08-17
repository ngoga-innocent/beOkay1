import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  Image,
  Dimensions,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import { React, useState } from "react";
import { COLORS, width, height } from "../../components/Colors";
import SignupHeader from "../loginScreens/SignupHeader";
import Input from "../../components/Input";
import Button from "../../components/Button";

import axios from "axios";
import Spinner from "react-native-loading-spinner-overlay/lib";
import url from "../../Url";
import { ScrollView } from "react-native-gesture-handler";
import { Avatar } from "react-native-elements";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Dropdown from "../../components/DropDown";
import CustomCheckbox from "../../components/CheckBox";
// import DocumentPicker from "react-native-document-picker";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import * as DocumentPicker from "expo-document-picker";
const Docprofile = ({ route }) => {
  const navigation = useNavigation();
  const width = Dimensions.get("screen").width,
    height = Dimensions.get("screen").height;
  const [result, setResult] = useState([]);
  const [error, setError] = useState();
  const [fullName, setFullName] = useState("");
  const [Email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [checkmail, setCheckMail] = useState(false);
  const [secureText, setSecureText] = useState(true);
  const [usembl, setUsembl] = useState(false);
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [Profile, setProfile] = useState(null);
  const [Document, setDocument] = useState(null);
  const Status = [
    { id: 1, name: "Nurse" },
    { id: 1, name: "Doctor" },
  ];
  const Specialization = [
    { id: 1, name: "Eye" },
    { id: 1, name: "Nose" },
    { id: 1, name: "Ear" },
    { id: 1, name: "None" },
  ];

  const call_api = () => {
    navigation.navigate("Docverification", {
      email: Email,
      number: number,
    });

    // setIsLoading(true);
    // if (Signupbtn()) {
    //   var myHeaders = new Headers();
    //   myHeaders.append("Content-Type", "application/json");

    //   var raw = JSON.stringify({
    //     full_name: fullName,
    //     username: username,
    //     email: Email,
    //     phone_number: number,
    //     password: password,
    //     user_type: "patient",
    //   });

    //   var requestOptions = {
    //     method: "POST",
    //     headers: myHeaders,
    //     body: raw,
    //     redirect: "follow",
    //   };

    //   fetch(`${url}/users/`, requestOptions)
    //     .then((response) => response.text())
    //     .then((result) => {
    //       console.log(result);
    //       if (result.includes("message")) {
    //         setIsLoading(false);
    //         navigation.navigate("Userverification", {
    //           email: Email,
    //           number: number,
    //         });
    //       } else {
    //         if (result.includes("email")) {
    //           setIsLoading(false);
    //           alert("user With this email already exists");
    //         } else {
    //           setIsLoading(false);
    //           alert("User with this phone number already exists");
    //         }
    //       }
    //     })
    //     .catch((error) => console.log("error", error));
    // } else {
    //   setIsLoading(false);
    //   alert("there is errors in your inputs");
    // }
  };
  const ProfilePicker = async () => {
    try {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Permission denied!");
        }
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [3, 3],
          quality: 1,
        });

        if (!result.canceled) {
          // console.log(result.assets[0].uri);
          setProfile(result.assets[0].uri);
        } else {
          console.log("canceled");
        }
      }
    } catch (err) {
      console.log("Error:", err);
    }
  };
  const handleFileSelect = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: "application/pdf", // Specify the file types to be picked (PDF in this case)
      });
      // console.log(result);
      if (!result.canceled) {
        // Handle the selected file here, e.g., send it to the server or perform any necessary operations
        setDocument(result.assets[0].name);
      } else {
        console.log("Document picker cancelled");
      }
    } catch (err) {
      console.log("Error:", err);
    }
  };

  return (
    <KeyboardAvoidingView
      enabled
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      keyboardVerticalOffset={Platform.OS === "ios" ? 70 : 0}
      style={{ flex: 1 }}
    >
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Spinner visible={isLoading} />
        {/* <View
          style={{
            marginTop: width / 8,
            marginBottom: -width / 3,
            flexDirection: "row",
            alignItems: "center",
            marginLeft: width / 16,
          }}
        >
          <Image
            source={require("../../assets/logo2.png")}
            style={{ width: width / 10, height: height / 18 }}
          />
          <Text style={{ fontSize: 17, fontWeight: "600", color: "white" }}>
            Be Okay
          </Text>
        </View> */}
        <SignupHeader
          marginTop="1%"
          title="Complete Profile"
          paragraph="Please take few minutes to complete your Profile"
          style={{ marginBottom: -height / 30 }}
          style2={{ marginBottom: height / 23 }}
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
            marginBottom: height / 40,
            height: height / 10,
            width: "90%",
            alignSelf: "center",
            backgroundColor: COLORS.white,
            borderRadius: width / 17,
            ...Platform.select({
              ios: {
                shadowColor: "#000000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.3,
                shadowRadius: 4,
              },
              android: {
                elevation: 4,
              },
            }),
            marginTop: -height / 28,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <Avatar
              source={
                Profile == null
                  ? require("../../assets/Ellipse15.png")
                  : { uri: Profile }
              }
              size="large"
              rounded
            />
            {/* <Avatar source={Profile["uri"]} size="medium" /> */}
            <Text
              style={{
                marginLeft: width / 17,
                fontSize: 18,
                fontWeight: "700",
              }}
            >
              James Karangwa
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => ProfilePicker()}
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <EvilIcons name="pencil" size={18} />
            <Text style={{ fontSize: 14 }}>Edit</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.SecondView}>
          <View style={styles.inner}>
            <Input
              multiline
              placeholder="Short Bio"
              numberOfLines={4}
              style={{
                height: height / 14,
                width: "100%",
                maxHeight: height / 10,
              }}
            />
            <Dropdown Items={Status} placeholder="status" />
            <Dropdown Items={Specialization} placeholder="Specialisations" />
            <View style={{ marginTop: 12 }}>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                Consultation Availability
              </Text>
              <View style={{ flexDirection: "row", marginTop: 10 }}>
                <CustomCheckbox label="Physical" />
                <CustomCheckbox label="Virtual" />
              </View>
            </View>
            <View
              style={{
                backgroundColor: COLORS.backgrounds,
                marginTop: 32,
                borderRadius: 8,
                overflow: "visible",
              }}
            >
              <View
                style={{
                  width: width / 2,
                  height: height / 18,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 20,
                  borderWidth: 1,
                  borderColor: COLORS.paragraph,
                  marginTop: -20,
                  marginLeft: 20,
                  backgroundColor: COLORS.white,
                }}
              >
                <Text>Verification Details</Text>
              </View>
              <Input
                placeholder="License Number"
                style={{ width: "90%", backgroundColor: COLORS.white }}
                style1={{}}
              />
              <TouchableOpacity
                onPress={handleFileSelect}
                style={{
                  width: "90%",
                  height: height / 18,
                  backgroundColor: COLORS.white,
                  borderRadius: 20,
                  marginBottom: 20,
                  justifyContent: "center",
                  borderWidth: 1,
                  borderColor: COLORS.primary,
                  alignSelf: "center",
                  marginTop: 8,
                }}
              >
                <Text style={{ color: COLORS.paragraph, marginLeft: 25 }}>
                  {Document == null ? "Upload Equivalent Document" : Document}
                </Text>
              </TouchableOpacity>
            </View>
            <Button
              text="Save and Continue"
              style={{
                backgroundColor: COLORS.doctor,
                height: height / 19,
                width: width - 40,
                marginBottom: 30,
                marginTop: 20,
                alignSelf: "center",
              }}
              onPress={() =>
                navigation.navigate("allTab", { screen: "docTab" })
              }
            />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Docprofile;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: COLORS.doctor,
  },
  SecondView: {
    flex: 1,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  inner: {
    marginHorizontal: 32,
  },
  Signup: {
    color: "#000000",
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 20,
  },
  text: {
    color: COLORS.text,
  },
  login: {
    color: COLORS.text,
  },
  loginbtn: {
    color: COLORS.doctor,
    fontSize: 20,
  },
  haveacc: {
    flexDirection: "row",
  },
  Button: {
    backgroundColor: COLORS.doctor,
    height: 40,
    marginTop: 16,
    alignSelf: "center",
  },
  usembl: {
    alignItems: "center",
    justifyContent: "center",
    fontSize: 17,
    backgroundColor: "white",
    flexDirection: "row",
  },
  usembl1: {
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 2,
    fontSize: 17,
  },
});
