import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { Appearance } from "react-native";
import { Colors } from "@/constants/Colors";
import React from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = Appearance.getColorScheme();

  const theme = colorScheme === "dark" ? Colors.dark : Colors.light;

  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      // setTimeout(() => {
      SplashScreen.hideAsync();
      // }, 1000);
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: theme.headerBackground },
        headerTintColor: theme.text,
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen
        name="index"
        options={{ headerShown: false, title: "Home" }}
      />
      <Stack.Screen
        name="Menu"
        options={{ headerShown: true, title: "Coffee Shop Menu" }}
      />
      <Stack.Screen
        name="contact"
        options={{ headerShown: true, title: "Contact Us" }}
      />
      <Stack.Screen name="+not-found" options={{ headerShown: false }} />
      <StatusBar style="auto" />
    </Stack>
  );
}
