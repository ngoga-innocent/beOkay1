import { View, Text, StyleSheet, Keyboard, Modal, Alert } from "react-native";
import React, { useState, useRef } from "react";
import SignupHeader from "./SignupHeader";
import { COLORS } from "../../components/Colors";
import { userRoute } from "@react-navigation/native";
import Input from "../../components/Input";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import KeyboardWrapper from "../../components/keyboardWrapper";
import Button from "../../components/Button";
import Spinner from "react-native-loading-spinner-overlay/lib";

const Userverification = ({ route, navigation }) => {
  const pin1Ref = useRef(null);
  const pin2Ref = useRef(null);
  const pin3Ref = useRef(null);
  const pin4Ref = useRef(null);

  const [pin1, setPin1] = useState(null);
  const [pin2, setPin2] = useState(null);
  const [pin3, setPin3] = useState(null);
  const [pin4, setPin4] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [email1, setEmail1] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const pin = pin1 + pin2 + pin3 + pin4;
  const email = route.params.email;
  const checkcode = () => {
    navigation.navigate("Login");
  };
  // const checkcode = () => {
  //   setIsLoading(true);
  //   var myHeaders = new Headers();
  //   myHeaders.append("Content-Type", "application/json");

  //   var raw = JSON.stringify({
  //     code: pin,
  //   });

  //   var requestOptions = {
  //     method: "POST",
  //     headers: myHeaders,
  //     body: raw,
  //     redirect: "follow",
  //   };

  //   fetch("https://beok.onrender.com/users/account-activation/", requestOptions)
  //     .then((response) => response.json())
  //     .then((response) => {
  //       const res = response;
  //       if (res.access) {
  //         setIsLoading(false);
  //         navigation.navigate("Login");
  //       } else {
  //         setIsLoading(false);
  //         alert(res.message);
  //       }
  //     })
  //     .catch((error) => console.log("error", error));
  // };
  // const Resend = () => {
  //   setIsLoading(true);
  //   var myHeaders = new Headers();
  //   myHeaders.append("Content-Type", "application/json");
  //   var raw = JSON.stringify({
  //     email: email1,
  //   });
  //   var requestOptions = {
  //     method: "POST",
  //     headers: myHeaders,
  //     body: raw,
  //     redirect: "follow",
  //   };
  //   fetch(
  //     "https://beok.onrender.com/users/resend-verfication-code/",
  //     requestOptions
  //   )
  //     .then((response) => response.json())

  //     .catch((error) => console.log("error", error))
  //     .then((response) => {
  //       const res = response;
  //       setIsLoading(false);
  //       alert(res.message);
  //     });
  // };

  return (
    <KeyboardWrapper>
      <View style={styles.container}>
        <Spinner visible={isLoading} />
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View
                style={{
                  borderWidth: 1,
                  borderRadius: 10,
                  marginBottom: 5,
                  width: 250,
                }}
              >
                <TextInput
                  placeholder="Enter your Email"
                  style={{ height: 40, width: "100%", marginLeft: 4 }}
                  autoComplete={false}
                  value={email1}
                  onChangeText={(email1) => setEmail1(email1)}
                />
              </View>

              <TouchableOpacity
                style={[styles.button, styles.buttonClose]}
                onPress={() => {
                  Resend();
                  setModalVisible(false);
                }}
              >
                <Text style={styles.textStyle}>Resend</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <SignupHeader title="You are" title1="Almost There" />
        <View style={styles.Secondview}>
          <Text style={styles.header}>Verify Your Account </Text>
          <Text style={styles.paragraph}>
            We have sent a verification code to {email} and to{" "}
            {route.params.number}?
          </Text>
          <View style={styles.fulldesign}>
            <View
              style={{ borderWidth: 1, borderColor: "grey", borderRadius: 10 }}
            >
              <TextInput
                style={styles.Box}
                textAlign="center"
                maxLength={1}
                keyboardType="number-pad"
                ref={pin1Ref}
                value={pin1}
                onChangeText={(pin1) => {
                  setPin1(pin1);
                  pin1 !== "" && pin2Ref.current.focus();
                }}
              />
            </View>
            <View
              style={{
                borderWidth: 1,
                borderColor: "grey",
                borderRadius: 10,
                marginLeft: 8,
              }}
            >
              <TextInput
                style={styles.Box}
                textAlign="center"
                maxLength={1}
                keyboardType="number-pad"
                ref={pin2Ref}
                value={pin2}
                onChangeText={(pin2) => {
                  setPin2(pin2);
                  pin2 !== ""
                    ? pin3Ref.current.focus()
                    : pin1Ref.current.focus();
                }}
              />
            </View>
            <View
              style={{
                borderWidth: 1,
                borderColor: "grey",
                borderRadius: 10,
                marginLeft: 8,
              }}
            >
              <TextInput
                style={styles.Box}
                textAlign="center"
                maxLength={1}
                keyboardType="number-pad"
                ref={pin3Ref}
                value={pin3}
                onChangeText={(pin3) => {
                  setPin3(pin3);
                  pin3 !== ""
                    ? pin4Ref.current.focus()
                    : pin2Ref.current.focus();
                }}
              />
            </View>
            <View
              style={{
                borderWidth: 1,
                borderColor: "grey",
                borderRadius: 10,
                marginLeft: 8,
              }}
            >
              <TextInput
                style={styles.Box}
                textAlign="center"
                maxLength={1}
                keyboardType="number-pad"
                ref={pin4Ref}
                value={pin4}
                onChangeText={(pin4) => {
                  setPin4(pin4);
                  pin4 !== "" ? Keyboard.dismiss() : pin3Ref.current.focus();
                }}
              />
            </View>
          </View>
          <Button
            text="Verify"
            style={{
              backgroundColor: COLORS.primary,
              width: "60%",
              height: 40,
              marginTop: 10,
              marginBottom: 10,
              alignSelf: "center",
            }}
            onPress={() => {
              checkcode();
            }}
            style1={{ fontWeight: "bold", color: "white" }}
          />
          <View style={styles.header1}>
            <Text style={styles.paragraph}>Didn't recieve code?</Text>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <Text style={styles.paragraph1}>Resend</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardWrapper>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  fulldesign: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  Secondview: {
    flex: 1,
    backgroundColor: COLORS.white,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  header: {
    marginLeft: 32,
    fontSize: 24,
    color: COLORS.primary,
    marginBottom: 8,
    marginTop: 96,
  },
  header1: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 4,
    flexDirection: "row",
  },
  paragraph: {
    fontSize: 14,
    marginLeft: 32,
    color: COLORS.text,
  },
  paragraph1: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 7,
    color: COLORS.text,
  },
  Box: {
    width: 48,
    height: 48,
    borderRadius: 9,
    marginLeft: 4,
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
export default Userverification;
