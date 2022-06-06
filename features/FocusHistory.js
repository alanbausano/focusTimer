import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import colors from "../utils/colors";
import { fontSizes, spacing } from "../utils/spacing";

export const FocusHistory = ({ history }) => {
  if (!history || history.length === 0) {
    return (
      <View>
        <Text style={styles.title}>Things I focused on:</Text>
        <Text style={styles.title}>You haven't focused on anything yet.</Text>
      </View>
    );
  }
  const renderItem = ({ item }) => <Text style={styles.item}>-{item}</Text>;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Things I focused on:</Text>
      <FlatList data={history} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.md,
  },
  title: {
    color: colors.white,
    fontSize: fontSizes.md,
    padding: spacing.md,
  },
  item: {
    fontSize: fontSizes.md,
    color: colors.white,
    paddingTop: spacing.sm,
  },
});
