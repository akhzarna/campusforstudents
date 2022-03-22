
import { Picker } from '@react-native-picker/picker';
import { View, TextInput, TouchableOpacity, Text, Image, ScrollView, ImageBackground } from "react-native"
import React, { Component } from 'react'
import { style } from './HomeStyle';
import CityModal from './CityModal';
import constStyle from '../../Constants/ConstantStyle';


export default class Home extends Component {
  state = {
    level: "Becholars", Degree: "Chemical Engineering", City: "Lahore", show: false
  };



  render() {
    return (
      <ScrollView style={style.container}  >
        <View style={style.subcontainer}>
          <View style={style.header}>

            <ImageBackground source={require("../../Assets/images/NavbarHome.png")} style={style.navbar}>
              <Text style={style.heading}>Campus Finder</Text>
              <TextInput style={style.searchBar} placeholder='Find Best Match For You' placeholderTextColor="white" />
            </ImageBackground>

            <View style={style.picker}>
              <Picker
                mode={'dropdown'}
                
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({ level: itemValue })
                }>
                <Picker.Item label="Select the study Level"  color= "#c14643"/>
                <Picker.Item label="Masters" value="Masters" />
                <Picker.Item label="Becholars" value="Becholars" />
              </Picker>
            
            </View>

            <View style={style.picker}>
              <Picker
                mode={'dropdown'}
              
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({ level: itemValue })
                }>
                <Picker.Item label="Select the study Level" color= "#c14643" />
                <Picker.Item label="Masters" value="Masters" />
                <Picker.Item label="Becholars" value="Becholars" />
              </Picker>
            </View>

            <Text style={{marginTop:5}}>Tuition Fee (Enter your budget for complete Degree)</Text>
            <View style={style.inputFieldWrapper}>
              <TextInput style={style.inputStyle} placeholder='Min' placeholderTextColor="#c14643" textAlign='center' />
              <TextInput style={style.inputStyle} placeholder='Max' placeholderTextColor="#c14643" textAlign='center' />
            </View>

           

            <View style={[style.picker,style.citypicker]} >
              <Picker
                selectedValue={this.state.City}
                mode={'dropdown'}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({ City: itemValue })
                }>
                <Picker.Item label="Select City" color= "#c14643"/>
                <Picker.Item label="Karachi" value="Karachi" />
                <Picker.Item label="Islamabad" value="Islamabad" />
                <Picker.Item label="Peshawar" value="Peshawar" />
              </Picker>
            </View>

            <TouchableOpacity style={[style.searchBtn]} onPress={() => this.setState({ show: true })}>
              <Text style={{ color: "white", textAlign: 'center', fontWeight:"bold" }} >Apply</Text>
            </TouchableOpacity>

          </View>

          <View style={style.recommendation}>
            <Text style={style.recommendationHeading}>Recommendations</Text>

            <View style={style.recommendationContainer}>
              <View >
                <Image style={style.campusImg} source={require('../../Assets/images/COMSATS.jpeg')} />
                <View >
                  <Text>Name:Comsats</Text>
                  <Text>Admissions:Open</Text>
                  <Text>Location:Lahore</Text>
                </View>
              </View>

              <View>
                <Image style={style.campusImg} source={require('../../Assets/images/COMSATS.jpeg')} />
                <View >
                  <Text>Name:Comsats</Text>
                  <Text>Admissions:Open</Text>
                  <Text>Location:Lahore</Text>
                </View>
              </View>

            </View>
          </View>

        </View>

        <CityModal show={this.state.show} />
      </ScrollView>


    )
  }
}
