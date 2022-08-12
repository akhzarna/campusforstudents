
import { Picker } from '@react-native-picker/picker';
import { View, TextInput, TouchableOpacity, Text, Image, ScrollView, ImageBackground, Pressable, Alert, FlatList } from "react-native"
import React, { Component } from 'react'
import { style } from './HomeStyle';
import CityModal from './CityModal';
import database from '@react-native-firebase/database';
import Universities from './Universities';
import firestore from "@react-native-firebase/firestore"
import styles from './UniversitiesStyle';

export default class Home extends Component {
  state = {
    studylevel: "Becholars", 
    degreelevel: "Computer", 
    Degree: "Chemical Engineering", 
    City: "Lahore", 
    showCityModal: false
  };

  UniState = {
    show: false,
    showCityModal: false,
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


    // universities: [
    //   {
    //     id: "1",
    //     name: "University of Punjab",
    //     fee: 2000,
    //     admission: 'Open',
    //     location: "Lahore",
    //     Deadline: "22-3-2022"

    //   },
    //   {
    //     id: "2",
    //     name: "Comsats",
    //     fee: 12000,
    //     admission: 'Close',
    //     location: "Islamabad",
    //     Deadline: "22-3-2022"

    //   },
    //   {
    //     id: "3",
    //     name: "Comsats",
    //     fee: 15000,
    //     admission: 'Close',
    //     location: "Faislabad",
    //     Deadline: "22-3-2022"

    //   },
    //   {
    //     id: "4",
    //     name: "Comsats",
    //     fee: 16000,
    //     admission: 'Close',
    //     location: "Islamabad",
    //     Deadline: "22-3-2022"

    //   },
    //   {
    //     id: "5",
    //     name: "Fast",
    //     fee: 17000,
    //     admission: 'Close',
    //     location: "Lahore",
    //     Deadline: "22-3-2022"

    //   },
    // ],
    filter: [],
    firestoreData: [],

  }

  uni=[
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
      name: "University of Punjab",
      fee: 2000,
      admission: 'Open',
      location: "Lahore",
      Deadline: "22-3-2022"
    },
    {
      id: "3",
      name: "University of Punjab",
      fee: 2000,
      admission: 'Open',
      location: "Lahore",
      Deadline: "22-3-2022"
    },

  ]
  

  constructor(props) {
    super(props)
    this.updateState = this.updateState.bind(this)
  }

  updateState() {
    // Alert.alert('YES Man Alert');
    this.setState({ showCityModal: false })
  }
  componentDidMount(){
    database()
    .ref('/university_recommendations/')
    .on('value', snapshot => {
      console.log('User data: ', snapshot.val().length);
      this.setState({ universities: snapshot.val() });
      this.setState({ filter: this.state.universities });
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
  render() {
    return (
      <ScrollView style={style.container}  >
        <View style={style.subcontainer}>
          <View style={style.header}>

            <ImageBackground source={require("../../../assets/images/NavbarHome.png")} style={style.navbar}>
              <Text style={style.heading}>Campus Finder City Name = {this.state.City} </Text>
              <Pressable onPress={() => this.props.navigation.navigate("AdvanceFilter")}>
                <View pointerEvents="none" style={{ width: "100%", paddingHorizontal: 90 }}>
                  <TextInput style={style.searchBar} placeholder='Find Best Match For You' placeholderTextColor="white" />
                </View>
              </Pressable>
            </ImageBackground>

            <View style={style.picker}>
              <Picker
                mode={'dropdown'}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({ studylevel: itemValue })
                }
                selectedValue={this.state.studylevel}
                >
                <Picker.Item label="Select the study Level" color="#c14643" />
                {/* <Picker.Item label="Masters" value="Masters" /> */}
                <Picker.Item label="Becholars" value="Becholars" />
              </Picker>

            </View>

            <View style={style.picker}>
              <Picker
                mode={'dropdown'}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({ degreelevel: itemValue })
                }
                selectedValue={this.state.degreelevel}
                >
                <Picker.Item label="Select the degree Level" color="#c14643" />
                <Picker.Item label="Computer" value="Computer" />
                {/* <Picker.Item label="Others" value="Others" /> */}
              </Picker>
            </View>

            <Text style={{ marginTop: 5 }}>Tuition Fee (Enter your budget for 1 semester fee)</Text>

            <View style={style.inputFieldWrapper}>
              <TextInput style={style.inputStyle} placeholder='Min' placeholderTextColor="#c14643" textAlign='center' />
              <TextInput style={style.inputStyle} placeholder='Max' placeholderTextColor="#c14643" textAlign='center' />
            </View>

            <TouchableOpacity onPress={() => this.setState({ showCityModal: true })}>
              <View style={style.citypicker}>
                <Text style={{ color: "#c14643", }}>Select City</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={[style.searchBtn]} onPress={() =>
              this.props.navigation.navigate('Universities')
            }><Text style={{ color: "white", textAlign: 'center', fontWeight: "bold" }} >Apply</Text></TouchableOpacity>

          </View>

          <View style={style.recommendation}>
            <Text style={style.recommendationHeading}>Recommendations</Text>

   
                <View>
                  <FlatList
                    data={this.state.universities}
                    numColumns={2}
                    renderItem={({ item }) => (
                     <View style={{flex:1}}>   
                      <Image
                            style={{ flex: 0.5,height: 200, width: 200, resizeMode:'contain', borderRadius: 50, }}
                            source={{uri: item.logo,}} />
                      <View style={{flex:0.5}}>   
                        <Text> <Text style={style.bold_text}>Name:</Text>  {item.title}</Text>
                        <Text> <Text style={style.bold_text}>Fee:</Text> {item.fee}</Text>
                        <Text> <Text style={style.bold_text}>Admissions: </Text>{item.admissions}</Text>
                        <Text> <Text style={style.bold_text}> City: </Text>{item.city}</Text>
                        <Text> <Text style={style.bold_text}> Deadline:</Text> {item.deadline}</Text>
                      </View>

                      </View>
                    )}
                  />
      

            </View>
          </View>
          <CityModal show={this.state.showCityModal} update={this.updateState} />
        </View>
      </ScrollView>
    )
  }
}


{/* <View style={{margin:10, alignItems:'center'}}>   
                        <Image style={style.campusImg} source={require('../../../assets/images/COMSATS.jpeg')} />
                        <Text style={{alignContent:'center'}}>{element.item.name}</Text>
                        <Text style={{textAlign:'center'}}>{element.item.fee}</Text>
                        <Text style={{textAlign:"center"}}>{element.item.admission}</Text>
                        <Text>{element.item.location}</Text>
                        <Text>{element.item.Deadline}</Text>
                      </View> */}