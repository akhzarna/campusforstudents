import { Text, View, SafeAreaView, Image, FlatList, TouchableOpacity, Alert, Modal, TextInput } from 'react-native'
import React, { Component } from 'react'
import styles from './UniversitiesStyle';
import Separator from '../../Components/Separator';
import FeeModal from '../filterModalScreens/FeeModal';
import CityModal from "./CityModal"
import database from '@react-native-firebase/database';
// import { firebase } from '@react-native-firebase/database';

export default class Universities extends Component {
  state = {
    show: false,
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
        fee: 15000,
        admission: 'Close',
        location: "Faislabad",
        Deadline: "22-3-2022"

      },
      {
        id: "4",
        name: "Comsats",
        fee: 16000,
        admission: 'Close',
        location: "Islamabad",
        Deadline: "22-3-2022"

      },
      {
        id: "5",
        name: "Fast",
        fee: 17000,
        admission: 'Close',
        location: "Lahore",
        Deadline: "22-3-2022"

      },
    ],
    filter: [],

  }

  componentDidMount() {
    database()
      .ref('/university_listing/')
      .on('value', snapshot => {
        console.log('User data: ', snapshot.val());
        this.setState({ universities: snapshot.val() });
        this.setState({ filter: this.state.universities });

      });
  }

  constructor(props) {
    super(props)
    this.updatesState = this.updatesState.bind(this)
    this.SortByFee = this.SortByFee.bind(this)
  }

  SortByMerit() {
    var t;
    this.state.filter.sort(function (a, b) {
      return t = a.merit - b.merit
    })
    this.setState({ universities: this.state.filter })

  }

  SortByStatus() {
    var t;
    t = this.state.filter
      .sort(function (a, b) {
        return a.admissions == "Closed"
      })
    this.setState({ universities: this.state.filter })

  }

  SortByRanking() {
    var t;
    this.state.filter.sort(function (a, b) {
      return t = a.ranking - b.ranking
    })
    this.setState({ universities: this.state.filter })

  }

  SortByFee(min, max) {
    this.setState({
      universities: this.state.filter.filter(function (a) {
        return a.fee >= min &&
          a.fee <= max;
      })
    })

    this.setState({ show: false })
    // Alert.alert("Hh")
    // console.log(this.state.universities)

  }

  updatesState() {
    this.setState({ show: false })
  }
  showModal() {
    this.setState({ show: true })
  }

  render() {
    console.log(this.state.universities)
    return (
      <SafeAreaView style={styles.container}>

        <View style={styles.header} elevation={5}>
          <Text style={styles.headerTxt}>150</Text>
          <Text style={styles.headerTxt}>institutes in Lahore</Text>
        </View>

        <View style={styles.filterWrapper}>
          <TouchableOpacity style={styles.filter} onPress={() => this.props.navigation.navigate("AdvanceFilter")}>
            <Text>Filters</Text>
          </TouchableOpacity>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={this.state.filters}
            renderItem={({ item }) => (
              <View key={item.key} style={styles.singleFilter}>
                {/* onPress={() => { this.setState({ show: true }) }} */}
                <TouchableOpacity style={styles.filter} onPress={() => {
                  if (item.title == "Merit") {
                    this.SortByMerit();
                    Alert.alert("hello")
                  }
                  else if (item.title == "Ranking") {
                    this.SortByRanking();
                  }
                  else if (item.title == "Fee") {
                    this.showModal();
                  }
                  else if (item.title == "Status") {
                    this.SortByStatus();
                  }

                }}>
                  <Text >{item.title}</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>


        <View style={styles.universitiesWrapper}>
          <FlatList
            data={this.state.universities}
            renderItem={({ item }) => (

              <View key={item.key} style={styles.singleUniversity} elevation={4}>
                <View style={styles.rankingTextWrapper}>
                  {/* <Text style={styles.rankingText}>Ranking {item.ranking}</Text> */}
                </View>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('University', { id: item.key })}>
                  <View style={{ flex: 0.85, flexDirection: "row" }}>
                    <View style={styles.imageWrapper} >
                      <Image
                        style={{ height: "75%", width: "100%", borderRadius: 50, marginLeft: 5 }}
                        source={require('../../../assets/images/COMSATS.jpeg')}
                      />
                    </View>
                    <View style={styles.universityDetailWrapper}>
                      <Text style={[styles.universityDetailText, styles.usiversityName]}>{item.title}</Text>
                      <Text style={styles.universityDetailText}>Fee : {item.fee}</Text>
                      <Text style={styles.universityDetailText}>Ranking : {item.ranking}</Text>
                      <Text style={styles.universityDetailText}>Admission : {item.admissions}</Text>
                      <Text style={styles.universityDetailText}>Merit : {item.merit}</Text>
                      <View style={styles.locAndPhoneWrapper}>
                        <Text style={styles.universityDetailText}>Location : {item.location}</Text>
                        {/* <Text style={styles.phone}>Phone</Text> */}
                      </View>
                      <Text style={[styles.universityDetailText, styles.DeadlineText]}>Deadline : {item.deadline}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            )}

          // ItemSeparatorComponent={() => <Separator />}
          />
        </View>

        <FeeModal show={this.state.show} update={this.updatesState} sortFilter={this.SortByFee} />
      </SafeAreaView>
    )
  }
}


