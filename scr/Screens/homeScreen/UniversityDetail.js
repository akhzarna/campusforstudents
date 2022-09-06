import { Text, View, ScrollView,FlatList, Image,TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import styles from './SingleUniversityStyle'
import Seperator from '../../Components/Separator';
import { Linking } from 'react-native';

import database from '@react-native-firebase/database';

export default class SingleUniversity extends Component {

  state = {
    university:{},
    menu : [
        {
          id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
          title: "Major",
          imageUrl:require('../../../assets/images/intro2.jpg')
        },
        {
          id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
          title: "Scholarships",
          imageUrl:require('../../../assets/images/intro2.jpg')
        },
        {
          id: "58694a0f-3da1-471f-bd96-145571e29d72",
          title: "Merit Calculator",
          imageUrl:require('../../../assets/images/intro3.jpg')
        },
        {
          id: "58694a0f-3da1-471f-bd96-145571e29d72",
          title: "Closing Merit",
          imageUrl:require('../../../assets/images/intro2.jpg')
        },
        {
          id: "58694a0f-3da1-471f-bd96-145571e29d72",
          title: "Review",
          imageUrl:require('../../../assets/images/intro2.jpg')
        },
        {
          id: "58694a0f-3da1-471f-bd96-145571e29d72",
          title: "Status",
          imageUrl:require('../../../assets/images/intro3.jpg')
        },
      ],
    }

  componentDidMount(){
      // this.setState({university:this.props.route.params.id});
      // var indexfordata = '/university_detail/' + this.props.route.params.id;
      // console.log('indexfordata == ' , indexfordata);
      // database()
      // .ref(indexfordata)
      // .on('value', snapshot => {
      //   console.log('Detail Data is ::: ', snapshot.val());
      //   this.setState({university:snapshot.val()});
      // });

      console.log('Global',global.title);
  }
  
  dialCall = (number) => {
    number=this.props.route.params.obj.contact;
    let phoneNumber = '';
    if (Platform.OS === 'android') { phoneNumber = `tel:${number}`; }
    else {phoneNumber = `telprompt:${number}`; }
    Linking.openURL(phoneNumber);
 };

 handleClick = () => {
  Linking.canOpenURL(this.props.route.params.obj.web).then(supported => {
    if (supported) {
      Linking.openURL(this.props.route.params.obj.web);
    } else {
      console.log("Don't know how to open URI: " + this.props.route.params.obj.web);
    }
  });
};


  render() {
    
    return (
      <ScrollView style={styles.container}>
            {/* header image */}
        <View style={styles.pictureWrapper}>
           {/* <Image
             style={{height:"100%",width:"100%"}}
             source={require('../../../assets/images/uni1.jpg')}
           /> */}
           <Image
            style={{height:"100%",width:"100%"}}
            source={{ uri: `${this.props.route.params.obj.logo}` }}
           />
       </View>
            {/* University name heading after picture */}
        <View style={styles.headerWrapper}>
          <Text style={styles.headerText}> {this.props.route.params.obj.title} </Text>
        </View>

          {/* University details like type,status, Ranking */}
        <View style={styles.detailsWrapper}>
          <View style={styles.detail}>
            <Text style={styles.detailText1}>Type</Text>
            <Text style={styles.detailText2}>{this.props.route.params.obj.type}</Text>
        </View>
        <View style={styles.verticalSeperator}></View>
          <View style={styles.detail}>
            <Text style={styles.detailText1}>Status</Text>
            <Text style={styles.detailText2}>{this.props.route.params.obj.status?'Public':'Private'}</Text>
          </View>
          <View style={styles.verticalSeperator}></View>
            <View style={styles.detail}>
              <Text style={styles.detailText1}>Ranking</Text>
              <Text style={styles.detailText2}>{this.props.route.params.obj.ranking}</Text>
            </View>
          </View>

          <Seperator />

             {/* University details like Location,fee, Admission */}
          <View style={styles.detailsWrapper}>
            <View style={styles.detail}>
              <Text style={styles.detailText1}>Location</Text>
              <Text style={styles.detailText2}>{this.props.route.params.obj.city}</Text>
            </View>
            <View style={styles.verticalSeperator}></View>
            <View style={styles.detail}>
              <Text style={styles.detailText1}>Fee</Text>
              <Text style={styles.detailText2}>{this.props.route.params.obj.fee}</Text>
            </View>
            <View style={styles.verticalSeperator}></View>
            <View style={styles.detail}>
              <Text style={styles.detailText1}>Admission</Text>
              <Text style={[styles.detailText2,styles.greenColor]}>{this.props.route.params.obj.admissions?'Open':'Closed'}</Text>
            </View>
          </View>

            {/* university Address */}
          <View style={styles.addressWrapper}>
            <View style={styles.seperatorWrapper}>
              <Seperator />
            </View>
            <View style={styles.DetailWrapper}>
              <Text style={styles.addressText1}>Addess:</Text>
              <Text style={styles.addressText2}>{this.props.route.params.obj.map.address}</Text>
            </View>
          </View>

            {/* website link and map link */}
          <View style={styles.mapWrapper}>
            <View style={styles.seperatorWrapper}>
              <Seperator />
            </View>
            <View style={styles.detailLinksWrapper}>
              <View style={styles.linkIconWrapper}>
              <Image
                style={{height:"100%",width:"100%",resizeMode: "contain"}}
                source={require('../../../assets/images/map.png')}
           />
              </View>
              <View style={styles.linkTextWrapper}>
                <TouchableOpacity >
                  <Text onPress={() => Linking.openURL('google.navigation:q=100+101')} style={styles.linksStyles}>See On Map</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.uniWebWrapper}>
            <View style={styles.seperatorWrapper}>
              <Seperator />
            </View>
            <View style={styles.detailLinksWrapper}>
              <View style={styles.linkIconWrapper}>
              <Image
                style={{height:"100%",width:"100%",resizeMode: "center"}}
                source={require('../../../assets/images/website.png')}
              />
              </View>
              <View style={styles.linkTextWrapper}>
                <TouchableOpacity onPress={this.handleClick}>
                  <Text style={styles.linksStyles}>{this.props.route.params.obj.web}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.mapWrapper}>
            <View style={styles.seperatorWrapper}>
              <Seperator />
            </View>
            <View style={styles.detailLinksWrapper}>
              <View style={styles.linkIconWrapper}>
              <Image
                style={{height:"100%",width:"100%",resizeMode: "contain"}}
                source={require('../../../assets/images/deadline-icon.jpg')}
           />
              </View>
              <View style={styles.linkTextWrapper}>
                <TouchableOpacity>
                  <Text style={{color:"red",fontSize:16}}> Deadline:  {this.props.route.params.obj.deadline} </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
                   {/* Call-Button: */}
          <View style={styles.mapWrapper}>
            <View style={styles.seperatorWrapper}>
              <Seperator />
            </View>
            <View style={styles.detailLinksWrapper}>
              <View style={styles.linkIconWrapper}>
              <Image
                style={{height:"100%",width:"100%",resizeMode: "contain"}}
                source={require('../../../assets/images/call-icon.jpg')}
           />
              </View>
              <View style={styles.linkTextWrapper}> 
                <TouchableOpacity onPress={() => this.dialCall()}>
                  
                  <Text
                   style={styles.linksStyles}>{this.props.route.params.obj.contact}</Text>
                </TouchableOpacity>
              </View>
            </View> 
          </View>

          <View style={{height:1}}>
              <Seperator />
          </View>

      </ScrollView>

    )
  }
}



 {/* menu heading section*/}
//  <View style={styles.menu}>
//  <View style={styles.menuHeadingWrapper}>
//      <Text style={styles.headerText}>Menu</Text>
//  </View>


//        {/* menu  section*/}
//    <FlatList
//      nestedScrollEnabled={true}
//      data={this.props.route.params.obj.menu}
//      numColumns={3}
//      renderItem={({item})=>(
//        <View style={styles.menuIcon}>
//        <View style={styles.menuIconWrapper}>
//          <Image
//            style={{height:"90%",width:"45%",borderRadius: 50}}
//            source={{uri: item.url}}
//          />
//        </View>
//        <View style={styles.menuIconText}>
//          <Text>{item.title}</Text>
//        </View>
//      </View>
//      )}
//      style={{height:"100%"}}
//    />
// </View>
