import { Text, View, StyleSheet, } from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider';
import React, { Component } from 'react'
import IntroScreen1 from "./IntroScreen1"
import IntroScreen2 from "./IntroScreen2"
import IntroScreen3 from "./IntroScreen3"

const slides = [
    {
      key: 1,
      screen: <IntroScreen1/>
    },
    {
      key: 2,
      screen: <IntroScreen2/>
    },
    {
      key: 3,
      screen: <IntroScreen3/>
    },
  ];

  const styles = StyleSheet.create({
    buttonCircle: {
      width: 40,
      height: 40,
      backgroundColor: 'rgba(0, 0, 0, .2)',
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    btnStyle:{
        textAlign:"center",
        backgroundColor:"#F75656" ,
        color:"white" , 
        paddingVertical:10 ,
        paddingHorizontal:35 , 
        borderRadius:10, 
        fontSize:20, 
        fontWeight:"bold",
        marginRight:"39%"
    },
    getStartedBtn:{
        marginRight:"30%",
        backgroundColor:"#8b0f1c" ,
    }


  });



export default class MainIntro extends Component {

    _renderItem = ({ item }) => {
        return (
          <View style={styles.slide}>
              {item.screen}
          </View>
        );
      }

      _onDone = () => {
        this.props.navigation.navigate("Home")
      }

  render() {
    return <AppIntroSlider 
    dotStyle={{ backgroundColor:"lightgrey",width:30, marginBottom:100}}
      activeDotStyle={{backgroundColor:"red", width:30, marginBottom:100}}
      renderItem={this._renderItem}
      
      data={slides} onDone={this._onDone} 
      renderDoneButton={()=>
        <View>
            <Text style={[styles.btnStyle, styles.getStartedBtn]} >Get Started</Text>
        </View>
    
    }

      renderNextButton={()=>
            <Text style={styles.btnStyle} >Skip</Text>
      
    
        }
      />;
  }
}