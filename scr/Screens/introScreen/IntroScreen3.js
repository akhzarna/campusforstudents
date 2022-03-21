import { Text, View, SafeAreaView,Image,TouchableWithoutFeedback } from 'react-native'
import React, { Component } from 'react'
import styles from './style'
import constStyle from '../../Constants/ConstantStyle'

export default class IntroScreen1 extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        
        <View style={styles.imageWrapper}>
        <Image
          style={styles.introImage}
          source={require('../../Assets/images/intro3.jpg')}
        />
        </View>

        <View style={styles.textIntroWrapper}>
          <Text style={styles.introText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting 
            industry. Lorem Ipsum has been the industry's standard dummy text 
            ever since the 1500s, when an unknown printer took a galley of type 
            and scrambled it to make a type specimen book. It has survived not 
            only five centuries, but also the leap into electronic typesetting, 
            remaining essentially unchanged. It was popularised in the 1960s with 
            the release of Letraset sheets containing Lorem Ipsum passages, and more 
            recently with desktop publishing software like Aldus PageMaker including v
            ersions of Lorem Ipsum.
          </Text>
        </View>

        <View style={styles.skipButtonWrapper}>
        <TouchableWithoutFeedback>
          <View style={[styles.skipButton,constStyle.buttonColor]}>
              <Text style={styles.btnText}>Skip</Text>
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