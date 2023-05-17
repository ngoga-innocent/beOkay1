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
import Colors from "../components/Colors";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
const Payment = () => {
  const [activepy, setActivepy] = useState("momo");
  const navigation = useNavigation();
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "momo", title: "Mobile Money" },
    { key: "card", title: " Card" },
    { key: "paypal", title: "Paypal" },
  ]);

  const Momo = () => {
    const [phonenumber, setPhoneNumber] = useState("");
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
    return (
      <View style={{ marginLeft: 20, marginTop: 10 }}>
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
          onChangeFormattedText={(text) => setPhoneNumber(text)}
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
      <TabView
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
      />
      <View
        style={{
          width: "90%",
          height: 1,
          backgroundColor: "black",
          alignSelf: "center",
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
        <Text style={{ fontSize: 19 }}>Price</Text>
        <Text style={{ fontWeight: "bold", fontSize: 19 }}>20,000 Rwf</Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Results")}
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
