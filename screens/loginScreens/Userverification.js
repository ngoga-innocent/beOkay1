import { View, Text, StyleSheet } from "react-native";
import React,{useState,useRef} from "react";
import SignupHeader from "./SignupHeader";
import { COLORS } from "../../components/Colors";
import { userRoute } from "@react-navigation/native";
import Input from "../../components/Input";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import KeyboardWrapper from "../../components/keyboardWrapper";
import { log } from "react-native-reanimated";

const Userverification = ({ route, navigation }) => {

  const pin1Ref=useRef(null)
  const pin2Ref=useRef(null)
  const pin3Ref=useRef(null)
  const pin4Ref=useRef(null)

  const [pin1,setPin1]=useState(null)
  const [pin2,setPin2]=useState(null)
  const [pin3,setPin3]=useState(null)
  const [pin4,setPin4]=useState(null)
  const checkcode =()=>{
  
    navigation.navigate('Login')
  }
  
  return (
    <KeyboardWrapper>
      <View style={styles.container}>
        <SignupHeader title="You are" title1="Almost There" />
        <View style={styles.Secondview}>
          <Text style={styles.header}>Verify Your Account</Text>
          <Text style={styles.paragraph}>
            We have sent a verification code to {route.params.email} and to{" "}
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
                onChangeText={(pin1)=>{
                  setPin1(pin1);
                  if(pin1Ref!==null) {
                    pin2Ref.current.focus()
                  }
                }}
                
              /></View>
              <View style={{ borderWidth: 1, borderColor: "grey", borderRadius: 10,marginLeft:8 }}>
              <TextInput
                style={styles.Box}
                textAlign="center"
                maxLength={1}
                keyboardType="number-pad"
                ref={pin2Ref}
                value={pin2}
                onChangeText={(pin2)=>{
                  setPin2(pin2);
                  if(pin2Ref!==null) {
                    pin3Ref.current.focus()
                  }
                }}
                
              />
              </View>
              <View style={{ borderWidth: 1, borderColor: "grey", borderRadius: 10,marginLeft:8 }}>
              <TextInput
                style={styles.Box}
                textAlign="center"
                maxLength={1}
                keyboardType="number-pad"
                ref={pin3Ref}
                value={pin3}
                onChangeText={(pin3)=>{
                  setPin3(pin3);
                  if(pin3Ref!==null) {
                    pin4Ref.current.focus()
                  }
                }}
                
              />
              </View>
              <View style={{ borderWidth: 1, borderColor: "grey", borderRadius: 10,marginLeft:8 }}>
              <TextInput
                style={styles.Box}
                textAlign="center"
                maxLength={1}
                keyboardType="number-pad"
                ref={pin4Ref}
                value={pin4}
                onChangeText={(pin1)=>{
                  setPin1(pin1);
                  if(pin4Ref!==null) {
                    checkcode()
                  }
                }}
                
              />
            </View>
          </View >
          <View style={styles.header1}>
            <Text style={styles.paragraph}>Didn't recieve code?</Text>
            <TouchableOpacity>
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
    marginVertical:10
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
    marginTop: 8,
    fontSize: 12,
    marginLeft: 32,
    color: COLORS.text,
  },
  paragraph1: {
    marginTop: 8,
    fontSize: 18,
    marginLeft: 7,
    color: COLORS.text,
  },
  Box: {
    width: 48,
    height: 48,
    borderRadius: 9,
    marginLeft: 4,
  },
});
export default Userverification;
