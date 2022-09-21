import { Text, View, Modal, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { Component } from 'react'
import { style } from './RankingModalStyle'
import { StackActions } from "@react-navigation/native"
import { Provider ,Appbar,RadioButton} from 'react-native-paper';

const popAction = StackActions.pop();
export default class RankingModal extends Component {
    state = {
        checked: '',
        value: '',
      };
    
    componentDidMount() {
        this.setState({ ruinPerformance: true });
    }
    
    render() {
        // const { checked } = this.state;
        return ( 
        <Modal transparent={true} visible={this.props.show} >
          <View style={style.container}>
            <View style={style.subContainer}>            
          <TouchableOpacity  onPress={this.props.update}
              style={style.cancelImgStyle}>
            <Image style={style.cancelImg} source={require("../../../assets/images/cancelcross.png")} />
          </TouchableOpacity>
            <View>
        <Text style={{fontSize:20,fontWeight:"bold",marginLeft:10}}>Universities Ranking:</Text>
        <RadioButton.Item label="Top 10" 
          value="first"
          status={global.filters.ranking === '10' ? 'checked' : 'unchecked'}
          onPress={() => { 
            this.setState({ checked: 'first', value: '10'}, ()=>{
              this.props.sortFilter(this.state.value);
            });
          }}
        />
        <RadioButton.Item  label="Top 20" 
          value="second"
          status={global.filters.ranking === '20' ? 'checked' : 'unchecked'}
          onPress={() => { 
            this.setState({ checked: 'second', value: '20' }, ()=>{
              this.props.sortFilter(this.state.value);
            }) 
          }}
        />
        <RadioButton.Item  label="Top 50"
          value="third"
          status={global.filters.ranking === '50' ? 'checked' : 'unchecked'}
          onPress={() => { 
            this.setState({ checked: 'third', value: '50' }, ()=>{
              this.props.sortFilter(this.state.value);
            }) 
          }}
        />
         <RadioButton.Item  label="Top 100"
          value="third"
          status={global.filters.ranking === '100' ? 'checked' : 'unchecked'}
          onPress={() => { 
            this.setState({ checked: 'fourth', value: '100' }, ()=>{
              // console.log('Whic is selected', this.state.checked);
              this.props.sortFilter(this.state.value);
            }) 
          }}
        />
      </View>
                    </View>
                </View>
            </Modal>
        )
    }
}
