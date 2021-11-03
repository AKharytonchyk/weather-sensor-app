import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "./Themed";
import { Icon } from "@iconify/react";
import MeasurementInfo from "./MeasurementInfo";

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
  });

  return (
    <View>
      <Text
        style={styles.headingText}
        lightColor="rgba(0,0,0,0.8)"
        darkColor="rgba(255,255,255,0.8)"
      >
        Readings from {ip} sensor.
      </Text>
      <MeasurementInfo
        icon="fluent:temperature-24-regular"
        iconColor="#E9917E"
        name="Temperature"
        value={readings.temperature}
        valueText="℃"
      />
      <MeasurementInfo
        icon="carbon:humidity"
        iconColor="#00C6CF"
        name="Humidity"
        value={readings.humidity}
        valueText="%"
      />
      <MeasurementInfo
        icon="fluent:top-speed-24-regular"
        iconColor="#8685EF"
        name="Pressure"
        value={readings.pressure}
        valueText="kPa"
      />
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
  },
});
