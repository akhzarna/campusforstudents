import { Text, View, Modal, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { Component } from 'react'
import { styles } from './FeeModalStyle'
import { StackActions } from "@react-navigation/native"
const popAction = StackActions.pop();
export default class FeeModal extends Component {
    state = {
        min: 0,
        max: 0
    }

    componentDidMount() {
        this.setState({ ruinPerformance: true });
    }
    render() {

        return (
            <Modal transparent={true} visible={this.props.show} >
                <View style={styles.container}>
                    <View style={styles.subContainer}>
                        <TouchableOpacity onPress={this.props.update}
                            style={styles.cancelImgStyle}>
                            <Image style={styles.cancelImg} source={require("../../../assets/images/cancelcross.png")} />
                        </TouchableOpacity>
                        <Text style={[styles.txtStyle]}>Sort By:</Text>
                        <View style={styles.inputFieldWrapper}>
                            <Text style={styles.txtStyle}>From:</Text>
                            <TextInput style={styles.inputStyle} placeholder='Minimum' value={this.state.min.toString()} onChangeText={(value) => this.setState({ min: value })} />
                            <Text style={styles.txtStyle}>To:</Text>
                            <TextInput style={styles.inputStyle} placeholder='Maximum' value={this.state.max.toString()} onChangeText={(value) => this.setState({ max: value })} />
                        </View>
                        <TouchableOpacity
                            onPress={() => this.props.sortFilter(this.state.min, this.state.max)}
                            style={styles.ApplyBtn} >
                            <Text style={{ color: "white", fontSize: 18 }}>Apply Filter</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </Modal>
        )
    }
}