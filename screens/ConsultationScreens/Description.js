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
  Alert,
} from "react-native";
import { React, useState, useEffect } from "react";
import Header from "../../components/Header";
import { COLORS, width, height, BloodGroup } from "../../components/Colors";
import Input from "../../components/Input";
import KeyboardWrapper from "../../components/keyboardWrapper";
import Button from "../../components/Button";
import { useHeaderHeight } from "@react-navigation/elements";
import { ScrollView } from "react-native-gesture-handler";

import AsyncStorage from "@react-native-async-storage/async-storage";
import Url from "../../Url";
import Spinner from "react-native-loading-spinner-overlay/lib";
import Results from "./AIScreen/Results";
import Explanatory from "../../components/Explanatory";
// import DatePicker from "../../components/DatePicker";
import DateInput from "../../components/TypeDate";
import Payment from "../../components/Payment";
// import Url from "../../Url";

const Description = ({ navigation, route }) => {
  const [value, setValue] = useState("");
  // const height = useHeaderHeight();
  const [choice, setChoice] = useState("Myself");
  const [isLoading, setLoading] = useState(false);
  const [results, setResults] = useState("");
  const [prescription, setPrescription] = useState("");
  const [recommended_test, setRecTest] = useState("");
  const [recommendation, setRecommendation] = useState("");
  const [selectedchoice, setSelected] = useState(null);
  const [bloodGroup, setBloodGroup] = useState("");
  const [dependent_name, setDependentName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhone] = useState("");
  const [dateofbirth, setBirth] = useState(new Date());
  const [allergies, setAllergies] = useState("");
  const [address, setAddress] = useState("");
  const name = route.params.name;
  const getResults = async () => {
    setLoading(true);
    const token = await AsyncStorage.getItem("token");
    const id = await AsyncStorage.getItem("id");

    //AI consultation
    if (name === "checkup") {
      var myHeaders = new Headers();
      myHeaders.append("Authorization", `JWT ${token}`);
      myHeaders.append("Content-Type", "application/json");

      if (selectedchoice !== "Myself") {
        var raw = JSON.stringify({
          dependent_names: dependent_name,
          dependent_symptoms: value,
          dependent_blood_group: bloodGroup,
          dependent_alergies: allergies,
          phone_number: phone_number,
          email: email,
          address: address,
          dependent_bithdate: dateofbirth,
        });
      } else {
        var raw = JSON.stringify({
          // patient_username: id,
          pain_area: "Back",
          symptoms: value,
        });
      }

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };
      // console.log(requestOptions);
      await fetch(
        `${Url}/patients/consult-doctor/?choice=${selectedchoice}&type=ai`,
        requestOptions
      )
        .then((response) => {
          if (!response.ok) {
            setLoading(false)
          return response.json()
          } else {
            
            return response.json();
          }
        })
        .then((result) => {
            // console.log(results)
            const ConsultationDetails={
              doctor:result.consultaed_by_doctor,
              type:result.consultation_type,
              area:result.pain_area,
              prescription:result.prescription,
              recommendation:result.recommendation,
              result:result.results
            }
            navigation.navigate("consultation", {
              screen: "payment",
              params:{
                next:'results',
                amount:4000,
                details:ConsultationDetails
              }
            });
            // console.log(ConsultationDetails)
          setLoading(false);
        })
        .catch((error) => {
          console.log("consultation error", error), setLoading(false);
        });
      // navigation.navigate("consultation", {
      //   screen: "Aiconsultation",
      // });
      // setLoading(false);
      // return response.json();
    } else if (name === "chat") {
      navigation.navigate("consultation", {
        screen: "chatting",
      });
    } else if (name === "homecare") {
      navigation.navigate("consultation", { screen: "homeCare" });
    }
    
  };
  const Price = [
    { name: "AI consultation", price: "4$" },
    { name: "Home Care", price: "15$" },
    { name: "Doctor Appointment", price: "24$" },
  ];
  const choices = ["Myself", "friend", "family", "child", "spouse", "other"];
  const handleDateChange = (day, month, year) => {
    // setBirth(date)
    setBirth(`${year}-${month}-${day}`);
    // console.log(`${day1}-${month}-${year}`);
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
          <Explanatory
            title="Consult with Be Okay"
            paragraph="We take care of your health as is variable to you!"
          />
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: COLORS.doctor,
              padding: width / 30,
              borderRadius: width / 30,
              marginTop: width / 20,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 20,
                textDecorationLine: "underline",
                marginBottom: width / 50,
              }}
            >
              Price for Services
            </Text>
            <View style={{}}>
              {Price.map((item, index) => {
                return (
                  <View key={index} style={{ flexDirection: "row" }}>
                    <Text style={{ fontWeight: "bold" }}>{item.name}:</Text>
                    <Text>{item.price}</Text>
                  </View>
                );
              })}
            </View>
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
            <View>
              <Text style={{ alignSelf: "center", fontWeight: "bold" }}>
                Who is taking this consultation?
              </Text>
              <FlatList
                style={{ marginVertical: height / 70 }}
                horizontal
                data={choices}
                renderItem={({ item, index }) => {
                  return (
                    <TouchableOpacity
                      style={{
                        backgroundColor:
                          selectedchoice === item
                            ? COLORS.primary
                            : COLORS.paragraph,
                        marginHorizontal: width / 50,
                        paddingHorizontal: width / 50,
                        borderRadius: width / 50,
                      }}
                      onPress={() => setSelected(item)}
                    >
                      <Text>{item}</Text>
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
            {selectedchoice !== "Myself" && (
              <View>
                <TextInput
                  placeholder="Patient names "
                  style={styles.input1}
                  value={dependent_name}
                  onChangeText={(text) => setDependentName(text)}
                />
                <TextInput
                  placeholder="Patient email "
                  style={styles.input1}
                  value={email}
                  onChangeText={(text) => setEmail(text)}
                />
                <TextInput
                  placeholder="Patient phone Number "
                  style={styles.input1}
                  keyboardType="numeric"
                  value={phone_number}
                  onChangeText={(text) => setPhone(text)}
                />
                <View>
                  <Text
                    style={{ alignSelf: "center", fontWeight: "bold" }}
                  >{`Date of birth `}</Text>
                  <DateInput onChangeDate={handleDateChange} />
                </View>
                <FlatList
                  horizontal
                  data={BloodGroup}
                  style={{ marginVertical: height / 70 }}
                  renderItem={({ item }) => {
                    return (
                      <TouchableOpacity
                        style={{
                          backgroundColor:
                            bloodGroup === item
                              ? COLORS.primary
                              : COLORS.paragraph,
                          marginHorizontal: width / 50,
                          paddingHorizontal: width / 50,
                          borderRadius: width / 50,
                        }}
                        onPress={() => setBloodGroup(item)}
                      >
                        <Text>{item}</Text>
                      </TouchableOpacity>
                    );
                  }}
                />
                <TextInput
                  placeholder="Patient Allergies "
                  style={styles.input1}
                  value={allergies}
                  onChangeText={(text) => setAllergies(text)}
                />
                <TextInput
                  placeholder="Address "
                  style={styles.input1}
                  value={address}
                  onChangeText={(text) => setAddress(text)}
                />
              </View>
            )}
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
  input1: {
    borderColor: COLORS.primary,
    borderWidth: 1,
    maxHeight: height / 17,
    height: height / 17,
    borderRadius: width / 20,
    backgroundColor: COLORS.paragraph,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingHorizontal: width / 30,
    marginTop: height / 50,
  },
  text1: {
    backgroundColor: COLORS.primary,
    marginLeft: 10,
    padding: 10,
    borderRadius: 10,
  },
});

export default Description;
