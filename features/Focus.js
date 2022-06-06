import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import colors from "../utils/colors";
import { spacing } from "../utils/spacing";
import { RoundedButton } from "../components/RoundedButton";

export const Focus = ({ setFocusItem }) => {
  const [value, setValue] = useState();
  const handleOnPress = () => {
    setFocusItem(value);
  };
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.text}
          label="What would you like to fous on?"
          value={value}
          onChangeText={setValue}
        />
        <RoundedButton title="Add" size={50} onPress={handleOnPress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  inputContainer: {
    padding: spacing.xxl,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    color: colors.white,
    flex: 1,
    marginRight: spacing.md,
  },
});
