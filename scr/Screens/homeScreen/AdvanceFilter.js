import { Text, View, SafeAreaView, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { Component } from 'react'
import { Picker } from '@react-native-picker/picker';
import styles from './AdvanceFilterStyle'
import constStyle from '../../Constants/ConstantStyle'

export default class AdvanceFilter extends Component {
  state = {
    Value: 'Select'
  }
  render() {
    return (
   

      <SafeAreaView style={styles.container}>
        <View style={styles.filtersWrapper}>
          <View style={styles.mainHeadingWrapper}>
            <Text style={styles.mainHeadingText}>Find Best Match</Text>
          </View>

          <View style={styles.filters}>


            < View style={styles.picker}>

              <Picker mode="dropdown">
                <Picker.Item label="Select Study Level" />
                <Picker.Item label="BS" value="js" />
                <Picker.Item label="MS" value="js" />

              </Picker>

            </View>
            <View style={styles.picker}>
              <Picker mode="dropdown">
                <Picker.Item label="Program Name (Degree Name)" />
                <Picker.Item label="BS Software Engineering" value="js" />
                <Picker.Item label="Bs Chemical Engineering" value="js" />
                <Picker.Item label="Bs Computer Science" value="js" />
                <Picker.Item label="Bs Electrcal Engineering" value="js" />
              </Picker>
            </View>

            <View style={styles.picker}>

              <Picker mode="dropdown" >
                <Picker.Item label="City" />
                <Picker.Item label="Lahore" value="js" />
                <Picker.Item label="Karachi" value="js" />
                <Picker.Item label="Peshwar" value="js" />
                <Picker.Item label="Islamabad" value="js" />
              </Picker>
            </View>


            <View style={styles.picker}>
              <Picker mode="dropdown" >
                <Picker.Item label="Select Ranking" />
                <Picker.Item label="Top 10" value="js" />
                <Picker.Item label="Top 20" value="js" />
                <Picker.Item label="Top 50" value="js" />
                <Picker.Item label="Top 100" value="js" />
              </Picker>
            </View>
            <View style={styles.picker}>
              <Picker mode="dropdown">
                <Picker.Item label="Type" />
                <Picker.Item label="Goverment" value="js" />
                <Picker.Item label="Private" value="js" />

              </Picker>
            </View>

            <View style={styles.picker}>
              <Picker mode="dropdown">
                <Picker.Item label="Status" />
                <Picker.Item label="Admission Open" value="js" />
                <Picker.Item label="Admisson Close" value="js" />
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
          <TouchableOpacity onPress={() =>
        this.props.navigation.navigate('Universities')
      }>
            <View style={[styles.applyFilterButton,constStyle.buttonColor]}>
              <Text style={styles.btnText}>Apply Filter</Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
 
    )
  }
}