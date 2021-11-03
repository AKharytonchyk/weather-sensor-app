import { Icon } from "@iconify/react";
import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "./Themed";
import useColorScheme from "../hooks/useColorScheme";

export default function MeasurementInfo({
  icon,
  iconColor,
  name,
  value,
  valueIcon,
  valueIconColor,
  valueText,
}: MeasurementInfoProps) {
  const colorScheme = useColorScheme();
  const fallbackColor = colorScheme === "dark" ? "#f8f8f8" : "#444";

  return (
    <View style={styles.container}>
      {icon ? (
        <Icon
          icon={icon}
          color={iconColor ?? fallbackColor}
          height="24"
          width="24"
        ></Icon>
      ) : null}

      <Text style={styles.text}>{name}</Text>
      <Text style={styles.value}>{value}</Text>

      {valueIcon ? (
        <Icon
          height="32"
          width="32"
          icon={valueIcon}
          color={valueIconColor ?? iconColor ?? fallbackColor}
        ></Icon>
      ) : (
        <Text style={styles.value}>{valueText}</Text>
      )}
    </View>
  );
}

export interface MeasurementInfoProps {
  icon?: string;
  iconColor?: string;
  name: string;
  value: string | number;
  valueText?: string;
  valueIcon?: string;
  valueIconColor?: string;
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    alignContent: "center",
  },
  value: { fontSize: 16 },
  text: { fontSize: 16, marginLeft: 6, marginRight: "auto" },
});
