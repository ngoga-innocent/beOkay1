import { Svg, Circle } from "react-native-svg";
import { View, Text, StyleSheet } from "react-native";

const CircularProgressBar = ({ progress, barColor, thickness, size }) => {
  const radius = (size - thickness) / 2;
  const circumference = 2 * Math.PI * radius;
  const progressValue = (progress / 100) * circumference;

  return (
    <View style={{ width: size, height: size, marginTop: 10 }}>
      <Svg width={size} height={size}>
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke="black"
          strokeWidth={thickness}
        />
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progressValue}
          strokeLinecap="round"
          stroke={barColor}
          strokeWidth={thickness}
        />
      </Svg>
      <View style={styles.textContainer}>
        <Text style={styles.progressText}>{`${progress}%`}</Text>
      </View>
    </View>
  );
};

export default CircularProgressBar;
const styles = StyleSheet.create({
  progressBar: {
    height: "100%",
  },
  textContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },
  progressText: {
    fontSize: 6,
    fontWeight: "bold",
    textAlign: "center",
  },
});
