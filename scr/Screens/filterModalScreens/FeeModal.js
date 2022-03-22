import { Text, View, Modal , TextInput, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { styles } from './FeeModalStyle'
export default class FeeModal extends Component {
    render() {
        return (
            <Modal visible={true} transparent={true}>
                <View style={styles.container}>
                <View style={styles.subContainer}>
                <Text style={styles.txtStyle}>Sort By:</Text>
                <View style={styles.inputFieldWrapper}>
                   <Text style={styles.txtStyle}>From:</Text>
                   <TextInput style ={styles.inputStyle} placeholder='Minimum'/>
                   <Text style={styles.txtStyle}>To:</Text>
                   <TextInput style ={styles.inputStyle}  placeholder='Maximum'/>
                </View>
                <TouchableOpacity style={styles.ApplyBtn}><Text style={{color:"white" , fontSize:18}}>Apply Filter</Text></TouchableOpacity>
                </View>

                </View>
            </Modal>
        )
    }
}