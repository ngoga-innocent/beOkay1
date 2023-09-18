import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
  TextInput,
  useWindowDimensions,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import PaymentHeader from "./PaymentHeader";
import PhoneInput from "react-native-phone-number-input";
import Colors, { COLORS, height, width } from "../components/Colors";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { CheckLogin } from "./CheckLogin";
import Url from "../Url";
const Payment = ({ route }) => {
  const [activepy, setActivepy] = useState("momo");
  const navigation = useNavigation();
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [phonenumber, setPhoneNumber] = useState("");
  // const [amount,setAmount]=useState()
  // console.log(route.params)
  const next = route.params?.next || "";
  const amount = route.params?.amount;
  const details = route.params?.details;
  const [routes] = useState([
    { key: "momo", title: "Mobile Money" },
    { key: "card", title: " Card" },
    { key: "paypal", title: "Paypal" },
  ]);
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
  const nextPage = async () => {
    const checkToken = await CheckLogin();
    // console.log(details);
    if (checkToken.logged && phonenumber !=='') {
      var myHeaders = new Headers();
      myHeaders.append("Authorization", `JWT ${checkToken.token} `);
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        phone_number: phonenumber,
        amount: amount,
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch(`${Url}/patients/payment/`, requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
    }

    if (next === "success") {
      navigation.navigate("success");
    } else {
      navigation.navigate("consultation", {
        screen: "Results",
        params: {
          details: details,
        },
      });
    }
  };
  const Momo = () => {
    return (
      <View style={{ marginLeft: 20, marginTop: 10 }}>
        <Text style={{ fontWeight: "100", fontSize: 15 }}>Saved Number</Text>
        <FlatList
          style={{ marginBottom: 25 }}
          data={SavedNumber}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => setPhoneNumber(item.number)}
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

        <Text style={{ fontWeight: "200", marginBottom: 5 }}>
          New Payment Method
        </Text>
        {/* <PhoneInput
          value={phonenumber}
          defaultCode="RW"
          containerStyle={{
            borderColor: "#525DC2",
            borderWidth: 2,
            // borderRadius: 7,
          }}
          textContainerStyle={{}}
          onChangeFormattedText={(text) => setPhoneNumber(text)}
        /> */}
        <TextInput
          value={phonenumber}
          onChangeText={(text) => setPhoneNumber(text)}
          style={{
            borderColor: COLORS.primary,
            borderWidth: 1,
            width: "90%",
            paddingVertical: height / 90,
            borderRadius: width / 20,
            paddingHorizontal: width / 60,
          }}
        />
      </View>
    );
  };
  const Card = () => {
    return (
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text>card Payment</Text>
      </View>
    );
  };

  const Paypal = () => {
    return (
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text>Paypal Payment</Text>
      </View>
    );
  };
  const renderScene = ({ route }) => {
    switch (route.key) {
      case "momo":
        return <Momo />;
      case "card":
        return <Card />;
      case "paypal":
        return <Paypal />;
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={{ marginTop: 30, height: "70%" }}>
      {/* <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={(props) => (
          <TabBar
            labelStyle={{ color: "black", textTransform: "capitalize" }}
            tabStyle={{
              backgroundColor: "#f5fcf7",
              height: layout.height / 13,
              zIndex: 4,
            }}
            {...props}
            indicatorStyle={{ color: "red" }}
            activeColor="purple"
          />
        )}
      /> */}
      {/* <Momo /> */}
      <View style={{ marginLeft: 20, marginTop: 10 }}>
        <Text style={{ fontWeight: "100", fontSize: 15 }}>Saved Number</Text>
        <FlatList
          style={{ marginBottom: 25 }}
          data={SavedNumber}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => setPhoneNumber(item.number)}
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

        <Text style={{ fontWeight: "200", marginBottom: 5 }}>
          New Payment Method
        </Text>
        {/* <PhoneInput
          value={phonenumber}
          defaultCode="RW"
          containerStyle={{
            borderColor: "#525DC2",
            borderWidth: 2,
            // borderRadius: 7,
          }}
          textContainerStyle={{}}
          onChangeFormattedText={(text) => setPhoneNumber(text)}
        /> */}
        <TextInput
          value={phonenumber}
          onChangeText={(text) => setPhoneNumber(text)}
          placeholder="Enter Phone number"
          style={{
            borderColor: COLORS.primary,
            borderWidth: 1,
            width: "90%",
            paddingVertical: height / 90,
            borderRadius: width / 20,
            paddingHorizontal: width / 60,
          }}
        />
      </View>
      <View
        style={{
          width: "90%",
          height: 1,
          backgroundColor: "black",
          alignSelf: "center",
          marginTop: height / 40,
        }}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 20,
          marginHorizontal: 40,
        }}
      >
        <Text style={{ fontSize: height / 60 }}>Price</Text>
        <Text style={{ fontWeight: "bold", fontSize: height / 60 }}>
          {amount}Rwf
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => nextPage()}
        style={{
          marginVertical: 30,
          backgroundColor: "#93BD67",
          borderRadius: 20,
          height: 40,
          justifyContent: "center",
          alignItems: "center",
          marginHorizontal: 20,
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
