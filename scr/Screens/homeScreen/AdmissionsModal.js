import { Text, View, Modal, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { Component } from 'react'
import { styles } from './RankingModalStyle'
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
          <View style={styles.container}>
            <View style={styles.subContainer}>            
          <TouchableOpacity  onPress={this.props.update}
              style={styles.cancelImgStyle}>
            <Image style={styles.cancelImg} source={require("../../../assets/images/cancel.png")} />
          </TouchableOpacity>
            <View>
        <Text style={{fontSize:20,fontWeight:"bold",marginLeft:10}}>Admissions:</Text>
        <RadioButton.Item label="Open" 
          value="first"
          status={global.filters.admissions === '1' ? 'checked' : 'unchecked'}
          onPress={() => { 
            this.setState({ checked: 'first', value: '1'}, ()=>{
              this.props.sortFilter(this.state.value);
            });
          }}
        />

        <RadioButton.Item label="Closed" 
          value="first"
          status={global.filters.admissions === '0' ? 'checked' : 'unchecked'}
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