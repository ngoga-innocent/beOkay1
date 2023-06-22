import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { React, useState } from "react";
import { COLORS } from "../../../components/Colors";
import RadioForm from "react-native-simple-radio-button";
import Input from "../../../components/Input";
import Slider from "@react-native-community/slider";
import KeyboardWrapper from "../../../components/keyboardWrapper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Button from "../../../components/Button";

const Aiconsultation = ({ navigation }) => {
  const [value, setValue] = useState(0);
  const [range, setRange] = useState("32");
  const [range1, setRange1] = useState("3");
  const [range2, setRange2] = useState("3");
  const [accept, setAccept] = useState(false);
  const [pregnant, setPregnant] = useState(0);
  const item = [
    { label: "Yes", value: 0 },
    { label: "No", value: 1 },
  ];

  const Agree = () => {
    if (accept) {
      setAccept(false);
    } else {
      setAccept(true);
    }
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "position" : null}
      enabled
      style={{ flex: 2 }}
      keyboardVerticalOffset={120}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
        style={{ marginHorizontal: 5 }}
      >
        <View
          style={{
            backgroundColor: COLORS.green,
            height: 161,
            margin: 8,
            padding: 4,
            flex: 1,
          }}
        >
          <Text
            style={{
              fontSize: 17,
              fontWeight: "bold",
              maxWidth: "47%",
              marginVertical: 17,
            }}
          >
            Your Going to take consultation with AI
          </Text>
          <View
            style={{
              height: 70,
              backgroundColor: "#21C074",
              borderWidth: 1,
              borderRadius: 12,
              justifyContent: "center",
            }}
          >
            <Text style={{ color: COLORS.white, fontSize: 16 }}>
              Automated AI provide accurate solution 98% Based on the
              information and illness details you provide.
            </Text>
          </View>
        </View>
        <View style={{ margin: 12 }}>
          <Text style={{ marginVertical: 6, fontWeight: "bold" }}>
            Did You consult with Doctor?
          </Text>
          <RadioForm
            radio_props={item}
            initial={0}
            onPress={(value) => setValue(value)}
            formHorizontal={true}
            animation
            buttonColor={COLORS.paragraph}
            selectedButtonColor={COLORS.primary}
            buttonWrapStyle={{ margin: 40 }}
            // style={{ margin: 5, padding: 4 }}
            buttonStyle={{ margin: 50 }}
            labelStyle={{ marginRight: 40 }}
          />
          {value == 0 && (
            <View style={{ marginVertical: 5 }}>
              <Text style={{ fontWeight: "800" }}>Describe your Illness</Text>
              <TextInput
                multiline
                numberOfLines={6}
                style={{
                  backgroundColor: COLORS.paragraph,
                  border: 1,
                  borderRadius: 12,
                  height: 100,
                  textAlignVertical: "top",
                }}
              />
            </View>
          )}
          <View>
            <Text style={{ fontWeight: "800" }}>Previous Illness</Text>
            <Input
              name2="search"
              style={{ backgroundColor: COLORS.paragraph, width: "100%" }}
              placeholder="Type of illness"
              style1={{ marginRight: "8%" }}
            />
          </View>
          <View style={{ marginTop: 5 }}>
            <Text style={{ fontWeight: "800" }}>
              Estimated Body Temperature
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Slider
                style={{ width: "80%", height: 60 }}
                minimumValue={0}
                maximumValue={1}
                minimumTrackTintColor={COLORS.primary}
                maximumTrackTintColor={COLORS.primary}
                thumbTintColor={COLORS.primary}
                value={0.32}
                onValueChange={(value) => setRange(parseInt(value * 100 + "%"))}
              />
              <TouchableOpacity
                style={{
                  backgroundColor: COLORS.paragraph,
                  padding: 12,
                  borderRadius: 8,
                  marginRight: 15,
                }}
              >
                <Text>{range} °C</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Text style={{ fontWeight: "800" }}>Are You pregnant?</Text>
          <RadioForm
            radio_props={item}
            initial={0}
            onPress={(value) => setPregnant(value)}
            formHorizontal={true}
            animation
            buttonColor={COLORS.paragraph}
            selectedButtonColor={COLORS.primary}
            labelStyle={{ marginRight: 40 }}
          />

          <View style={{ marginTop: 5 }}>
            {pregnant == 0 ? (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: 5,
                }}
              >
                <Slider
                  style={{ width: "70%", height: 60 }}
                  minimumValue={0}
                  maximumValue={0.1}
                  minimumTrackTintColor={COLORS.primary}
                  maximumTrackTintColor={COLORS.primary}
                  thumbTintColor={COLORS.primary}
                  value={0.03}
                  onValueChange={(value) =>
                    setRange1(parseInt(value * 100 + "%"))
                  }
                />
                <TouchableOpacity
                  style={{
                    backgroundColor: COLORS.paragraph,
                    padding: 12,
                    borderRadius: 8,
                    marginLeft: 15,
                  }}
                >
                  <Text>{range1} months</Text>
                </TouchableOpacity>
              </View>
            ) : null}
          </View>
          <View>
            <Text style={{ fontWeight: "800" }}>
              Current Medication or Treatment
            </Text>
            <Input
              name2="search"
              style={{ backgroundColor: COLORS.paragraph, width: "100%" }}
              placeholder="Medication"
              style1={{ marginRight: "8%" }}
            />
          </View>
          <View>
            <Text style={{ fontWeight: "800", marginTop: 10 }}>
              What symptom is Bothering you most?
            </Text>
            <Input
              name2="search"
              style={{ backgroundColor: COLORS.paragraph, width: "100%" }}
              placeholder="Type of illness"
              style1={{ marginRight: "8%" }}
            />
          </View>
          <View>
            <Text style={{ maxWidth: 400, fontWeight: "800", marginTop: 10 }}>
              Is there any specific diagnosis you are windering about?
            </Text>
            <Input
              name2="search"
              style={{ backgroundColor: COLORS.paragraph, width: "100%" }}
              placeholder="Type of illness"
              style1={{ marginRight: "8%" }}
            />
          </View>
          <View style={{ marginTop: 5 }}>
            <Text style={{ fontWeight: "800", marginTop: 10 }}>
              Pain Duration
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Slider
                style={{ width: "80%", height: 60 }}
                minimumValue={0}
                maximumValue={0.3}
                minimumTrackTintColor={COLORS.primary}
                maximumTrackTintColor={COLORS.primary}
                thumbTintColor={COLORS.primary}
                value={0.03}
                onValueChange={(value) =>
                  setRange2(parseInt(value * 100 + "%"))
                }
              />
              <TouchableOpacity
                style={{
                  backgroundColor: COLORS.paragraph,
                  padding: 12,
                  borderRadius: 8,
                  marginRight: 15,
                }}
              >
                <Text>{range2} days</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            onPress={(accept) => Agree(accept)}
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {accept ? (
              <View>
                <Icon name="toggle-switch" size={45} color={COLORS.primary} />
              </View>
            ) : (
              <View>
                <Icon
                  name="toggle-switch-off"
                  size={45}
                  color={COLORS.primary}
                />
              </View>
            )}

            <Text>I agree that all information are trustWorthy</Text>
          </TouchableOpacity>
          {accept ? (
            <Button
              text="Submit"
              style={{
                backgroundColor: COLORS.primary,
                height: 45,
                width: "100%",
                marginBottom: 30,
              }}
              style1={{ color: "white", fontWeight: "bold" }}
              onPress={() => navigation.navigate("AiResult")}
            />
          ) : (
            <Button
              text="Submit"
              style={{
                backgroundColor: COLORS.paragraph,
                height: 45,
                width: "100%",
                marginBottom: 30,
              }}
              style1={{ color: "white", fontWeight: "bold" }}
            />
          )}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Aiconsultation;
