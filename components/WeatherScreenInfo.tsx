import * as React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "./Themed";

export default function WeatherScreenInfo({ ip }: { ip: string }) {
  const [readings, setReadings] = React.useState(initialState);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setReadings({
        temperature: readings.temperature + 1,
        humidity: readings.humidity + 2,
        pressure: readings.temperature + 3,
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [ip]);

  return (
    <View>
      <Text
        style={styles.headingText}
        lightColor="rgba(0,0,0,0.8)"
        darkColor="rgba(255,255,255,0.8)"
      >
        Readings from {ip} sensor.
      </Text>
      <Text>Temperature: {readings.temperature} ℃</Text>
      <Text>Humidity: {readings.humidity}%</Text>
      <Text>Pressure: {readings.pressure} kPa</Text>
    </View>
  );
}

const initialState = {
  temperature: 0,
  humidity: 0,
  pressure: 0,
};

const styles = StyleSheet.create({
  headingText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: "center",
  },
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: "center",
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: "center",
  },
});
