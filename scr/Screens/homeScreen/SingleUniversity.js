import { Text, View, ScrollView,FlatList, Image,TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import styles from './SingleUniversityStyle'
import Seperator from '../../Components/Separator';

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
      console.log('University Detail is = ', this.props.route.params.university_detail);
      this.setState({university:this.props.route.params.university_detail});

  }

  render() {
    return (
      <ScrollView style={styles.container}>
            {/* header image */}
        <View style={styles.pictureWrapper}>
           <Image
             style={{height:"100%",width:"100%"}}
             source={require('../../../assets/images/uni1.jpg')}
           />
       </View>
            {/* University name heading after picture */}
        <View style={styles.headerWrapper}>
          <Text style={styles.headerText}>University of The Punjap</Text>
        </View>

          {/* University details like type,status, Ranking */}
        <View style={styles.detailsWrapper}>
          <View style={styles.detail}>
            <Text style={styles.detailText1}>Type</Text>
            <Text style={styles.detailText2}>{this.state.university.type}</Text>
        </View>
        <View style={styles.verticalSeperator}></View>
          <View style={styles.detail}>
            <Text style={styles.detailText1}>Status</Text>
            <Text style={styles.detailText2}>{this.state.university.status}</Text>
          </View>
          <View style={styles.verticalSeperator}></View>
            <View style={styles.detail}>
              <Text style={styles.detailText1}>Ranking</Text>
              <Text style={styles.detailText2}>{this.state.university.ranking}</Text>
            </View>
          </View>

          <Seperator />

             {/* University details like Location,fee, Admission */}
          <View style={styles.detailsWrapper}>
            <View style={styles.detail}>
              <Text style={styles.detailText1}>Location</Text>
              <Text style={styles.detailText2}>{this.state.university.location}</Text>
            </View>
            <View style={styles.verticalSeperator}></View>
            <View style={styles.detail}>
              <Text style={styles.detailText1}>Fee</Text>
              <Text style={styles.detailText2}>{this.state.university.fee}</Text>
            </View>
            <View style={styles.verticalSeperator}></View>
            <View style={styles.detail}>
              <Text style={styles.detailText1}>Admission</Text>
              <Text style={[styles.detailText2,styles.greenColor]}>{this.state.university.admissions}</Text>
            </View>
          </View>

            {/* university Address */}
          <View style={styles.addressWrapper}>
            <View style={styles.seperatorWrapper}>
              <Seperator />
            </View>
            <View style={styles.DetailWrapper}>
              <Text style={styles.addressText1}>Addess:</Text>
              <Text style={styles.addressText2}>{this.state.university.address}</Text>
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
                <TouchableOpacity>
                  <Text style={styles.linksStyles}>See On Map</Text>
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
                <TouchableOpacity>
                  <Text style={styles.linksStyles}>{this.state.university.web}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={{height:1}}>
              <Seperator />
          </View>

            {/* menu heading section*/}
          <View style={styles.menu}>
            <View style={styles.menuHeadingWrapper}>
                <Text style={styles.headerText}>Menu</Text>
            </View>


                  {/* menu  section*/}
              <FlatList
                nestedScrollEnabled={true}
                data={this.state.university.menu}
                numColumns={3}
                renderItem={({item})=>(
                  <View style={styles.menuIcon}>
                  <View style={styles.menuIconWrapper}>
                    <Image
                      style={{height:"90%",width:"45%",borderRadius: 50}}
                      source={{uri: item.url}}
                    />
                  </View>
                  <View style={styles.menuIconText}>
                    <Text>{item.title}</Text>
                  </View>
                </View>
                )}
                style={{height:"100%"}}
              />
        </View>

      </ScrollView>

    )
  }
}
