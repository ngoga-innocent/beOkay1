import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import Header from "../../components/Header";
import { COLORS, height, width } from "../../components/Colors";
import Button from "../../components/Button";
import { FlatList } from "react-native-gesture-handler";
import DateTime from "../../components/DateTimePicker";
import DatePicker from "../../components/DatePicker";
import Entypo from "react-native-vector-icons/Entypo";
import { Calendar } from "react-native-calendars";
import DateTimePicker from "@react-native-community/datetimepicker";
import { CheckLogin } from "../../components/CheckLogin";
import Url from "../../Url";
const Mycalendar = ({ navigation }) => {
  const [selected, setSelected] = useState([0]);
  const days = ["Mo", "Tu", "We", "Th", "fr", "Sa", "Su"];
  const [showModal, setShowModal] = useState(true);
  const [date, setDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const [selectedFromTime, setSelectedFromTime] = useState(null);
  const [selectedToTime, setSelectedToTime] = useState(null);
  const [isFromTimePickerVisible, setFromTimePickerVisibility] = useState(false);
  const [isToTimePickerVisible, setToTimePickerVisibility] = useState(false);
  const [fullDateTime, setFullDateTime] = useState("");
  const [markedDates, setMarkedDates] = useState({});
  // Calculate the start and end dates of the current week
  const currentDate = new Date();
  const startOfWeek = new Date(currentDate);
  const onDayPress = (day) => {
    // console.log(day.dateString);
    setSelectedDate(day.dateString);
    setMarkedDates({...markedDates,[selectedDate]:{selected:true,marked:true},})
    setModalVisible(true);
  };

  const handleFromTimeChange = (event, selected) => {
    if (event.type === "set" && selected) {
      // Extract the selected time in HH:mm format
      const hours = selected.getHours().toString().padStart(2, "0");
      const minutes = selected.getMinutes().toString().padStart(2, "0");
      const selectedTimeString = `${hours}:${minutes}`;

      setSelectedFromTime(selectedTimeString);
      setFromTimePickerVisibility(!isFromTimePickerVisible);
    } else {
      setFromTimePickerVisibility(!isFromTimePickerVisible);
    }
  };
  const handleToTimeChange = (event, selected) => {
    if (event.type === "set" && selected) {
      // Extract the selected time in HH:mm format
      const hours = selected.getHours().toString().padStart(2, "0");
      const minutes = selected.getMinutes().toString().padStart(2, "0");
      const selectedTimeString = `${hours}:${minutes}`;

      setSelectedToTime(selectedTimeString);
      setToTimePickerVisibility(!isToTimePickerVisible);
      console.log(selectedTimeString)
    } else {
      setToTimePickerVisibility(!isToTimePickerVisible);
    }
  };

  const setAvailability = async () => {
    if (selectedDate && selectedToTime && selectedFromTime) {
      // Combine selectedDate and selectedTime into a full date-time string
      const combinedDateTime = `${selectedDate}T${selectedToTime}:00Z`;
      const FromCombinedDate=`${selectedDate}T${selectedFromTime}:00Z`
      setFullDateTime(combinedDateTime);
      console.log(combinedDateTime , FromCombinedDate)
      const logedin=await CheckLogin()
    console.log(logedin.token)
      if(logedin.logged){
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `JWT ${logedin.token}`);
        myHeaders.append("Content-Type", "application/json");
        
        var raw = JSON.stringify({
          "starting_date": FromCombinedDate,
          "ending_date": combinedDateTime
        });
        
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        
        await fetch(`${Url}/doctor/availabilities/`, requestOptions)
          .then(response => response.json())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));
      }
      else{
        Alert('You are not logged in')
      }
      // Send combinedDateTime to your backend
      // Example API call to save availability:
      // fetch('your-backend-api-endpoint', {
      //   method: 'POST',
      //   body: JSON.stringify({ datetime: combinedDateTime }),
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      // });
      // Handle the response or errors as needed
      //navigation.navigate("history")
    }
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      <Header
        style={{
          backgroundColor: COLORS.doctor,
          paddingHorizontal: width / 20,
        }}
      />
      {/* <View style={{ marginTop: 20, flexDirection: "row" }}>
        <Button
          onPress={() => navigation.navigate("mycalendar")}
          text="My Calendar"
          style={{
            backgroundColor: COLORS.doctor,
            height: height / 20,
            width: "30%",
          }}
          style1={{ fontSize: 15 }}
        />
      </View> */}
      {/* <View
        style={{
          padding: width / 25,
          backgroundColor: COLORS.warning,
          borderRadius: width / 10,
          width: "90%", 
          alignSelf: "center",
          marginTop: height / 90,
        }}
      >
        <Text>Schedule and Make Public your daily availability </Text>
      </View> */}
      {showModal && (
        <View style={styles.modal}>
          <View style={styles.modalheader}>
            <Text
              style={{
                color: "#809502",
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              My Calendar
            </Text>
            <TouchableOpacity onPress={() => setShowModal(!showModal)}>
              <Entypo
                name="circle-with-cross"
                color={COLORS.primary}
                size={24}
              />
            </TouchableOpacity>
          </View>

          <Text style={{ fontSize: 14, color: "#809502", marginHorizontal: 4 }}>
            Schedule and Make Public your daily availability
          </Text>
        </View>
      )}
      <View
        style={{
          marginTop: height / 20,
          paddingHorizontal: 16,
          backgroundColor: COLORS.primary,
          flex: 2,
          height: "100%",
          paddingVertical: height / 20,
          borderRadius: width / 10,
          marginHorizontal: width / 30,
          width: "98%",
          alignSelf: "center",
        }}
      >
        <Calendar
        style={{borderRadius:width/30,borderWidth:1,borderColor:COLORS.white}}
          onDayPress={onDayPress}
          minDate={startOfWeek.toISOString().split("T")[0]}
          // maxDate={endOfWeek.toISOString().split("T")[0]}
          markingType={"interactive"}
          markedDates={markedDates}
        />
        {/* <Text style={styles.headers}>My Availability</Text>
        <FlatList
          horizontal
          data={days}
          renderItem={({ item, index }) => {
            return (
              <View
                style={{
                  marginTop: 10,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    if (selected.includes(index)) {
                      const select = selected.filter((item) => item !== index);
                      setSelected(select);
                    } else {
                      setSelected([...selected, index]);
                    }
                  }}
                  style={[
                    styles.availability,
                    {
                      backgroundColor: selected.includes(index)
                        ? COLORS.doctor
                        : COLORS.backgrounds,
                    },
                  ]}
                >
                  <Text style={{ fontWeight: "bold" }}>{item}</Text>
                </TouchableOpacity>
              </View>
            );
          }}
        /> */}
        {modalVisible && (
          <View style={{ marginTop: height / 40 }}>
            <Text style={styles.headers}>Time Range Availability on {selectedDate}</Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                marginTop: 15,
              }}
            >
              <View>
                <Text style={{ fontWeight: "700", fontSize: 17 }}>From</Text>
                <TouchableOpacity
                  style={styles.inputField}
                  onPress={()=>setFromTimePickerVisibility(!isFromTimePickerVisible)}
                >
                  <Text>{selectedFromTime || "Select Time"}</Text>
                </TouchableOpacity>
                {isFromTimePickerVisible && (
                  <DateTimePicker
                    value={new Date()}
                    mode="time"
                    display="spinner"
                    onChange={handleFromTimeChange}
                  />
                )}
              </View>
              <View>
                <Text style={{ fontWeight: "700", fontSize: 17 }}>To</Text>
                <TouchableOpacity
                  style={styles.inputField}
                  onPress={()=>setToTimePickerVisibility(!isToTimePickerVisible)}
                >
                  <Text>{selectedToTime || "Select Time"}</Text>
                </TouchableOpacity>
                {isToTimePickerVisible && (
                  <DateTimePicker
                    value={new Date()}
                    mode="time"
                    display="spinner"
                    onChange={handleToTimeChange}
                  />
                )}
              </View>
            </View>
          </View>
        )}

      </View>
      <Button
        onPress={() => setAvailability()}
        text="Confirm Availability"
        style={{
          width: width - 20,
          height: height / 17,
          backgroundColor: COLORS.doctor,
          marginTop: 20,
        }}
        style1={{ color: COLORS.white, fontSize: 22, fontWeight: "bold" }}
      />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  headers: {
    fontWeight: "bold",
    fontSize: 19,
  },
  paragraph: {
    fontWeight: "400",
  },
  availability: {
    height: height / 13,
    width: width / 10,
    // backgroundColor: COLORS.backgrounds,
    marginHorizontal: 10,
    borderRadius: width / 7,
    alignItems: "center",
    justifyContent: "center",
  },
  modal: {
    marginHorizontal: width / 30,
    paddingVertical: height / 50,
    paddingHorizontal: width / 40,
    backgroundColor: "#FFF6C5",
    borderRadius: width / 30,
    marginTop: height / 50,
  },
  modalheader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 4,
    alignItems: "center",
  },
  inputField: {
    padding: 10,
    paddingLeft: 15,

    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 15,
    backgroundColor: COLORS.backgrounds,
  },
});

export default Mycalendar;
