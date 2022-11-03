import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MyText from './UI/MyText'
import RecentMeal from './RecentMeal'

const RecentMealsSection = () => {
  return (
    <View style={styles.container}>
      <MyText style={{fontSize: 20, marginBottom: 12}}>Histori Makanan</MyText>
      <RecentMeal />
      <RecentMeal />
    </View>
  )
}

export default RecentMealsSection

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 12,
  }
})