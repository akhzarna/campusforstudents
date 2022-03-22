
import { Picker } from '@react-native-picker/picker';
import { View, TextInput, TouchableOpacity, Text, Image, ScrollView } from "react-native"
import React, { Component } from 'react'
import { style } from './HomeStyle';
import CityModal from './CityModal';

export default class Home extends Component {
  state = { level: "Becholars" , Degree:"Chemical Engineering", City:"Lahore",  show:false
};



  render() {
    return (
      <ScrollView style={style.container}  >
        <View style={style.header}>
          <Text style={style.heading}>Campus Finder</Text>
          <TextInput style={style.searchBar} placeholder='Find Best Match For You' />

          <View style={style.picker}>
            <Picker
            mode={'dropdown'}
              selectedValue={this.state.level}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({ level: itemValue })
              }>
              <Picker.Item label="Select the study Level" />
              <Picker.Item label="Masters" value="Masters" />
              <Picker.Item label="Becholars" value="Becholars" />
            </Picker>
          </View>

          <View style={style.picker}>
            <Picker
               mode={'dropdown'}
              selectedValue={this.state.Degree}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({ Degree: itemValue })
              }>
              
              <Picker.Item label="Program name (Degree Name)"  />
              <Picker.Item label="Software Engineering" value="Software Engineering"/>
              <Picker.Item label="Chemical Engineering" value="Chemical Engineering" />
              <Picker.Item label="Electrical Engineering" value="Electrical Engineering" />
            </Picker>
          </View>

          <View style={style.picker} >
            <Picker
              selectedValue={this.state.City}
              mode={'dropdown'}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({ City: itemValue })
              }>
              <Picker.Item label="Select City"  />
              <Picker.Item label="Karachi" value="Karachi" />
              <Picker.Item label="Islamabad" value="Islamabad" />
              <Picker.Item label="Peshawar" value="Peshawar" />
            </Picker>
          </View>
          <TouchableOpacity onPress={()=>this.setState({ show: true })}><Text style={style.searchBtn} >Search</Text></TouchableOpacity>
      
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
        <View style={style.footer}>
         <TouchableOpacity>
         <Text style={style.footerElements}>Help</Text>
         </TouchableOpacity> 

         <TouchableOpacity>
          <Text style={style.footerElements}>WhatsApp Us</Text>
         </TouchableOpacity>

         <TouchableOpacity>
          <Text style={style.footerElements}>Call Us</Text>
         </TouchableOpacity>
         <TouchableOpacity>
          <Text style={style.footerElements}>Invite Friends</Text>
         </TouchableOpacity>
        </View>
        <CityModal show ={this.state.show} />
      </ScrollView>


    )
  }
}
