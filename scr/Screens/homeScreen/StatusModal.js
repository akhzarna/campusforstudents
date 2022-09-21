import { Text, View, Modal, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { Component } from 'react'
import { style } from './StatusModalStyle'
import { StackActions } from "@react-navigation/native"
import { Provider ,Appbar,RadioButton} from 'react-native-paper';

const popAction = StackActions.pop();

export default class AdmissionsModal extends Component {
    state = {
        checked: '',
        value: '',
      };
    
    componentDidMount() {
        this.setState({ ruinPerformance: true });
    }
    
    render() {
        const { checked } = this.state;
        return ( 
        <Modal transparent={true} visible={this.props.show} >
          <View style={style.container}>
            <View style={style.subContainer}>            
          <TouchableOpacity  onPress={this.props.update}
              style={style.cancelImgStyle}>
            <Image style={style.cancelImg} source={require("../../../assets/images/cancelcross.png")} />
          </TouchableOpacity>
            <View>
        <Text style={{fontSize:20,fontWeight:"bold",marginLeft:10}}>Status:</Text>
        <RadioButton.Item label="Public" 
          value="first"
          status={global.filters.status === '1' ? 'checked' : 'unchecked'}
          onPress={() => { 
            this.setState({ checked: 'first', value: '1'}, ()=>{
              this.props.sortFilter(this.state.value);
            });
          }}
        />

        <RadioButton.Item label="Private" 
          value="first"
          status={global.filters.status === '0' ? 'checked' : 'unchecked'}
          onPress={() => { 
            this.setState({ checked: 'second', value: '0'}, ()=>{
              this.props.sortFilter(this.state.value);
            });
          }}
        />

      </View>
                    </View>
                </View>
            </Modal>
        )
    }
}