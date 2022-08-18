import { Text, View, SafeAreaView, TextInput, TouchableOpacity, ScrollView, } from 'react-native'
import React, { Component } from 'react'
import { Picker } from '@react-native-picker/picker';
import styles from './AdvanceFilterStyle'
import constStyle from '../../Constants/ConstantStyle'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'

export default class AdvanceFilter extends Component {
  state = {
    Value: 'Select',
    level: "Select Study Level",
    ProgramName: "Program Name (Degree Name)",
    ranking: "Select Ranking",
    city: "Select City",
    type: "Select Type",
    status: "Select Status",
    min: 0,
    max: 0,
    percentage: "",

  }

  SortByAdmission() {    
    this.setState({ universities: this.state.filter.sort((a, b) => b.admissions - a.admissions) }) 
  }
  SortByRanking() {
    this.setState({ universities: this.state.filter.sort((a, b) => a.ranking - b.ranking) })
  }

  ApplyFilters=()=>{
    console.log(this.state.level);
    console.log(this.state.ProgramName);
    console.log(this.state.ranking);
    console.log(this.state.city);
    console.log(this.state.type);
    console.log(this.state.status);
    console.log(this.state.min);
    console.log(this.state.max);
    console.log(this.state.percentage);

    this.props.navigation.pop();
 }
  
  render() {
    // console.log("selectedState",this.selectedState)
    return (
      <KeyboardAwareScrollView style={styles.container}>
        <View style={styles.filtersWrapper}>
          <View style={styles.mainHeadingWrapper}>
            <Text style={styles.mainHeadingText}>Find Best Match</Text>
          </View>

          <View style={styles.filters}>

            < View style={styles.picker}>
              <Picker mode="dropdown"
                selectedValue={this.state.level}
                value={this.state.level}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({ level: itemValue })}
              >
              
                <Picker.Item label="Select Study Level" />
                <Picker.Item label="BS" value="BS" />
                <Picker.Item label="MS" value="MS" />

              </Picker>

            </View>
            <View style={styles.picker}>
              <Picker mode="dropdown"
                selectedValue={this.state.ProgramName}
                value={this.state.ProgramName}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({ ProgramName: itemValue })}
              >
                <Picker.Item label="Program Name (Degree Name)" />
                <Picker.Item label="BS Software Engineering" value="BS Software Engineering" />
                <Picker.Item label="Bs Chemical Engineering" value="Bs Chemical Engineering" />
                <Picker.Item label="Bs Computer Science" value="Bs Computer Science" />
                <Picker.Item label="Bs Electrcal Engineering" value="Bs Electrcal Engineering" />
              </Picker>
            </View>

            <View style={styles.picker}>

              <Picker mode="dropdown"
                selectedValue={this.state.city} 
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({ city: itemValue })}
              >
                <Picker.Item label="City" />
                <Picker.Item label="Lahore" value="Lahore" />
                <Picker.Item label="Karachi" value="Karachi" />
                <Picker.Item label="Peshawar" value="Peshawar" />
                <Picker.Item label="Islamabad" value="Islamabad" />
              </Picker>
            </View>


            <View style={styles.picker}>
              <Picker mode="dropdown"
                selectedValue={this.state.ranking}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({ ranking: itemValue })}
              >
                <Picker.Item label="Select Ranking" />
                <Picker.Item label="Top 10" value="Top 10" />
                <Picker.Item label="Top 20" value="Top 20" />
                <Picker.Item label="Top 50" value="Top 50" />
                <Picker.Item label="Top 100" value="Top 100" />
              </Picker>
            </View>
            <View style={styles.picker}>
              <Picker mode="dropdown"
                selectedValue={this.state.type}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({ type: itemValue })}
              >
                <Picker.Item label="Type" />
                <Picker.Item label="Goverment" value="Goverment" />
                <Picker.Item label="Private" value="Private" />

              </Picker>
            </View>

            <View style={styles.picker}>
              <Picker mode="dropdown"
                selectedValue={this.state.status}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({ status: itemValue })}
              >
                <Picker.Item label="Status" />
                <Picker.Item label="Admission Open" value="Admission Open" />
                <Picker.Item label="Admisson Close" value="Admisson Close" />
              </Picker>
            </View>



          </View>
        </View>

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
              onChangeText={(value) => this.setState({ percentage: value })}
              value={this.state.percentage}
            />
          </View>
        </View>


        <View style={[styles.btnWrapper]} elevation={0.4} >
          <TouchableOpacity style={styles.resetBtn}
            onPress={() => this.setState({ level: "", ProgramName: "", status: "", city: "", type: "", ranking: "", min: "", max: "", percentage: "" })}>
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