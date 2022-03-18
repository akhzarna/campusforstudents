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

          </View>
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