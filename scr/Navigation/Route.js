import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import Home from '../Screens/homeScreen/Home';
import AdvanceFilter from '../Screens/homeScreen/AdvanceFilter'
import Universities from '../Screens/homeScreen/Universities'
import SingleUniversity from '../Screens/homeScreen/SingleUniversity'
import CityModal from '../Screens/homeScreen/CityModal';
import FeeModal from '../Screens/filterModalScreens/FeeModal';

export default function Route() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="FeeModal" component={FeeModal} />
            <Stack.Screen name="AdvanceFilter" component={AdvanceFilter} />
            <Stack.Screen name="University" component={SingleUniversity} />
            <Stack.Screen name="Universities" component={Universities} />
            <Stack.Screen name="CityModal" component={CityModal} />
            {/* <Stack.Screen name="FeeModal" component={FeeModal} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}
