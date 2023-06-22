import React, { useState, useLayoutEffect } from "react";
import { Text, View, ScrollView } from "react-native";
import { COLORS } from "../../components/Colors";
import Fontisto from "react-native-vector-icons/Fontisto";
import FontAwesome from "react-native-vector-icons/FontAwesome5";
import { useFonts } from "expo-font";
import Fonts from "../../components/Fonts";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import MapScreen from "../../components/map";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ConsultationResults = () => {
  useLayoutEffect(() => {
    getDiseaseDetails();
  }, []);
  const [Font] = useFonts({
    Inter: require("../../assets/Fonts/Inter.ttf"),
  });
  const [medecine, setMedecine] = useState([
    { id: "1", name: "ACE inihibitors" },
    { id: "2", name: "Ibuprofene" },
    { id: "3", name: "Naproxen" },
  ]);
  const [pharmacy, setPharmacy] = useState([
    { distance: "500m", name: "VIVA Pharamcy", status: "open" },
    { distance: "1.5km", name: "The cure Pharamacy", status: "open till 20h" },
  ]);
  const [results, setResults] = useState("");
  const [prescription, setPrescription] = useState("");
  const [recommended_test, setRecTest] = useState("");
  const [recommendation, setRecommendation] = useState("");

  const getDiseaseDetails = async () => {
    const results = await AsyncStorage.getItem("results");
    const recommendation = await AsyncStorage.getItem("recommendation");
    const recommended_test = await AsyncStorage.getItem("recommended_test");
    const prescription = await AsyncStorage.getItem("prescription");
    console.log(results);
    setResults(results);
    setPrescription(prescription);
    setRecTest(recommended_test);
    setRecommendation(recommendation);
  };
  return (
    <ScrollView
      style={{ flex: 1, padding: 4 }}
      showsVerticalScrollIndicator={false}
    >
      <View
        style={{
          backgroundColor: COLORS.white,
          paddingHorizontal: 10,

          borderRadius: 16,
        }}
      >
        <View
          style={{
            backgroundColor: COLORS.green,
            padding: 10,

            marginRight: 7,
            borderRadius: 10,
            marginTop: 20,
            marginBottom: 20,
          }}
        >
          <Text
            style={{
              fontSize: 20,

              marginTop: 7,
              fontWeight: "bold",
            }}
          >
            Dr. Emile Results
          </Text>
        </View>

        <Text
          style={{
            fontSize: 18,

            marginTop: 6,
            fontWeight: "bold",

            // textTransform:'capitalize'
          }}
        >
          illness Details
        </Text>
        <View style={{ marginHorizontal: 20, marginTop: 25 }}>
          <Text
            style={{
              fontSize: 14,
              fontStyle: "italic",
              marginBottom: 10,
              // fontFamily: "Inter",
            }}
          >
            {results}
          </Text>
          <View
            style={{
              letterSpacing: 2,
              lineHeight: 20,
              fontWeight: "400",
              // fontFamily: "Inter",
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 18,
                marginBottom: 10,
              }}
            >
              Prescription
            </Text>
            <Text style={{ fontSize: 14, fontStyle: "italic" }}>
              {prescription}
            </Text>
          </View>
        </View>
        <View style={{ marginTop: 30, marginBottom: 30 }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "600",
              lineHeight: 20,
              letterSpacing: 2,
            }}
          >
            Recommendation
          </Text>
          <Text
            style={{
              fontWeight: "400",
              fontFamily: "Inter",
              fontSize: 12,
              marginTop: 12,
              marginBottom: 8,
            }}
          >
            {recommendation}
          </Text>
          <TouchableOpacity style={{ flexDirection: "row", padding: 7 }}>
            <Fontisto name="doctor" size={20} color={COLORS.primary} />
            <Text
              style={{
                color: COLORS.primary,
                marginLeft: 15,
                fontWeight: "600",
              }}
            >
              Find our doctors
            </Text>
          </TouchableOpacity>
          <View style={{ marginTop: 25 }}>
            <Text
              style={{
                fontWeight: "700",
                fontSize: 16,
                lineHeight: 20,
                color: "#757575",
                fontFamily: "Inter",
              }}
            >
              First Aid Medication
            </Text>
            <Text
              style={{
                color: "#757575",
                fontSize: 12,
                marginTop: 5,
                lineHeight: 20,
              }}
            >
              We provide the medication that may help you incase you did take
              your consultaion with doctor.
            </Text>
            <View style={{ flexDirection: "row" }}>
              <FontAwesome name="pills" size={24} style={{ marginRight: 10 }} />
              <Text style={[Fonts.paragraph, { fontSize: 15 }]}>
                Recommended Medication
              </Text>
            </View>
            <FlatList
              horizontal
              data={medecine}
              renderItem={({ item }) => (
                <View style={{ margin: 10 }}>
                  <TouchableOpacity style={{ margin: 6 }}>
                    <Text
                      style={{
                        fontWeight: "200",
                        textDecorationLine: "underline",
                      }}
                    >
                      {item.name}
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
            />
            <View style={{ justifyContent: "center" }}>
              <Text>Nearby Pharamacy</Text>
            </View>
            <FlatList
              horizontal
              data={pharmacy}
              renderItem={({ item }) => (
                <View style={{ margin: 4, marginTop: 15 }}>
                  <TouchableOpacity style={{ fontSize: 13, fontWeight: "400" }}>
                    <Text> {item.name}</Text>
                  </TouchableOpacity>
                  <View
                    style={{
                      flexDirection: "row",
                      marginTop: 4,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text style={{ marginRight: 4, fontWeight: "300" }}>
                      {item.distance}
                    </Text>
                    <Text style={{ fontWeight: "300", fontSize: 12 }}>
                      {item.status}
                    </Text>
                  </View>
                </View>
              )}
            />
            <View style={{ marginTop: 20 }}>
              <MapScreen />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ConsultationResults;
