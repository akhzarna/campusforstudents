import { ActivityIndicator, Text, View, SafeAreaView, Image, FlatList, TouchableOpacity, Alert, Modal, TextInput } from 'react-native'
import React, { Component } from 'react'
import styles from './UniversitiesStyle';
import Separator from '../../Components/Separator';
import FeeModal from '../filterModalScreens/FeeModal';
import CityModal from "./CityModal"
import database from '@react-native-firebase/database';
// import { firebase } from '@react-native-firebase/database';
import firestore from "@react-native-firebase/firestore"
import { DocumentSnapshot, QuerySnapshot } from '@firebase/firestore';

export default class Universities extends Component {
  constructor(props) {
    super(props)
    this.updatesState = this.updatesState.bind(this)
    this.SortByFee = this.SortByFee.bind(this)
    this.SortByCity = this.SortByCity.bind(this)

    this.state = {
      activityindicator: true,
      showFeeModal: false,
      showCityModal: false,
      filter: [],
      firestoreData: [],
      filters: [
        {
          id: "58694a0f-3da1-471f-bd96-145571e29d72o",
          title: "Admission",
          status:-1,
        },
        {
          id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28baa",
          title: "Fee",
          status:-1,
        },
        {
          id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63f",
          title: "Ranking", 
          status:-1,
        },
        {
          id: "58694a0f-3da1-471f-bd96-145571e29d76",
          title: "Location",
          status:-1,
        },
        { 
          id: "58694af1-3da1-471f-bd96-145571e29d76",
          title: "Type",
          status:-1,
          // Public or Private
        }
  
        // {
        //   id: "58694a0f-3da1-471f-bd96-145571e29d72g",
        //   title: "Merit",
        // },
        // {
        //   id: "58694a0f-3da1-471f-bd96-145571e29d72h",
        //   title: "Type",
        // },
  
      ],
    }
  }

  componentDidMount() {
    database()
    // .ref('/university_listing/')
    // limitToFirst(3)
    // testing
      .ref('/zeeshan_listing/').limitToFirst(5)
      .on('value', snapshot => {
        console.log('User data: ', snapshot.val().length);
        this.setState({ universities: snapshot.val() });
        this.setState({ filter: this.state.universities });
        this.setState({activityindicator:false});
      });

    var newArr = [];
    firestore()
      .collection('universities').get().then(querySnapshot => {
        querySnapshot.forEach(documentSnapshot => {
          newArr.push(documentSnapshot.data())
        })
      }).then(testing => {
        this.setState({ firestoreData: newArr });
        // console.log(this.state.firestoreData);
      })
  }

  SortByFireStore() {
    this.setState({ universities: this.state.firestoreData })
  }

  SortByAdmission() {    
    this.setState({ universities: this.state.filter.sort((a, b) => b.admissions - a.admissions) })
  }

  SortByFee(min, max) {
    this.setState({ universities: this.state.filter.filter((item)=> item.fee>=min && item.fee<=max).sort((a,b)=>a.fee - b.fee) })
    this.setState({ showFeeModal: false })
  }

  SortByRanking() {
    this.setState({ universities: this.state.filter.sort((a, b) => a.ranking - b.ranking) })
  }

  SortByCity(cityName) {
    console.log('My Log', cityName)
    this.setState({ showCityModal: false })
  }

  updatesState() {
    this.setState({ showCityModal: false })
    this.setState({ showFeeModal: false })
  }

  showFeeModal() {
    this.setState({ showFeeModal: true })
  }

  showCityModal() {
    this.setState({ showCityModal: true })
  }

  loadMore=()=>{
    console.log('loadMore', this.state.universities.length);
    // database()
    //   .ref('/zeeshan_listing/').limitToFirst(this.state.universities.length+10)
    //   .on('value', snapshot => {
    //     console.log('loadMore data: ', snapshot.val().length);
    //     this.setState({ universities: snapshot.val() });
    //     this.setState({ filter: this.state.universities });
    //     this.setState({activityindicator:false});
    //   });
  }

  render() {
    // console.log(this.state.universities)
    return (
      <SafeAreaView style={styles.container}>
      
      <View style={styles.header} elevation={5}>
          <Text style={styles.headerTxt}>Institutes in Lahore</Text>
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
                  // Admission, Fee, Ranking Location and Type
                  if (item.title == "Admission") {
                    this.SortByAdmission();
                  }
                  else if (item.title == "Fee") {
                    this.showFeeModal();
                  }
                  else if (item.title == "Ranking") {
                    this.SortByRanking();
                  }
                  else if (item.title == "Location") {
                    this.showCityModal();
                    // this.SortByFireStore();
                  }
                  // else if (item.title == "Status") {
                  //   this.SortByStatus();
                  // }
                }}>
                  <Text >{item.title}</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
        {this.state.activityindicator?
        (<View style={[styles.horizontal]}>
          <ActivityIndicator size="large" />
          </View>):
        (null)
        }
        
        <View style={styles.universitiesWrapper}>
          <FlatList
            data={this.state.universities}
            onEndReached={this.loadMore}
            renderItem={({ item }) => (
              <View key={item.key} style={styles.singleUniversity} elevation={4}>
                <View style={styles.rankingTextWrapper}>
                  {/* <Text style={styles.rankingText}>Ranking {item.ranking}</Text> */}
                </View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('University', { obj: item })}>
                  <View style={{ flex: 0.85, flexDirection: "row" }}>
                    <View style={styles.imageWrapper} >
                      <Image
                        style={{ height: "75%", width: "100%", resizeMode:'contain', borderRadius: 50, marginLeft: 5 }}
                        source={{uri: item.logo,}}
                      />
                    </View>
                    <View style={styles.universityDetailWrapper}>
                      <Text style={[styles.universityDetailText, styles.usiversityName]}>{item.title}</Text>
                      <Text style={styles.universityDetailText}>Fee: {item.fee}</Text>

                      <Text style={styles.universityDetailText}>Ranking: { item.ranking === 100000 ? "N/A": item.ranking } </Text>

                      <Text style={styles.universityDetailText}>Admission: {item.admissions?'Open':'Closed'}</Text>
                      <Text style={styles.universityDetailText}>Merit: {item.merit}</Text>
                      <View style={styles.locAndPhoneWrapper}>
                      <Text style={styles.universityDetailText}>Location: {item.city}</Text>
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

        <FeeModal show={this.state.showFeeModal} update={this.updatesState} sortFilter={this.SortByFee} />
        <CityModal show={this.state.showCityModal} update={this.updatesState} sortCity={this.SortByCity} />
      
      </SafeAreaView>
    )
  }
}
