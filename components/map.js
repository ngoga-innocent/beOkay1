import React, { useEffect, useState } from "react";
import { Alert, StyleSheet, View, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

const MapScreen = () => {
  const [location, setLocation] = useState(null);
  const [chooselocation, setChooseLocation] = useState(null);
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        canAskAgain;

        return;
      }

      let { coords } = await Location.getCurrentPositionAsync({});
      setLocation(coords);
    })();
  }, []);

  if (!location) {
    return <Text>Loading map...</Text>; // Or render a loading indicator
  }

  const handleMapPress = (event) => {
    const { latitude, longitude } = event.nativeEvent.coordinate;
    setChooseLocation({ latitude, longitude });
  };
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{
            latitude: location.latitude,
            longitude: location.longitude,
          }}
          title="Current Location"
        />
        {chooselocation && (
          <Marker
            coordinate={chooselocation}
            draggable
            onDragEnd={(event) =>
              setChooseLocation(event.nativeEvent.coordinate)
            }
          />
        )}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
    height: 200,
    width: "100%",
  },
});

export default MapScreen;
