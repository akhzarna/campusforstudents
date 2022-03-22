import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FontCheck = () => {
  return (
    <View>
      <Text style ={styles.fonttest}>FontCheck</Text>
    </View>
  )
}

export default FontCheck

const styles = StyleSheet.create({
    fonttest:{
        fontSize:22,
        fontFamily:'Poppins_regular'
    }
})