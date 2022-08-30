import { Text, View, SafeAreaView, TextInput, TouchableOpacity, ScrollView, } from 'react-native'
import React, { Component } from 'react'
import { Picker } from '@react-native-picker/picker';
import CityModal from './CityModal';
import styles from './AdvanceFilterStyle'
import constStyle from '../../Constants/ConstantStyle'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

// Status:'Public':'Private'
// Admission:'Open':'Closed'

export default class AdvanceFilter extends Component {
  constructor(props){
    super(props)
    this.updateState = this.updateState.bind(this)
    this.SortByCity = this.SortByCity.bind(this)
    this.state = {
      studylevel: "Select the study level",
      discipline: "Select discipline",
      ranking: "Select Ranking",
      city: "Select City",
      status: "Status",
      admissions: "Admissions",
      min: '',
      max: '',
      merit: '',
      showCityModal:false,
    }
  }
 
  updateState() {
    this.setState({ showCityModal: false })
  }
  SortByCity(cityName) {
    this.setState({ showCityModal: false, city:cityName })
  }
  
  // SortByAdmission() {    
  //   this.setState({ universities: this.state.filter.sort((a, b) => b.admissions - a.admissions) }) 
  // }
  // SortByRanking() {
  //   this.setState({ universities: this.state.filter.sort((a, b) => a.ranking - b.ranking) })
  // }

  ApplyFilters = () =>{ 
    var filters =  {}
    // if(this.state.level!="Select the study level"){
    //   filters.level=this.state.level;
    // }
    if(this.state.discipline!="Select discipline"){
      filters.discipline=this.state.discipline;
    }
    if(this.state.ranking!="Select Ranking"){
      filters.ranking=this.state.ranking;
    }
    if(this.state.city!="Select City"){
      filters.city=this.state.city;
    }
    if(this.state.admissions!="Admissions"){
      filters.admissions=this.state.admissions;
    }
    if(this.state.status!= "Status"){
      filters.status=this.state.status;
    }
    if(this.state.min!=''){
      filters.min=this.state.min;
    }
    if(this.state.max!=''){
      filters.max=this.state.max;
    }
    if(this.state.merit!=''){
      filters.merit=this.state.merit;
    }
    console.log("filters are = " , filters);
    // this.props.navigation.pop();
    this.props.navigation.navigate('Universities',{ filters: filters, fromAdvanceFilters:1});
  }

  setStateToItsOriginalPosition=()=>{
    this.setState
              ({ 
                studylevel: "Select the study level",
                discipline: "Select discipline",
                ranking: "Select Ranking",
                city: "Select City",
                status: "Status",
                admissions: "Admissions",
                min: '',
                max: '',
                merit: '',
                })
            }
  
  render() {
    // console.log("selectedState",this.selectedState)
    const render_text=()=>{
      switch(this.state.city){
        case '':
          return 'Location';
        default:
          return this.state.city;
      }

    }
    return (

<KeyboardAwareScrollView contentContainerStyle={{flex: 1}}>

<View style={styles.filtersWrapper}>
  <View style={styles.mainHeadingWrapper}>
    <Text style={styles.mainHeadingText}>Find Best Match</Text>
  </View>

  <View style={styles.filters}>

    <View style={styles.picker}>
      <Picker mode="dropdown"
        selectedValue={this.state.discipline}
        value={this.state.discipline}
        onValueChange={(itemValue, itemIndex) =>
          this.setState({ discipline: itemValue })}
      >
        <Picker.Item label="Select discipline" value="Select discipline" color="#c14643" />
        <Picker.Item label="Computer Science" value="Computer Science" />
      </Picker>
    </View>
    {/* City  Modal: */}
    <View style={styles.picker}>
        <TouchableOpacity style={{flex:1.0, justifyContent:'center', marginLeft:10}} onPress={() => this.setState({ showCityModal: true })}>
        {/* <View style={styles.cityPicker}> */}
          <Text style={{ 
            color: "#c14643",
            }}> {render_text()} </Text>
        {/* </View> */}
      </TouchableOpacity>
    </View>

    <View style={styles.picker}>
      <Picker mode="dropdown"
        selectedValue={this.state.ranking}
        onValueChange={(itemValue, itemIndex) =>
          this.setState({ ranking: itemValue })}
      >
        <Picker.Item label="Select Ranking" value="Select Ranking" color="#c14643" />
        <Picker.Item label="Top 10" value="10" />
        <Picker.Item label="Top 20" value="20" />
        <Picker.Item label="Top 50" value="50" />
        <Picker.Item label="Top 100" value="100" />
      </Picker>
    </View>
    <View style={styles.picker}>
      <Picker mode="dropdown"
        selectedValue={this.state.admissions}
        onValueChange={(itemValue, itemIndex) =>
          this.setState({ admissions: itemValue })}
      >
        <Picker.Item label="Admissions" value="Admissions" color="#c14643" />
        <Picker.Item label="Open" value="1" />
        <Picker.Item label="Closed" value="0" />

      </Picker>
    </View>

    <View style={styles.picker}>
      <Picker mode="dropdown"
        selectedValue={this.state.status}
        onValueChange={(itemValue, itemIndex) =>
          this.setState({ status: itemValue })}
      >
        <Picker.Item label="Status" value="Status" color="#c14643" />
        <Picker.Item label="Public" value="1" />
        <Picker.Item label="Private" value="0" />
      </Picker>
    </View>

  </View>
</View>

 <CityModal show={this.state.showCityModal} update={this.updateState} sortCity={this.SortByCity} />

<View style={styles.inputFieldsWrapper}>
  <Text style={styles.inputFieldSectionText}>Tution Fee (Enter your budget for complete degree)</Text>
  <View style={styles.inputFeilds}>
    <TextInput
      style={styles.inputFeild}
      placeholder="Minimum"
      placeholderTextColor="black"
      onChangeText={(value) => this.setState({ min: value })}
      value={this.state.min}
    />
    <TextInput
      style={styles.inputFeild}
      placeholder="Maximum"
      placeholderTextColor="black"
      onChangeText={(value) => this.setState({ max: value })}
      value={this.state.max}

    />
    <TextInput
      style={styles.inputFeild}
      placeholder="%"
      placeholderTextColor="black"
      onChangeText={(value) => this.setState({ merit: value })}
      value={this.state.merit}
    />
  </View>
</View>

<View style={styles.btnWrapper}>
  <TouchableOpacity style={styles.resetBtn}
    onPress={this.setStateToItsOriginalPosition}> 
    <Text style={[styles.btnText, styles.resetBtntxt]}>Reset</Text>
  </TouchableOpacity>
  <TouchableOpacity style={[styles.applyBtn, constStyle.buttonColor]} onPress={this.ApplyFilters}
  >
    <Text style={styles.btnText}>Apply Filter</Text>
    </TouchableOpacity>
    
</View>        

</KeyboardAwareScrollView>


    )
  }
}