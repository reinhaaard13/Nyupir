import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const Header = () => {
	return (
		<View style={styles.container}>
      <MaterialCommunityIcons name="dishwasher" size={24} color="black" />
			<Text style={styles.title}>Nyuci Piring</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
    // backgroundColor: "#f00",
    width: "100%",
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
  },
	title: { fontFamily: "PlusJakartaSans-Bold", fontSize: 20, marginLeft: 8 },
});
export default Header;
