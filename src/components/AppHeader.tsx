import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";

export default function AppHeader() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Restaurant</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F4CE14",
    // Sur le web, laisse la place à la barre de navigation du template
    paddingTop: Platform.OS === "web" ? 100 : 50,
    paddingBottom: 16,
  },
  title: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    color: "black",
  },
});
