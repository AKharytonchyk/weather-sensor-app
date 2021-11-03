import * as React from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";
import { ScrollView, Text } from "./Themed";
import WeatherScreenInfo from "./WeatherScreenInfo";

const initialIpList: string[] = [];

export default function WeatherSensorGroup() {
  const [text, onChangeText] = React.useState("");
  const [sensorIpList, setSensorIp] = React.useState(initialIpList);

  const onPress = () => {
    if (text?.length > 0 && !sensorIpList.some((sIp) => sIp === text))
      setSensorIp([...sensorIpList, text]);

    onChangeText("");
  };

  return (
    <ScrollView style={styles.container}>
      {sensorIpList.length === 0 ? (
        <Text style={styles.title}>Please enter sensor IP.</Text>
      ) : (
        sensorIpList.map((ip, index) => (
          <WeatherScreenInfo key={`ip-${index}`} ip={ip} />
        ))
      )}
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      ></TextInput>
      <Button onPress={onPress} title="Add">
        Add
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "left",
  },
  input: {
    height: 40,
    marginVertical: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
  container: {
    display: "flex",
    minWidth: "80%",
    paddingHorizontal: 16,
    flex: 0,
  },
});
