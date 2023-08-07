import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Button,
  Platform,
  FlatList,
} from "react-native";
import { COLORS, height, width } from "../../components/Colors";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";

const DoctorDetails = ({ navigation, route }) => {
  const [selectedDate, setSelectedDate] = useState("");

  const name = route.params.name;
  const description = route.params.description;
  const [rating, setRating] = useState(4);
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [showPicker1, setShowPicker1] = useState(false);
  const [availableHours, setAvailableHours] = useState([]);
  const [choosenIndex, setChoosen] = useState();
  const [selectedHour, setSelecetedHour] = useState();
  const currentDate = new Date();
  const options = { weekday: "short" };
  //custom availability not well handled because of NO idea

  const availability = [
    {
      date: currentDate.toLocaleDateString(undefined, {
        weekday: "short",
      }),
      hours: [
        "08:00 AM",
        "9:00 AM",
        "10:00 AM",
        "02:00",
        "03:00",
        "04:00",
        "5:00",
      ],
    },
    {
      date: new Date(
        currentDate.getTime() + 1 * 24 * 60 * 60 * 1000
      ).toLocaleDateString(undefined, {
        weekday: "short",
      }),
      hours: [
        "08:00 AM",
        "9:00 AM",
        "10:00 AM",
        "02:00 PM",
        "03:00 PM",
        "04:00 PM",
        "5:00 PM",
      ],
    },
    {
      date: new Date(
        currentDate.getTime() + 2 * 24 * 60 * 60 * 1000
      ).toLocaleDateString(undefined, {
        weekday: "short",
      }),
      hours: [
        "08:00 AM",
        "9:00 AM",
        "10:00 AM",
        "02:00 PM",
        "03:00 PM",
        "04:00 PM",
        "5:00 PM",
      ],
    },
    {
      date: new Date(
        currentDate.getTime() + 3 * 24 * 60 * 60 * 1000
      ).toLocaleDateString(undefined, {
        weekday: "short",
      }),
      hours: [
        "08:00 AM",
        "9:00 AM",
        "10:00 AM",
        "02:00 PM",
        "03:00 PM",
        "04:00 PM",
        "5:00 PM",
      ],
    },
    {
      date: new Date(
        currentDate.getTime() + 4 * 24 * 60 * 60 * 1000
      ).toLocaleDateString(undefined, {
        weekday: "short",
      }),
      hours: [
        "08:00 AM",
        "9:00 AM",
        "10:00 AM",
        "02:00 PM",
        "03:00 PM",
        "04:00 PM",
        "5:00 PM",
      ],
    },
    {
      date: new Date(
        currentDate.getTime() + 5 * 24 * 60 * 60 * 1000
      ).toLocaleDateString(undefined, {
        weekday: "short",
      }),
      hours: [
        "08:00 AM",
        "9:00 AM",
        "10:00 AM",
        "02:00 PM",
        "03:00 PM",
        "04:00 PM",
        "5:00 PM",
      ],
    },
    {
      date: new Date(
        currentDate.getTime() + 6 * 24 * 60 * 60 * 1000
      ).toLocaleDateString(undefined, {
        weekday: "short",
      }),
      hours: ["08:00 PM", "9:00 PM", "04:00 PM", "5:00 PM"],
    },
  ];

  //end Custom Availability
  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowPicker(Platform.OS === "ios");
    setDate(currentDate);
  };
  const handleTimeChange = (selectedtime) => {
    const currentTime = selectedtime || time;

    setShowPicker1(Platform.OS === "ios");
    setTime(currentTime);
  };
  const togglePicker = () => {
    setShowPicker(!showPicker);
  };
  const togglePickerTime = () => {
    setShowPicker1(!showPicker1);
  };
  const chooseDate = (item, index) => {
    setChoosen(index);
    setAvailableHours(item);
  };
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
          height: height / 3,
          borderBottomEndRadius: width / 25,
          borderBottomLeftRadius: width / 25,
          paddingHorizontal: width / 16,
        }}
      >
        <TouchableOpacity style={{ marginTop: height / 30 }}>
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
              width: width / 4,
              height: width / 4,
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
        <View style={{ flexDirection: "row", marginTop: height / 16 }}>
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
      </View>
      <View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {availability.map((item, index) => {
            return (
              <TouchableOpacity
                onPress={() => chooseDate(item.hours, index)}
                key={index}
                style={{
                  paddingHorizontal: width / 30,
                  borderWidth: 1,
                  borderRadius: width / 50,

                  marginHorizontal: width / 40,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor:
                    choosenIndex === index ? COLORS.primary : null,
                }}
              >
                <Text>{item.date.split(",")[0]}</Text>
                <Text>{item.date.split(",")[1].split("/")[0]}</Text>
              </TouchableOpacity>
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
          marginLeft: width / 25,
        }}
      >
        Select Time
      </Text>
      <FlatList
        numColumns={3}
        data={availableHours}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              onPress={() => setSelecetedHour(index)}
              style={{
                marginLeft: width / 30,
                borderRadius: width / 30,
                borderWidth: 1,
                paddingHorizontal: width / 15,
                paddingVertical: height / 160,
                alignItems: "center",
                marginBottom: height / 90,
                backgroundColor: selectedHour === index ? COLORS.primary : null,
              }}
            >
              <Text>{item}</Text>
            </TouchableOpacity>
          );
        }}
      />
      {/* <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: width / 10,
          }}
        >
          <View>
            <Text>{date && date.toDateString()}</Text>
          </View>
          <View>
            <Text>{time && moment(time).format("LT")}</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: width / 20,
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: COLORS.primary,
              alignItems: "center",
              justifyContent: "center",
              height: height / 20,
              borderRadius: width / 30,

              width: "48%",
              marginTop: height / 70,
            }}
            onPress={() => togglePicker()}
          >
            <Text style={{ fontWeight: "bold", color: COLORS.white }}>
              Choose Date
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: COLORS.primary,
              alignItems: "center",
              justifyContent: "center",
              height: height / 20,
              borderRadius: width / 30,
              width: "48%",
              marginTop: height / 70,
            }}
            onPress={() => togglePickerTime()}
          >
            <Text style={{ fontWeight: "bold", color: COLORS.white }}>
              Choose Time
            </Text>
          </TouchableOpacity>
        </View>
        {showPicker && (
          <DateTimePicker
            value={date}
            mode="date"
            display="default"
            onChange={handleDateChange}
          />
        )}
        {showPicker1 && (
          <DateTimePicker
            value={time}
            mode="time"
            display="default"
            onChange={handleTimeChange}
          />
        )}
      </View> */}
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("consultation", {
            screen: "payment",
            params: {
              next: "success",
            },
          })
        }
        style={{
          height: height / 20,
          width: "95%",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: COLORS.primary,
          alignSelf: "center",
          marginTop: height / 30,
          borderRadius: width / 40,
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 17, color: COLORS.white }}>
          Book Appointment
        </Text>
      </TouchableOpacity>
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
