import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View, Platform } from "react-native";
import RootNavigation from "./navigation/RootNavigation";

export default function App() {
  return (
    <SafeAreaView style={styles.droidSafeArea}>
      <RootNavigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  droidSafeArea: {
    flex: 1,

    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
});
