import { Text, View, SafeAreaView, Image, FlatList, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import styles from './UniversitiesStyle';
import Separator from '../../Components/Separator'
import FeeModal from '../filterModalScreens/FeeModal';

import database from '@react-native-firebase/database';
import { firebase } from '@react-native-firebase/database';

export default class Universities extends Component {
  state = {
    show: false
    ,
    filters: [
      {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28baa",
        title: "Fee",
      },
      {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63f",
        title: "Ranking",
      },
      {
        id: "58694a0f-3da1-471f-bd96-145571e29d72g",
        title: "Merit",
      },
      {
        id: "58694a0f-3da1-471f-bd96-145571e29d72h",
        title: "Type",
      },
      {
        id: "58694a0f-3da1-471f-bd96-145571e29d72k",
        title: "Admission",
      },
      {
        id: "58694a0f-3da1-471f-bd96-145571e29d726",
        title: "Status",
      },
      {
        id: "58694a0f-3da1-471f-bd96-145571e29d72o",

        title: "Admission",
      },
      {
        id: "58694a0f-3da1-471f-bd96-145571e29d74",
        title: "Status",
      },
      {
        id: "58694a0f-3da1-471f-bd96-145571e29d76",
        title: "Location",
      },
    ],
    
    universities: [
      {
        id: "1",
        name: "University of Punjab",
        fee: 2000,
        admission: 'Open',
        location: "Lahore",
        Deadline: "22-3-2022"

      },
      {
        id: "2",
        name: "Comsats",
        fee: 12000,
        admission: 'Close',
        location: "Islamabad",
        Deadline: "22-3-2022"

      },
      {
        id: "3",
        name: "Comsats",
        fee: 12000,
        admission: 'Close',
        location: "Faislabad",
        Deadline: "22-3-2022"

      },
      {
        id: "4",
        name: "Comsats",
        fee: 12000,
        admission: 'Close',
        location: "Islamabad",
        Deadline: "22-3-2022"

      },
      {
        id: "5",
        name: "Fast",
        fee: 12000,
        admission: 'Close',
        location: "Lahore",
        Deadline: "22-3-2022"

      },
    ],
  }

  componentDidMount(){

    // console.log('Testing');
    // const reference1 = database().ref('/university_listing/');
    // // console.log(reference1);
    //
    // const reference = firebase
    // .app()
    // .database('https://campusfinder-6c74d-default-rtdb.asia-southeast1.firebasedatabase.app')
    // .ref('/university_listing/');
    //
    // console.log(reference);

    database()
    .ref('/university_listing/')
    .once('value')
    .then(snapshot => {
      console.log('User data: ', snapshot.val());
    });

    // database()
    // .ref('/university_listing/')
    // .once('value')
    // .then(snapshot => {
    //   console.log('User data: ', snapshot.val());
    // });

    // database()
    // .ref('/university_listing/')
    // .on('value', snapshot => {
    // console.log('User data: ', snapshot.val());
    // });

  // database()
  // .ref('/university_listing/')
  // .once('value')
  // .then(snapshot => {
  //   console.log('User data: ', snapshot.val());
  // });

  // const reference1 = database
  // .app()
  // .database('https://campusfinder-6c74d-default-rtdb.asia-southeast1.firebasedatabase.app/')
  // .ref('/university_listing/');
  //
  // console.log(reference1);

}

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.filterWrapper}>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={this.state.filters}
            renderItem={({ item }) => (
              <View key={item.key} style={styles.singleFilter}>
                <TouchableOpacity style={styles.filter} onPress={() => { this.setState({ show: true }) }}>
                  <Text>{item.title}</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
        <View style={styles.universitiesWrapper}>
          <FlatList
            data={this.state.universities}
            renderItem={({ item }) => (

              <View key={item.key} style={styles.singleUniversity} elevation={5}>
                <View style={styles.rankingTextWrapper}>
                  {/* <Text style={styles.rankingText}>Ranking {item.ranking}</Text> */}
                </View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('University')}>
                  <View style={{ flex: 0.85, flexDirection: "row" }}>
                    <View style={styles.imageWrapper} >
                      <Image
                        style={{ height: "75%", width: "100%", borderRadius: 50, marginLeft: 5 }}
                        source={require('../../../assets/images/COMSATS.jpeg')}
                      />
                    </View>
                    <View style={styles.universityDetailWrapper}>
                      <Text style={[styles.universityDetailText, styles.usiversityName]}>{item.name}</Text>
                      <Text style={styles.universityDetailText}>Fee : {item.fee}</Text>
                      <Text style={styles.universityDetailText}>Admission : {item.admission}</Text>

                      <View style={styles.locAndPhoneWrapper}>
                        <Text style={styles.universityDetailText}>Location : {item.location}</Text>
                        {/* <Text style={styles.phone}>Phone</Text> */}
                      </View>
                      <Text style={[styles.universityDetailText, styles.DeadlineText]}>Deadline : {item.Deadline}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            )}

          // ItemSeparatorComponent={() => <Separator />}
          />
        </View>
        <FeeModal show={this.state.show} />
      </SafeAreaView>
    )
  }
}
