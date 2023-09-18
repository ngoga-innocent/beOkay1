import { View, Text } from "react-native";
import React,{useState} from "react";
import Input from "../../components/Input";
import { COLORS, height } from "../../components/Colors";
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import Explanatory from "../../components/Explanatory";
import Url from "../../Url";
import Spinner from "react-native-loading-spinner-overlay";

const Forgotpassword = () => {
  const navigation = useNavigation();
  const [email,setEmail]=useState("")
  const [isLoading,setIsLoading]=useState(false)

  const sendOTP=()=>{
    if(email !==''){
      setIsLoading(true)
      console.log(email)
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      var raw = JSON.stringify({
        email: email,
        
      });
      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };
      fetch(`${Url}/users/reset-password/`, requestOptions)
        .then((response) => response.json())

        .catch((error) => console.log("error", error))
        .then((result) => {
          if(result.message){
            setIsLoading(false)
            return navigation.navigate("Auth",{screen:"passwordReset",params:{email:email}})
          }
          else{
            setIsLoading(false)
            return alert('email does not exists')
          }
        })
    }
    else{
      return alert("fill in your email")
    }

  }
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Spinner visible={isLoading} color={COLORS.primary}/>
      <Explanatory
        title="Reset Password"
        paragraph="Enter your email to reset password"
      />
      <Text
        style={{
          color: COLORS.primary,
          fontWeight: "bold",
          marginTop: height / 30,
        }}
      >
        Forgot Password
      </Text>
      <Input placeholder="Enter Email" value={email} onChangeText={(text)=>setEmail(text)} />
      <Button
        text="Reset Password"
        style={{ marginTop: height / 30, backgroundColor: COLORS.primary }}
        onPress={() => sendOTP()}
      />
    </View>
  );
};

export default Forgotpassword;
