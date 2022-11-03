import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MyText = ({style, children, ...props}) => {
  return (
    <Text {...props} style={{fontFamily: "PlusJakartaSans-Regular", ...style}}>{children}</Text>
  )
}

export default MyText