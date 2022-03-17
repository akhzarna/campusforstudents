import { Text, View,SafeAreaView,TextInput,TouchableWithoutFeedback } from 'react-native'
import React, { Component } from 'react'
import {Picker} from '@react-native-picker/picker';
import styles from './AdvanceFilterStyle'

export default class AdvanceFilter extends Component {
  state = {
      Value : 'Select'
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>

        <View style={styles.filtersWrapper}>

          <View style={styles.mainHeadingWrapper}>
            <Text style={styles.mainHeadingText}>Find Best Match</Text>
          </View>

          <View style={styles.filters}>
            
            <Picker  style={{height:"100%",width:"100%"}}>
              <Picker.Item label="Select Study Level" />
              <Picker.Item label="JavaScript" value="js" />
              <Picker.Item label="JavaScript" value="js" />
              <Picker.Item label="JavaScript" value="js" />
              <Picker.Item label="JavaScript" value="js" />
            </Picker>
          
            
            {/* <Picker  style={{ width: 350}}>
              <Picker.Item label="Select Study Level" />
              <Picker.Item label="JavaScript" value="js" />
              <Picker.Item label="JavaScript" value="js" />
              <Picker.Item label="JavaScript" value="js" />
              <Picker.Item label="JavaScript" value="js" />
            </Picker> */}
            {/* <Picker selectedValue={'java'} style={{height: 80, width: 350}}>
              <Picker.Item label="Select Study Level" value="java" />
              <Picker.Item label="JavaScript" value="js" />
            </Picker>
            <Picker selectedValue={'java'} style={{height: 80, width: 350}}>
              <Picker.Item label="Select Study Level" value="java" />
              <Picker.Item label="JavaScript" value="js" />
            </Picker>
            <Picker selectedValue={'java'} style={{height: 80, width: 350}}>
              <Picker.Item label="Select Study Level" value="java" />
              <Picker.Item label="JavaScript" value="js" />
            </Picker> */}
            
            {/* <Picker selectedValue={'java'} style={{height: 50, width: 350,borderWidth:2,borderColor:"red"}}>
              <Picker.Item label="Select Study Level" value="java" />
              <Picker.Item label="JavaScript" value="js" />
            </Picker>

            <Picker selectedValue={'java'} style={{height: 100, width: 350}}>
              <Picker.Item label="Program Name(Degree Name)" value="java" />
              <Picker.Item label="JavaScript" value="js" />
            </Picker>
            
            <Picker selectedValue={'java'} style={{height: 100, width: 350}}>
              <Picker.Item label="Select City" value="java" />
              <Picker.Item label="JavaScript" value="js" />
            </Picker>

            <Picker selectedValue={'java'} style={{height: 100, width: 350}}>
              <Picker.Item label="Select Ranking" value="java" />
              <Picker.Item label="JavaScript" value="js" />
            </Picker> */}

          </View>
        {/* <Picker selectedValue={'java'} style={{height: 100, width: 100}}>
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker> */}
        </View>

        <View style={styles.inputFieldsWrapper}>
          <Text style={styles.inputFieldSectionText}>Tution Fee (Enter your budget for complete degree)</Text>
          <View style={styles.inputFeilds}>
                <TextInput
                    style={styles.inputFeild}
                    placeholder="Minimum"
                    placeholderTextColor="black"
                />
                <TextInput
                    style={styles.inputFeild}
                    placeholder="Maximum"
                    placeholderTextColor="black" 
                />
                <TextInput
                    style={styles.inputFeild}
                    placeholder="%"
                    placeholderTextColor="black"
                />
            </View>
        </View>

        <View style={styles.btnWrapper}>
        <TouchableWithoutFeedback>
          <View style={styles.applyFilterButton}>
              <Text style={styles.btnText}>Apply Filter</Text>
          </View>
        </TouchableWithoutFeedback>
        </View>
      </SafeAreaView>
    )
  }
}