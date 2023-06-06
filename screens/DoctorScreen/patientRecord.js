import React from "react";
import { View, Text, ScrollView } from "react-native";
import { COLORS, height, width } from "../../components/Colors";
import Header from "../../components/Header";
import { TouchableOpacity } from "react-native-gesture-handler";
import Button from "../../components/Button";

const PatientRecord = ({ route, navigation }) => {
  const name = route.params.name;

  const Reusable = ({ title, description }) => {
    return (
      <View style={{ justifyContent: "center" }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          <TouchableOpacity
            style={{
              width: width / 12,
              height: height / 30,
              borderWidth: 1,
              marginRight: 3,
            }}
          />
          <Text
            style={{
              maxWidth: width / 4,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            {title}
          </Text>
        </View>
        <Text style={{ marginTop: 4, alignSelf: "center" }}>{description}</Text>
      </View>
    );
  };
  return (
    <ScrollView>
      <Header style={{ backgroundColor: COLORS.doctor }} />
      <View
        style={{
          flexDirection: "row",
          marginLeft: 30,
          //   justifyContent: "center",
          alignItems: "center",
          marginTop: height / 16,
        }}
      >
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>Consultation </Text>
        <Text style={{ fontSize: 17, fontWeight: "100" }}>Patient Record</Text>
      </View>
      <View
        style={{
          width: width - 20,
          alignSelf: "center",
          paddingHorizontal: 20,
          paddingVertical: 30,
          backgroundColor: COLORS.backgrounds,
          marginTop: height / 19,
          borderRadius: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "700" }}>{name}</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity
              style={{
                width: width / 12,
                height: height / 30,
                borderWidth: 1,
                marginRight: 3,
              }}
            />
            <Text>Hide</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 15,
          }}
        >
          <Reusable title="Age" description="15 Years" />
          <View
            style={{
              height: height / 12,
              width: 2,
              backgroundColor: "black",
            }}
          />
          <Reusable title="Gender" description="Female" />
          <View
            style={{
              height: height / 12,
              width: 2,
              backgroundColor: "black",
            }}
          />
          <Reusable title="Pregnancy Status" description="9 Months" />
        </View>
        <Button
          text="View All "
          style={{
            height: height / 20,
            marginTop: 20,
            backgroundColor: COLORS.doctor,
            width: "98%",
          }}
        />
      </View>
    </ScrollView>
  );
};

export default PatientRecord;
