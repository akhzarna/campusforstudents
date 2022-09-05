import { Text, View, Modal, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { Component } from 'react'
import { styles } from './RankingModalStyle'
import { StackActions } from "@react-navigation/native"
import { Provider ,Appbar,RadioButton} from 'react-native-paper';

const popAction = StackActions.pop();

export default class DisciplineModal extends Component {
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
        <Text style={{fontSize:20,fontWeight:"bold",marginLeft:10}}>Select Discipline:</Text>
        <RadioButton.Item label="Computer Science" 
          value="first"
          status={checked === 'first' ? 'checked' : 'unchecked'}
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




