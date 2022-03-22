import { Text, View, SafeAreaView,Image } from 'react-native'
import React, { Component } from 'react'
import styles from './style'


export default class IntroScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.logoWrapper}>
        <Image
          style={styles.logo}
          source={require('../../../assets/images/COMSATS.jpeg')}
        />
        </View>

        <View style={styles.textLogoWrapper}>
          <Text style={styles.mainHeading}>Campus Finder</Text>
        </View>
      </SafeAreaView>
    )
  }
}