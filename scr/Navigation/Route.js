import React, {Component, useLayoutEffect} from 'react'
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

import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-community/async-storage';

var firsttime='';

const storage = new Storage({
  // maximum capacity, default 1000
  size: 1000,
 
  // Use AsyncStorage for RN apps, or window.localStorage for web apps.
  // If storageBackend is not set, data will be lost after reload.
  storageBackend: AsyncStorage, // for web: window.localStorage
 
  // expire time, default: 1 day (1000 * 3600 * 24 milliseconds).
  // can be null, which means never expire.
  defaultExpires: null,
 
  // cache data in the memory. default is true.
  enableCache: true,
 
  // if data was not found in storage or expired data was found,
  // the corresponding sync method will be invoked returning
  // the latest data.
  sync: {
    // we'll talk about the details later.
  }
});

// // Save something with key only. (using only a keyname but no id)
// // This key should be unique. This is for data frequently used.
// // The key and value pair is permanently stored unless you remove it yourself.
// storage.save({
//   key: 'loginState', // Note: Do not use underscore("_") in key!
//   data: {
//     // from: 'some other site',
//     // userid: 'some userid',
//     // token: 'some token',
//     login:'first time'
//   },
 
//   // if expires not specified, the defaultExpires will be applied instead.
//   // if set to null, then it will never expire.
//   expires: 1000 * 3600
// });

export default class Route extends Component {
  constructor(props){
    super(props);
    this.setState({
      test:'',
    });
  }

  doTask = async () => {
    // Some consuming task like fetch api or await calls
    
     // load
  await storage.load({
    key: 'loginState',

    // autoSync (default: true) means if data is not found or has expired,
    // then invoke the corresponding sync method
    autoSync: true,

    // syncInBackground (default: true) means if data expired,
    // return the outdated data first while invoking the sync method.
    // If syncInBackground is set to false, and there is expired data,
    // it will wait for the new data and return only after the sync completed.
    // (This, of course, is slower)
    syncInBackground: true,

    // you can pass extra params to the sync method
    // see sync example below
    syncParams: {
     extraFetchOptions: {
        // blahblah
      },
      someFlag: true
   }
  })
  .then(ret => {
  // found data go to then()
  firsttime='Not first time';
  console.log('Test Value is =', ret.login);
  //  this.setState({firsttime:'Not first time'});
  })
  .catch(err => {
  // any exception including data not found
  // goes to catch()
  // this.setState({firsttime:'first time'});
  firsttime='first time';
  console.log(err.message);
  switch (err.name) {
    case 'NotFoundError':
      // TODO;
      break;
    case 'ExpiredError':
      // TODO
      break;
  }
  });
    // await AsyncStorage.setItem("@ProductTour:key", "true");
    // await this.setState({name : "Infinitbility".toUpperCase() });
    
  }

  UNSAFE_componentWillMount(){
    console.log('kia yeh call ho ga ?');
    // this.doTask();
  }

  // componentDidMount(){
  //   this.timer = setInterval(
  //     () => this.setState({test:'YES MAN'}),
  //     5000,
  //   );
  // }

  render(){
  return (
    <NavigationContainer >
          {console.log('Hello NavigationContainer')}
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
}