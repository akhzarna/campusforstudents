import { Text, View,SafeAreaView } from 'react-native'
import React, { Component } from 'react'

import IntroScreen from './scr/Screens/introScreen/IntroScreen'
import IntroScreen1 from './scr/Screens/introScreen/IntroScreen1'
import IntroScreen2 from './scr/Screens/introScreen/IntroScreen2'
import IntroScreen3 from './scr/Screens/introScreen/IntroScreen3'
import AdvanceFilter from './scr/Screens/homeScreen/AdvanceFilter'
import Universities from './scr/Screens/homeScreen/Universities'
import SingleUniversity from './scr/Screens/homeScreen/SingleUniversity'
import Home from './scr/Screens/homeScreen/Home' 
import FontCheck from './scr/Screens/homeScreen/FontCheck'

export default class App extends Component {
  render() {
    return (
        /* <IntroScreen /> */ 
         /* <IntroScreen1 /> */
        /*  <IntroScreen2 /> */
         <IntroScreen3 />
       /*  <AdvanceFilter /> */
       /*  <FontCheck/> */
        /*  <Universities /> */
        /*  <Home/> */
         /* <SingleUniversity /> */
        
    )
  }
}