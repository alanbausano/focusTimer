import React, { useState } from "react";
import { View, StyleSheet, Text, Vibration } from "react-native";
import { ProgressBar } from "react-native-paper";
import { Countdown } from "../components/Countdown";
import { RoundedButton } from "../components/RoundedButton";
import colors from "../utils/colors";
import { spacing } from "../utils/spacing";
import { Timing } from "./Timing";
import { useKeepAwake } from "expo-keep-awake";

export const Timer = ({ focusItem, clearSubject, onTimerEnd }) => {
  useKeepAwake();
  const [started, setStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(0.1);
  const ONE_SECOND_IN_MS = 1000;

  const PATTERN = [
    0 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
  ];
  const onEnd = (reset) => {
    Vibration.vibrate(PATTERN);
    setStarted(false);
    setProgress(1);
    reset();
    onTimerEnd(focusItem);
  };
  return (
    <View style={styles.container}>
      <View style={styles.countDown}>
        <Countdown
          isPaused={!started}
          onProgress={setProgress}
          onEnd={onEnd}
          minutes={minutes}
        />
      </View>
      <View style={{ padding: spacing.sm }}>
        <Text style={styles.itemTitle}>Focusing on</Text>
        <Text style={styles.task}>{focusItem}</Text>
      </View>
      <View style={{ paddingTop: spacing.sm }}>
        <ProgressBar
          color={colors.progressBar}
          style={{ height: spacing.sm }}
          progress={progress}
        />
      </View>
      <View style={styles.timingWrapper}>
        <Timing onChangeTime={setMinutes} />
      </View>
      <View style={styles.buttonWrapper}>
        {started === true ? (
          <RoundedButton onPress={() => setStarted(false)} title={"pause"} />
        ) : (
          <RoundedButton onPress={() => setStarted(true)} title={"start"} />
        )}
      </View>
      <View style={styles.clearWrapper}>
        <RoundedButton onPress={clearSubject} title={"x"} size={40} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countDown: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
  },
  timingWrapper: {
    flex: 0.1,
    paddingTop: spacing.xxl,
    flexDirection: "row",
  },
  buttonWrapper: {
    flex: 0.3,
    flexDirection: "row",
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  clearWrapper: {
    flexDirection: "row",
    justifyContent: "center",
  },
  itemTitle: {
    color: colors.white,
    fontWeight: "bold",
    textAlign: "center",
  },
  task: {
    color: colors.white,
    textAlign: "center",
  },
});
