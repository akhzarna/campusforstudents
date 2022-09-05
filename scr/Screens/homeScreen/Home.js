import { Picker } from '@react-native-picker/picker';
import { View, TextInput,ReadMore, TouchableOpacity, Text, Image, ScrollView, ImageBackground, Pressable, Alert, FlatList } from "react-native"
import React, { Component } from 'react'
import { style } from './HomeStyle';
import CityModal from './CityModal';
import database from '@react-native-firebase/database';
import Universities from './Universities';
import firestore from "@react-native-firebase/firestore"
import styles from './UniversitiesStyle';
import { ActivityIndicator } from 'react-native';

import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-community/async-storage';

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

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.updateState = this.updateState.bind(this)
    this.SortByCity = this.SortByCity.bind(this)
    this.state={
      activityindicator:true,
      studylevel: "Select the study level", 
      discipline: "Select discipline", 
      city: '', 
      min:'',
      max:'',
      filters:{},
      showCityModal: false,
      universities:[],
      filter: [],
      firestoreData: [],
    }
  }

  updateState() {
    // Alert.alert('YES Man Alert');
    this.setState({ showCityModal: false })
  }

  SortByCity(cityName) {
    // console.log(cityName);
    this.setState({ showCityModal: false, city:cityName })
  }

  componentDidMount(){
  // Save something with key only. (using only a keyname but no id)
  // This key should be unique. This is for data frequently used.
  // The key and value pair is permanently stored unless you remove it yourself.
  storage.save({
    key: 'loginState', // Note: Do not use underscore("_") in key!
    data: {
      // from: 'some other site',
      // userid: 'some userid',
      // token: 'some token',
      login:'Not first time'
    },
 
    // if expires not specified, the defaultExpires will be applied instead.
    // if set to null, then it will never expire.
    expires: 1000 * 3600
  });

    this.setState({activityindicator:true});
    database()
    .ref('/university_recommendations/')
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
  

  ApplyFilters=()=>{
    var filters =  {}
    if(this.state.discipline!='Select discipline'){
      console.log("Idhar are = " , this.state.discipline);
      filters.discipline=this.state.discipline;
    }
    if(this.state.city!=''){
      filters.city=this.state.city;
    }
    if(this.state.min!=''){
      filters.min=this.state.min;
    }
    if(this.state.max!=''){
      filters.max=this.state.max;
    }
    console.log("filters are = " , filters);
    if(Number(this.state.min)<=Number(this.state.max)){
      this.props.navigation.navigate('Universities', {filters:filters, fromHomeScreen:true});
    }else{
      Alert.alert('Fee Min value should be less than max value');
    }
  }

  
  

  render() {  

    const render_text=()=>{
      switch(this.state.city){
        case '':
          return 'Location';
        default:
          return this.state.city;
      }

    }

    return (
      <ScrollView style={style.container} >
        <View style={style.subcontainer}>
          <View style={style.header}>

            <ImageBackground source={require("../../../assets/images/NavbarHome.png")} style={style.navbar}>
              <Text style={style.heading}> Campus Finder </Text>
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
                  this.setState({ discipline: itemValue })
                }
                selectedValue={this.state.discipline}
                >
                <Picker.Item label="Select discipline" value="Select discipline" color="#c14643" />
                <Picker.Item label="Computer Science" value="Computer Science" />
                {/* <Picker.Item label="Others" value="Others" /> */}
              </Picker>
            </View>

            <Text style={{ marginTop: 5 }}>Tuition Fee (Enter your budget for 1 semester fee)</Text>

            <View style={style.inputFieldWrapper}>
              <TextInput style={style.inputStyle} placeholder='Min' 
                placeholderTextColor="#c14643" 
                textAlign='center' 
                value={this.state.min} 
                onChangeText={(value)=>this.setState({min:value})}
                />
              <TextInput style={style.inputStyle} placeholder='Max' 
                placeholderTextColor="#c14643"
                textAlign='center' 
                value={this.state.max} 
                onChangeText={(value)=>this.setState({max:value})}/>
            </View>

            <TouchableOpacity onPress={() => this.setState({ showCityModal: true })}>
              <View style={style.citypicker}>
                <Text style={{ color: "#c14643", }}> {render_text()} </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={[style.searchBtn]} onPress={this.ApplyFilters}>
              <Text style={{ color: "white", textAlign: 'center', fontWeight: "bold" }} > Apply </Text>
            </TouchableOpacity>
          </View>

          {this.state.activityindicator?
        (<View style={[styles.horizontal]}>
          <ActivityIndicator size="large" />
          </View>):
        (null)
        }     
          <View style={style.recommendation}>
            <Text style={style.recommendationHeading}>Recommendations</Text>

            <View>
                  <FlatList
                    data={this.state.universities}
                    horizontal
                    renderItem={({ item }) => (     
                <TouchableOpacity onPress={() => this.props.navigation.navigate('UniversityDetail', { obj: item })}>
                  <View style={{flex:1,marginLeft:15,marginTop:12,marginBottom:10}}>   
                        <Image
                            style={{ flex: 0.5,height: 100, width: 100,resizeMode:'contain', borderRadius: 50}}
                            source={{uri: item.logo}} />
                        <View style={{flex:0.5,marginTop:12}}>   
                          <Text numberOfLines={1} style={{marginBottom:5,fontSize:16,width:150}}>{item.title}</Text>
                          {/* <Text style={{marginBottom:5,fontSize:16}}><Text style={[style.bold_text,item.admissions=='Open'?color:"green":'red']}>Admissions:  </Text>{item.admissions}</Text> */}
                          <Text style={[style.admissionText,style.bold_text, item.admissions=='Open' ? style.greenText : style.redText]}>Admissions: {item.admissions}</Text>
                          <Text style={{marginBottom:5,fontSize:16}}> <Text style={style.bold_text}>City:</Text>{item.city}</Text>
                      </View>
                      
                  </View>
                </TouchableOpacity>                

                  )}
                  />
            </View>
          </View>
          <CityModal show={this.state.showCityModal} update={this.updateState} sortCity={this.SortByCity} />
        </View>
      </ScrollView>
    )
  }
}