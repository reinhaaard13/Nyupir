import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import moment from 'moment'
import MyText from './UI/MyText'

const RecentMeal = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftSide}>
        <MyText>{moment().format("dddd, d MMMM YYYY")}</MyText>
        <MyText style={{fontFamily: "PlusJakartaSans-SemiBold", fontSize: 18}}>Mie Gacoan</MyText>
        <MyText>Reinhard Yang Cuci</MyText>
      </View>
      <Image source={require("../assets/avatars/reinhard.png")} style={styles.avatar} />
    </View>
  )
}

export default RecentMeal

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 12,
    height: 90,
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 4,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "hidden",
  },
  leftSide: {
    padding: 12,
  },
  avatar: {
    aspectRatio: 1,
    width: 120,
    translateX: 15
  }
})