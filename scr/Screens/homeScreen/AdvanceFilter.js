import { Text, View,SafeAreaView,TextInput,TouchableWithoutFeedback } from 'react-native'
import React, { Component } from 'react'
import {Picker} from '@react-native-picker/picker';
import styles from './AdvanceFilterStyle'

export default class AdvanceFilter extends Component {
  state = {
    selectedLanguage : 'Select'
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.filtersWrapper}>
        <Picker></Picker>
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