import { Text, View, SafeAreaView, TextInput, TouchableOpacity, ScrollView, Alert} from 'react-native'
import React, { Component } from 'react'
import { Picker } from '@react-native-picker/picker';
import CityModal from './CityModal';
import styles from './AdvanceFilterStyle'
import constStyle from '../../Constants/ConstantStyle'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
// import { LogBox } from 'react-native';

// Status:'Public':'Private'
// Admission:'Open':'Closed'

export default class AdvanceFilter extends Component {
  constructor(props){
    super(props)
    this.updateState = this.updateState.bind(this)
    this.SortByCity = this.SortByCity.bind(this)
    this.state = {
      studylevel: "Select the study level",
      discipline: global.filters.discipline? global.filters.discipline: "Select discipline",
      ranking: global.filters.ranking? global.filters.ranking: "Select Ranking",
      city: global.filters.city? global.filters.city:"Select City",
      status: global.filters.status? global.filters.status:"Status",
      admissions: global.filters.admissions? global.filters.admissions:"Admissions",
      min: global.filters.min? global.filters.min:'',
      max: global.filters.max? global.filters.max:'',
      merit: global.filters.merit? global.filters.merit:'',
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
    // var filters =  {}
    // if(this.state.level!="Select the study level"){
    //   filters.level=this.state.level;
    // }
    if(this.state.discipline!="Select discipline"){
      global.filters.discipline=this.state.discipline;
    }
    if(this.state.ranking!="Select Ranking"){
      global.filters.ranking=this.state.ranking;
    }
    if(this.state.city!="Select City"){
      global.filters.city=this.state.city;
    }
    if(this.state.admissions!="Admissions"){
      global.filters.admissions=this.state.admissions;
    }
    if(this.state.status!= "Status"){
      global.filters.status=this.state.status;
    }
    if(this.state.min!=''){
      global.filters.min=this.state.min;
    }
    if(this.state.max!=''){
      global.filters.max=this.state.max;
    }
    if(this.state.merit!=''){
      global.filters.merit=this.state.merit;
    }
    console.log("filters are = " , global.filters);
    // this.props.navigation.pop();
    if(Number(this.state.min)<=Number(this.state.max)){
      this.props.navigation.navigate('Universities',{ filters: global.filters, fromAdvanceFilters:1});
    }else{
      Alert.alert('Fee Min value should be less than max value');
    }
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
                },()=>{
                  global.filters={}
                })
            }
  
    componentDidMount(){
        // LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
        console.log('All filters are = ',global.filters);
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
          {(this.state.city=='Select City')? 
          <Text style={{ 
            color: "#c14643",
            fontSize:16,
            }}> {render_text()} 
            </Text>: 
          <Text style={{ 
            color: "black",
            fontSize:16,
            }}> {render_text()} 
          </Text>}
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
  <View style={styles.viewForMinMaxInputFields}>
    <Text style={styles.textTuition}> Tuition Fee (Enter your budget for complete degree)</Text>
      <TextInput
        style={styles.inputFieldLeft}
        placeholder="Minimum"
        placeholderTextColor="black"
        onChangeText={(value) => this.setState({ min: value })}
        value={this.state.min}
      />
      <TextInput
        style={styles.inputFieldRight}
        placeholder="Maximum"
        placeholderTextColor="black"
        onChangeText={(value) => this.setState({ max: value })}
        value={this.state.max}
      />
  </View>
  <View style={styles.viewForMeritInputFields}>
    <Text style={styles.textMerit}> Merit in % </Text>
    <TextInput
      style={styles.inputFieldMerit}
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