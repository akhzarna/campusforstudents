import { Text, View, SafeAreaView,Image,TouchableWithoutFeedback } from 'react-native'
import React, { Component } from 'react'
import styles from './style'
import constStyle from '../../Constants/ConstantStyle'

export default class IntroScreen1 extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
         <Image
          style={styles.blobDesign}
          source={require('../../../assets/images/b1.png')}
        />
        <Image
          style={styles.blobDesigntwo}
          source={require('../../../assets/images/b2.png')}
        />
        <View style={styles.imageWrapper}>
        <Image
          style={styles.introImageThird}
          source={require('../../../assets/images/introo3.png')}
        />
        </View>

        <View style={styles.textIntroWrapper}>
          <Text style={styles.introText}>
          FIND DETAIL ABOUT   
          </Text>
          <Text style={styles.detailTextSecond}>ADMISSION</Text> 
          <Text style={styles.detailText}> IN </Text> 
            <Text style={styles.detailTextSecond}>PAKISTAN</Text> 
        </View>

        <View style={styles.skipButtonWrapper}>
        <TouchableWithoutFeedback>
          <View style={styles.skipButton}>
              <Text style={styles.btnText}>GET STARTED </Text>
          </View>
        </TouchableWithoutFeedback>
        </View>

        <View style={styles.navigationIntroWrapper}>    
          <View style={[styles.navCircle,styles.navCircleMargin]}></View>
          <View style={[styles.navCircle,styles.navCircleMargin]}></View>
          <View style={styles.navCircleBorderBorder}>
            <View style={[styles.navCircle,styles.navCircleBackGround]}></View>
          </View>
        </View>
        
      </SafeAreaView>
    )
  }
}