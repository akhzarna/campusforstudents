import { Text, View, Modal, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { Component } from 'react'
import { styles } from './RankingModalStyle'
import { StackActions } from "@react-navigation/native"
import { Provider ,Appbar,RadioButton} from 'react-native-paper';

const popAction = StackActions.pop();

export default class DisciplineModal extends Component {
    state = {
        checked: '',
        value: '',
      };
    
    componentDidMount() {
        console.log('Did Mount is global.filters.discipline',global.filters.discipline);
        this.setState({ ruinPerformance: true,  checked: global.filters.discipline? global.filters.discipline: ''});
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
        <Text style={{fontSize:20,fontWeight:"bold",marginLeft:10}}>Select Discipline:</Text>
        <RadioButton.Item label="Computer Science" 
          value="first"
          status={global.filters.discipline? 'checked': 'unchecked'}
          onPress={() => { 
            this.setState({ checked: 'first', value: 'Computer Science'}, ()=>{
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
