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
      filtersArray: [],
      firestoreData: [],
      allFilters: [
        {
          title: "Admission",
          status:-1,
          key:0,
        },{
          title: "Fee",
          status:-1,
          key:1,
        },{
          title: "Ranking", 
          status:-1,
          key:2,
        },{
          title: "Location",
          status:-1,
          key:3,
        },{ 
          title: "Status",
          status:-1,
          key:4,
        }
      ],
    }
  }

  componentDidMount() {
    database()
    // .ref('/university_listing/')
    // limitToFirst(3)
    // testing
      .ref('/zeeshan_listing/').limitToFirst(10)
      .on('value', snapshot => {
        console.log('User data: ', snapshot.val().length);
        this.setState({ universities: snapshot.val() });
        this.setState({ filtersArray: this.state.universities });
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
     
      this.focusListener = this.props.navigation.addListener('focus', () => {
        this.AppltAllFilters(this.props.route.params.filters);
      });
  }

  componentWillUnmount() {
    this.focusListener();
  }

  AppltAllFilters(filters){
      console.log('We are successfull',filters);
  }

  SortByFireStore() {
    this.setState({ universities: this.state.firestoreData })
  }

  SortByAdmission(item) {  
    console.log(item)  
    this.setState({ universities: this.state.filtersArray.sort((a, b) => b.admissions - a.admissions) })
  }

  SortByFee(min, max) {
    this.setState({ universities: this.state.filtersArray.filter((item)=> item.fee>=min && item.fee<=max).sort((a,b)=>a.fee - b.fee) })
    this.setState({ showFeeModal: false })
  }

  SortByRanking() {
    this.setState({ universities: this.state.filtersArray.sort((a, b) => a.ranking - b.ranking) })
  }

  SortByCity(cityName) {
    this.setState({ universities: this.state.filtersArray.filter((a) => a.city==cityName) })
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

  SortByStatus(){
      this.setState({ universities: this.state.filtersArray.sort((a, b) => b.status - a.status) })
  }

  loadMore=()=>{
    console.log('loadMore', this.state.universities.length);
    // database()
    //   .ref('/zeeshan_listing/').limitToFirst(this.state.universities.length+10)
    //   .on('value', snapshot => {
    //     console.log('loadMore data: ', snapshot.val().length);
    //     this.setState({ universities: snapshot.val() });
    //     this.setState({ filtersArray: this.state.universities });
    //     this.setState({activityindicator:false});
    //   });
  }

  render() {
    // console.log(this.state.universities)
    return (
      <SafeAreaView style={styles.container}>
      
      <View style={styles.header} elevation={5}>
          <Text style={styles.headerTxt}>Institutes</Text>
      </View>

        <View style={styles.filterWrapper}>
          <TouchableOpacity style={styles.filter} onPress={() => this.props.navigation.navigate("AdvanceFilter")}>
            <Text>Filters</Text>
          </TouchableOpacity>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={this.state.allFilters}
            renderItem={({ item }) => (
              <View key={item.key} style={styles.singleFilter}>
                {/* onPress={() => { this.setState({ show: true }) }} */}
                <TouchableOpacity style={styles.filter} onPress={() => {
                  if (item.title == "Admission") {
                    this.SortByAdmission(item);
                  }else if (item.title == "Fee") {
                    this.showFeeModal();
                  }else if (item.title == "Ranking") {
                    this.SortByRanking();
                  }else if (item.title == "Location") {
                    this.showCityModal();
                  }else if (item.title == "Status") {
                    this.SortByStatus();
                  }
                }}>
                  <Text>{item.title}</Text>
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
                <TouchableOpacity onPress={() => this.props.navigation.navigate('UniversityDetail', { obj: item })}>
                  <View style={{ flex: 0.85, flexDirection: "row" }}>
                    <View style={styles.imageWrapper} >
                      <Image
                        style={{ height: "75%", width: "100%", resizeMode:'contain', borderRadius: 50, marginLeft: 5 }}
                        source={{uri: item.logo,}}
                      />
                    </View>
                    <View style={styles.universityDetailWrapper}>
                      <Text style={[styles.universityDetailText, styles.usiversityName]}>{item.title}</Text>
                      <Text style={styles.universityDetailText}>Status: {item.status?'Public':'Private'}</Text>
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
