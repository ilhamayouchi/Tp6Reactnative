import React from "react";
import { View, StyleSheet } from "react-native";

import WelcomeScreen from "../components/WelcomeScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <WelcomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EDEFEE",
    // Sur le web, la barre « Expo Starter » flotte par-dessus le contenu
    paddingTop: 80,
  },
});
