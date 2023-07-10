import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Button,
} from "react-native";
import { COLORS, height, width } from "../../components/Colors";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import DatePicker from "react-native-datepicker";
const DoctorDetails = ({ navigation, route }) => {
  const [selectedDate, setSelectedDate] = useState("");

  const name = route.params.name;
  const description = route.params.description;
  const [rating, setRating] = useState(4);
  const ratingStars = [1, 2, 3, 4, 5];
  const doctor = {
    image: require("../../assets/profile.jpeg"),
    patients: "2000+",
    experience: "5Years",
    awards: "10+",
    specialization: [
      "Dermatologist",
      "Ureology",
      "General",
      "Dental",
      "Genocologist",
    ],
    current: "Dermatologist",
    rating: rating,
  };
  const Reusablecircle = ({ name, name1, name2 }) => {
    return (
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View
          style={{
            width: width / 10,
            height: width / 10,
            borderRadius: width / 10,
            backgroundColor: COLORS.white,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FontAwesome5Icon name={name} size={25} color={COLORS.black} />
        </View>
        <View style={{ marginHorizontal: width / 40 }}>
          <Text
            style={{ color: COLORS.white, fontWeight: "700", fontSize: 18 }}
          >
            {name1}
          </Text>
          <Text style={{ color: COLORS.white, fontWeight: "400" }}>
            {name2}
          </Text>
        </View>
      </View>
    );
  };
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          backgroundColor: COLORS.primary,
          height: height / 4,
          borderBottomEndRadius: width / 25,
          borderBottomLeftRadius: width / 25,
          paddingHorizontal: width / 16,
        }}
      >
        <TouchableOpacity>
          <AntDesign name="arrowleft" color={COLORS.white} size={30} />
        </TouchableOpacity>
        <View
          style={{
            marginTop: height / 40,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image
            source={doctor.image}
            style={{
              width: width / 5,
              height: width / 5,
              borderRadius: width / 18,
              borderColor: COLORS.white,
              borderWidth: 1,
            }}
            resizeMode="cover"
          />
          <View style={{ marginLeft: width / 20 }}>
            <Text
              style={{ color: COLORS.white, fontWeight: "bold", fontSize: 18 }}
            >
              {name}
            </Text>
            <Text style={{ color: COLORS.warning }}>{doctor.current}</Text>
            <View style={{ flexDirection: "row" }}>
              {ratingStars.map((item, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => setRating(index + 1)}
                  >
                    <Entypo
                      name="star"
                      size={25}
                      color={
                        rating >= index + 1 ? "yellow" : COLORS.backgrounds
                      }
                    />
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </View>
        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <Reusablecircle
            name="user-plus"
            name1={doctor.patients}
            name2="Patients"
          />
          <Reusablecircle
            name="star-of-david"
            name1={doctor.experience}
            name2="Experiences"
          />
          <Reusablecircle name="award" name1={doctor.awards} name2="awards" />
        </View>
      </View>
      <View style={{ paddingHorizontal: width / 20, marginTop: 10 }}>
        <Text style={{ fontSize: 18, marginBottom: 10, fontWeight: "bold" }}>
          Biography
        </Text>
        <Text style={{ maxWidth: "100%", maxHeight: height / 10 }}>
          {description}
        </Text>
        <Text
          style={{
            fontSize: 18,
            marginBottom: 10,
            marginTop: 10,
            fontWeight: "bold",
          }}
        >
          Specializatios
        </Text>
        <View>
          <ScrollView
            contentContainerStyle={{ flexDirection: "row" }}
            style={{ flexGrow: 1 }}
            showsHorizontalScrollIndicator
          >
            {doctor.specialization.map((item, index) => {
              return (
                <View
                  key={index}
                  style={{
                    width: width / 3.8,
                    height: width / 10,
                    borderRadius: width / 30,
                    backgroundColor: COLORS.doctor,
                    marginHorizontal: width / 60,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text style={{ color: COLORS.white, fontWeight: "500" }}>
                    {item}
                  </Text>
                </View>
              );
            })}
          </ScrollView>
        </View>
        <Text
          style={{
            fontSize: 18,
            marginBottom: 10,
            marginTop: 10,
            fontWeight: "bold",
          }}
        >
          Schedule
        </Text>
        <View style={{}}>
          <DatePicker
            style={styles.datePicker}
            date={selectedDate}
            mode="date"
            placeholder="Select date"
            format="YYYY-MM-DD"
            minDate="1900-01-01"
            maxDate="2100-12-31"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                position: "absolute",
                left: 0,
                top: 4,
                marginLeft: 0,
              },
              dateInput: {
                marginLeft: 36,
              },
              // Add custom styles if needed
            }}
            onDateChange={(date) => setSelectedDate(date)}
          />
          <Button
            title="Show Selected Date"
            onPress={() => console.log(selectedDate)}
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  datePicker: {
    width: 200,
  },
});

export default DoctorDetails;
