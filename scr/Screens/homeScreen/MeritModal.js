import { Text, View, Modal, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { Component } from 'react'
import { style } from './MeritModalStyle'
import { StackActions } from "@react-navigation/native"
const popAction = StackActions.pop();

export default class MeritModal extends Component {
    state = {
        merit: 0,
        // max: 0
    }

    componentDidMount() {
        this.setState({ ruinPerformance: true });
    }
    render() {

        return (

            <Modal transparent={true} visible={this.props.show} >
                <View style={style.container}>
                    <View style={style.subContainer}>
                        <TouchableOpacity onPress={this.props.update}
                            style={style.cancelImgStyle}>
                            <Image style={style.cancelImg} source={require("../../../assets/images/cancelcross.png")} />
                        </TouchableOpacity>
                        <Text style={[style.txtStyle]}>Sort By:</Text>
                        <View style={style.inputFieldWrapper}>
                            <Text style={style.txtStyle}>Merit in %:</Text>
                            <TextInput style={style.inputStyle} placeholder='Minimum' value={this.state.merit.toString()} onChangeText={(value) => this.setState({ merit: value })} />
                        </View>
                        <TouchableOpacity
                            onPress={() => this.props.sortFilter(this.state.merit)}
                            style={style.ApplyBtn} >
                            <Text style={{ color: "white", fontSize: 18 }}>Apply Filter</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            
        )
    }
}