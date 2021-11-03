import * as React from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";
import { Text } from "./Themed";
import WeatherScreenInfo from "./WeatherScreenInfo";

const initialIpList: string[] = [];

export default function WeatherSensorGroup() {
  const [text, onChangeText] = React.useState("");
  const [sensorIpList, setSensorIp] = React.useState(initialIpList);

  const onPress = () => {
    if (text?.length > 0 && !sensorIpList.some((sIp) => sIp === text))
      setSensorIp([...sensorIpList, text]);
  };

  return (
    <View>
      <View style={styles.container}>
        {sensorIpList.length === 0 ? (
          <Text style={styles.title}>Please enter sensor IP.</Text>
        ) : (
          sensorIpList.map((ip, index) => (
            <WeatherScreenInfo key={`ip-${index}`} ip={ip} />
          ))
        )}
      </View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      ></TextInput>
      <Button onPress={onPress} title="Add">
        Add
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
});
