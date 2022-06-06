import {
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import { Focus } from "./features/Focus";
import colors from "./utils/colors";
import { useState } from "react";
import { Timer } from "./features/Timer";
import { FocusHistory } from "./features/FocusHistory";

export default function App() {
  const [focusItem, setFocusItem] = useState(null);
  const [history, setHistory] = useState([])

  return (
    <SafeAreaView style={styles.container}>
      {!focusItem ? (
        <>
        <Focus setFocusItem={setFocusItem} />
        <FocusHistory history={history} />
        </>
      ) : (
        <Timer
          focusItem={focusItem}
          clearSubject={() => {
            setFocusItem(null);
          }}
          onTimerEnd={(focusItem) => setHistory([...history, focusItem])}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
