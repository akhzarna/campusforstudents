import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import Home from '../Screens/homeScreen/Home';
import AdvanceFilter from '../Screens/homeScreen/AdvanceFilter'
import Universities from '../Screens/homeScreen/Universities'
import UniversityDetail from '../Screens/homeScreen/UniversityDetail'
import CityModal from '../Screens/homeScreen/CityModal';
import FeeModal from '../Screens/filterModalScreens/FeeModal';
import MainIntro from '../Screens/introScreen/MainIntro';

export default function Route() {
  return (
    <NavigationContainer >
        <Stack.Navigator screenOptions={{
    headerShown: false
    }}>
            <Stack.Screen name="MainIntro" component={MainIntro} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="FeeModal" component={FeeModal} />
            <Stack.Screen name="AdvanceFilter" component={AdvanceFilter} />
            <Stack.Screen name="UniversityDetail" component={UniversityDetail} />
            <Stack.Screen name="Universities" component={Universities} />
            <Stack.Screen name="CityModal" component={CityModal} />
            {/* <Stack.Screen name="FeeModal" component={FeeModal} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}
