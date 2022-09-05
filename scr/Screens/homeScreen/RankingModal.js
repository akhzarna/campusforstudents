import { Text, View, Modal, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { Component } from 'react'
import { styles } from './RankingModalStyle'
import { StackActions } from "@react-navigation/native"
import { Provider ,Appbar,RadioButton} from 'react-native-paper';


const popAction = StackActions.pop();
export default class RankingModal extends Component {
    state = {
        checked: 'first',
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
        <Text style={{fontSize:20,fontWeight:"bold",marginLeft:10}}>Universities Ranking:</Text>
        <RadioButton.Item label="Top 10" 
          value="first"
          status={checked === 'first' ? 'checked' : 'unchecked'}
          onPress={() => { 
            this.setState({ checked: 'first', value: '10'}, ()=>{
              this.props.sortFilter(this.state.value);
            });
          }}
        />
        <RadioButton.Item  label="Top 20" 
          value="second"
          status={checked === 'second' ? 'checked' : 'unchecked'}
          onPress={() => { 
            this.setState({ checked: 'second', value: '20' }, ()=>{
              this.props.sortFilter(this.state.value);
            }) 
          }}
        />
        <RadioButton.Item  label="Top 50"
          value="third"
          status={checked === 'third' ? 'checked' : 'unchecked'}
          onPress={() => { 
            this.setState({ checked: 'third', value: '50' }, ()=>{
              this.props.sortFilter(this.state.value);
            }) 
          }}
        />
         <RadioButton.Item  label="Top 100"
          value="third"
          status={checked === 'fourth' ? 'checked' : 'unchecked'}
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


// import React, { Component,useState } from "react";
// import { styles } from './RankingModalStyle'
// import { StackActions } from "@react-navigation/native"
// import { Text, View,StyleSheet,Modal} from 'react-native';
// import { Provider ,Appbar,RadioButton} from 'react-native-paper';

// const RankingModal = () => {
// //   const popAction = StackActions.pop();
//   const [value, setValue] = React.useState('first');
//   const [modalVisible, setModalVisible] = useState(false);
  
  
//   return (        
    
//     <Modal transparent={true} visible={this.props.showRankingModal}>
//         <Provider>
//         <View style={styles.mainbox}>
//             <Text style={styles.title}>Select Universities Ranking</Text>
//             <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
//                 <RadioButton.Item label="First item" value="first" />
//                 <RadioButton.Item label="Second item" value="second" />
//                 <RadioButton.Item label="Third item" value="third" />
//             </RadioButton.Group>
//         </View>
//     </Provider>
//     </Modal>
    
   
//   );
// };


// export default RankingModal;




