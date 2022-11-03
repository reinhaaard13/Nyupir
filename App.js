import { useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useFonts } from "expo-font";

import * as SplashScreen from "expo-splash-screen";
import Header from "./components/Header";
import NextWasherSection from "./components/NextWasherSection";
import RecentMealsSection from "./components/RecentMealsSection";

SplashScreen.preventAutoHideAsync();

export default function App() {
	const [fontsLoaded] = useFonts({
		"PlusJakartaSans-Bold": require("./assets/fonts/PlusJakartaSans-Bold.ttf"),
		"PlusJakartaSans-ExtraBold": require("./assets/fonts/PlusJakartaSans-ExtraBold.ttf"),
		"PlusJakartaSans-ExtraLight": require("./assets/fonts/PlusJakartaSans-ExtraLight.ttf"),
		"PlusJakartaSans-Light": require("./assets/fonts/PlusJakartaSans-Light.ttf"),
		"PlusJakartaSans-Medium": require("./assets/fonts/PlusJakartaSans-Medium.ttf"),
		"PlusJakartaSans-Regular": require("./assets/fonts/PlusJakartaSans-Regular.ttf"),
		"PlusJakartaSans-SemiBold": require("./assets/fonts/PlusJakartaSans-SemiBold.ttf"),
	});

	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded) {
			await SplashScreen.hideAsync();
		}
	}, [fontsLoaded]);

	if (!fontsLoaded) {
		return null;
	}

	return (
		<SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
      <Header />
			<NextWasherSection />
      <RecentMealsSection />

			<StatusBar style="auto" />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		// justifyContent: 'start',
	},
});
