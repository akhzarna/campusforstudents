import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import Home from '../Screens/homeScreen/Home';
import AdvanceFilter from '../Screens/homeScreen/AdvanceFilter'
import Universities from '../Screens/homeScreen/Universities'
import SingleUniversity from '../Screens/homeScreen/SingleUniversity'

export default function Route() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="AdvanceFilter" component={AdvanceFilter} />
            <Stack.Screen name="Universities" component={Universities} />
            <Stack.Screen name="University" component={SingleUniversity} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
