import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const NextWasherSection = () => {
  let washer = "Reinhard"

  return (
    <View style={styles.container}>
      <Text style={styles.question}>
				Siapa yang cuci piring selanjutnya?
			</Text>
      <Text style={styles.answer}>
				{washer}
			</Text>
    </View>
  )
}

export default NextWasherSection

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 12,
    marginBottom: 20,
  },
  question: { fontFamily: "PlusJakartaSans-Bold", fontSize: 24 },
  answer: { fontFamily: "PlusJakartaSans-Regular", fontSize: 32 },
})