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
          style={styles.introImage}
          source={require('../../../assets/images/introo2.png')}
        />
        </View>

        <View style={styles.textIntroWrapper}>
          <Text style={styles.introText}>
          LOOKING FOR 
          </Text>
          <Text style={styles.detailTextSecond}>UNIVERSITIES</Text> 
          <Text style={styles.detailText}> IN YOUR</Text> 
            <Text style={styles.detailTextSecond}>CITY</Text> 
      
        </View>

        {/* <View style={styles.skipButtonWrapper}>
        <TouchableWithoutFeedback>
          <View style={[styles.skipButton,constStyle.buttonColor]}>
              <Text style={[styles.btnText]}>Skip</Text>
          </View>
        </TouchableWithoutFeedback>
        </View> */}

        <View style={styles.navigationIntroWrapper}>
          
          <View style={[styles.navCircle,styles.navCircleMargin]}></View>
          <View style={styles.navCircleBorderBorder}>
            <View style={[styles.navCircle,styles.navCircleBackGround]}></View>
          </View>
          <View style={[styles.navCircle,styles.navCircleMargin]}></View>
          
        </View>
        
      </SafeAreaView>
    )
  }
}