import React from "react";
import { View, StyleSheet } from "react-native";

import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";
import LoginScreen from "../components/LoginScreen";
// import WelcomeScreen from "../components/WelcomeScreen";

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <AppHeader />
        <LoginScreen />
        {/* Pour tester l'écran d'accueil, remplacez par : <WelcomeScreen /> */}
      </View>
      <View style={styles.footerContainer}>
        <AppFooter />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333333",
  },
  footerContainer: {
    backgroundColor: "#333333",
  },
});
