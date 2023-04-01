import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import PaymentHeader from "./PaymentHeader";
import PhoneInput from "react-native-phone-number-input";
import Colors from "../components/Colors";

const Payment = () => {
  const [phonenumber, setPhoneNumber] = useState("");
  const [activepy, setActivepy] = useState("momo");
  const navigation = useNavigation();
  const Change = (item) => {
    setActivepy(item.click);
    console.log(activepy);
  };
  const SavedNumber = [
    {
      image: require("../assets/Mtn.png"),
      agency: "MTN",
      number: "+250782214360",
    },
    {
      image: require("../assets/Mtn.png"),
      agency: "MTN",
      number: "+250782214360",
    },
    {
      image: require("../assets/Airtel.png"),
      agency: "Airtel",
      number: "+250737865431",
    },
  ];

  const Type = [
    {
      title: "Mobile Money",
      click: "momo",
      screen: "momo",
    },
    {
      title: "Debit/Credit card",
      click: "card",
      screen: "card",
    },
    {
      title: "paypal",
      click: "paypal",
      screen: "paypal",
    },
  ];
  return (
    <SafeAreaView style={{ margin: 30 }}>
      <FlatList
        data={Type}
        renderItem={({ item }) => (
          <View style={{ flex: 1, paddingTop: 40 }}>
            <TouchableOpacity
              onPress={() => Change(item)}
              style={{ padding: 7 }}
            >
              {item.active ? (
                <Text
                  style={{
                    paddingBottom: 5,
                    fontWeight: "500",
                    lineHeight: 14,
                    textDecorationLine: "underline",
                  }}
                >
                  {item.title}
                </Text>
              ) : (
                <Text
                  style={{
                    paddingHorizontal: 15,
                    fontWeight: "500",
                    lineHeight: 14,
                  }}
                >
                  {item.title}
                </Text>
              )}
            </TouchableOpacity>
          </View>
        )}
        horizontal
      />
      
      <View style={{}}>
        <Text style={{ fontWeight: "100", fontSize: 15 }}>Saved Number</Text>
        <FlatList
          style={{ marginBottom: 25 }}
          data={SavedNumber}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{ flexDirection: "row", alignItems: "center", padding: 4 }}
            >
              <Image source={item.image} style={{ width: 30, height: 25 }} />
              <View style={{ marginLeft: 12 }}>
                <Text style={{ fontWeight: "bold", fontSize: 17 }}>
                  {item.agency}
                </Text>
                <Text
                  style={{
                    fontWeight: "100",
                    fontSize: 13,
                    fontStyle: "normal",
                  }}
                >
                  {item.number}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
      <View>
        <Text style={{ fontWeight: "200", marginBottom: 5 }}>
          New Payment Method
        </Text>
        <PhoneInput
          defaultValue={phonenumber}
          defaultCode="RW"
          containerStyle={{
            borderColor: "#525DC2",
            borderWidth: 2,
            borderRadius: 7,
          }}
          textContainerStyle={{}}
          onChangeFormattedText={() => setPhoneNumber(text)}
        />
      </View>

      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text>Cards payment</Text>
      </View>
      <View
        style={{ border: 1, width: "80%", height: 2, borderColor: "black" }}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 20,
        }}
      >
        <Text style={{ fontSize: 19 }}>Price</Text>
        <Text style={{ fontWeight: "bold", fontSize: 19 }}>20,000 Rwf</Text>
      </View>
      <TouchableOpacity
      onPress={()=>navigation.navigate('Results')}
        style={{
          marginVertical: 30,
          backgroundColor: "#93BD67",
          borderRadius: 20,
          height: 40,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white", fontWeight: "600", fontSize: 17 }}>
          Pay
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Payment;
