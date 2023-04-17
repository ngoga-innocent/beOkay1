import { React, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  useWindowDimensions,
} from "react-native";
import slide from "../slide";
import OnboardingItem from "./OnboardingItem";

const Onboading = ({ navigation }) => {
  const [currentindex, setCurrentIndex] = useState(0);
  const Footer = () => {
    const { height } = useWindowDimensions();
    return (
      <View
        style={{
          height: height * 0.25,
          justifyContent: "space-between",
          marginTop: 20,
        }}
      >
        <StatusBar backgroundColor="#93BD68" />
        <View
          style={{
            justifyContent: "center",
            flexDirection: "row",
            marginTop: 15,
          }}
        >
          {slide.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentindex == index && {
                  width: 30,
                  backgroundColor: "#93BD68",
                },
              ]}
            />
          ))}
        </View>
        <View>
          {currentindex == slide.length - 1 ? (
            <TouchableOpacity
              style={styles.Touchable}
              onPress={() => navigation.replace("Auth")}
            >
              <Text style={styles.btntxt}>Get started</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={[styles.btn]}
              onPress={() => navigation.replace("Auth")}
            >
              <Text style={{ color: "#BCBCBC" }}>skip and get started</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  };

  const { width } = useWindowDimensions();
  const UpdatecurrentslideIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const curIndex = Math.round(contentOffsetX / width);

    setCurrentIndex(curIndex);
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={slide}
        renderItem={({ item }) => <OnboardingItem item={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        onMomentumScrollEnd={UpdatecurrentslideIndex}
      />
      <Footer />
    </View>
  );
};
const styles = StyleSheet.create({
  btn: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 40,
    marginBottom: 50,
  },
  item: {},
  image: {
    flex: 0.7,
    justifyContent: "center",
  },

  Header: {
    color: "#93BD68",
    fontSize: 25,
    marginTop: 70,
    maxWidth: "60%",
  },
  Headercover: {
    marginTop: 10,
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 20,
    color: "#BDBDBD",
    alignItems: "center",
    marginBottom: 150,
    marginTop: 40,
    textAlign: "center",
  },
  Text: {
    color: "#BDBDBD",
    fontSize: 20,
  },
  button: {
    botton: 35,
    width: 40,
  },
  Touchable: {
    backgroundColor: "#93BD68",
    marginBottom: 40,
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 30,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  btntxt: {
    color: "#FFF",
    marginVertical: 5,
  },
  indicator: {
    backgroundColor: "#D9F4BD",
    height: 10,
    width: 10,
    marginHorizontal: 10,
    borderRadius: 10,
  },
});

export default Onboading;
