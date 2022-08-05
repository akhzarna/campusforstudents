
import { Picker } from '@react-native-picker/picker';
import { View, TextInput, TouchableOpacity, Text, Image, ScrollView, ImageBackground, Pressable, Alert } from "react-native"
import React, { Component } from 'react'
import { style } from './HomeStyle';
import CityModal from './CityModal';

export default class Home extends Component {
  state = {
    studylevel: "Becholars", 
    degreelevel: "Computer", 
    Degree: "Chemical Engineering", 
    City: "Lahore", 
    showCityModal: false
  };

  constructor(props) {
    super(props)
    this.updateState = this.updateState.bind(this)
  }

  updateState() {
    // Alert.alert('YES Man Alert');
    this.setState({ showCityModal: false })
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

            <View style={style.recommendationContainer}>
              <View >
                <Image style={style.campusImg} source={require('../../../assets/images/COMSATS.jpeg')} />
                <View >
                  <Text>Name:Comsats</Text>
                  <Text>Admissions:Open</Text>
                  <Text>Location:Lahore</Text>
                </View>
              </View>

              <View>
                <Image style={style.campusImg} source={require('../../../assets/images/COMSATS.jpeg')} />
                <View >
                  <Text>Name:Comsats</Text>
                  <Text>Admissions:Open</Text>
                  <Text>Location:Lahore</Text>
                </View>
              </View>

            </View>
          </View>
          <CityModal show={this.state.showCityModal} update={this.updateState} />
        </View>
      </ScrollView>
    )
  }
}
