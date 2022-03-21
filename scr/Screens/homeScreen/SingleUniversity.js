import { Text, View, ScrollView,FlatList, Image,TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import styles from './SingleUniversityStyle'
import Seperator from '../../Components/Separator';

export default class SingleUniversity extends Component {

  state = {
    menu : [
        {
          id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
          title: "Major",
          imageUrl:require('../../Assets/images/intro1.jpg')
        },
        {
          id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
          title: "Scholarships",
          imageUrl:require('../../Assets/images/intro2.jpg')
        },
        {
          id: "58694a0f-3da1-471f-bd96-145571e29d72",
          title: "Merit Calculator",
          imageUrl:require('../../Assets/images/intro3.jpg')
        },
        {
          id: "58694a0f-3da1-471f-bd96-145571e29d72",
          title: "Closing Merit",
          imageUrl:require('../../Assets/images/intro1.jpg')
        },
        {
          id: "58694a0f-3da1-471f-bd96-145571e29d72",
          title: "Review",
          imageUrl:require('../../Assets/images/intro2.jpg')
        },
        {
          id: "58694a0f-3da1-471f-bd96-145571e29d72",
          title: "Status",
          imageUrl:require('../../Assets/images/intro3.jpg')
        },
      ],
    }

  render() {
    return (
      <ScrollView style={styles.container}>

         <View style={styles.pictureWrapper}>
           <Image
             style={{height:"100%",width:"100%"}}
             source={require('../../Assets/images/uni1.jpg')}
           />
         </View> 

          <View style={styles.headerWrapper}>
              <Text style={styles.headerText}>University of the punjap</Text>
          </View>


          <View style={styles.detailsWrapper}>
            <View style={styles.detail}>
              <Text style={styles.detailText1}>Type</Text>
              <Text style={styles.detailText2}>University</Text>
            </View>
            <View style={styles.horizontalSeperator}></View>
            <View style={styles.detail}>
              <Text style={styles.detailText1}>Status</Text>
              <Text style={styles.detailText2}>Public</Text>
            </View>
            <View style={styles.horizontalSeperator}></View>
            <View style={styles.detail}>
              <Text style={styles.detailText1}>Ranking</Text>
              <Text style={styles.detailText2}>1</Text>
            </View>
          </View>
          
          <Seperator />

          <View style={styles.detailsWrapper}>
            <View style={styles.detail}>
              <Text style={styles.detailText1}>Location</Text>
              <Text style={styles.detailText2}>Lahore</Text>
            </View>
            <View style={styles.horizontalSeperator}></View>
            <View style={styles.detail}>
              <Text style={styles.detailText1}>Fee</Text>
              <Text style={styles.detailText2}>250,000</Text>
            </View>
            <View style={styles.horizontalSeperator}></View>
            <View style={styles.detail}>
              <Text style={styles.detailText1}>Admission</Text>
              <Text style={[styles.detailText2,styles.greenColor]}>Open</Text>
            </View>
          </View>

          <View style={styles.addressWrapper}>
            <View style={styles.seperatorWrapper}>
              <Seperator />
            </View>
            <View style={styles.DetailWrapper}>
              <Text style={styles.addressText1}>Addess:</Text>
              <Text style={styles.addressText2}>Canal Rd, Quaid-i-Azam Campus, Lahore, Punjab</Text>
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
                source={require('../../Assets/images/map.png')}
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
                source={require('../../Assets/images/website.png')}
              />
              </View>
              <View style={styles.linkTextWrapper}>
                <TouchableOpacity>
                  <Text style={styles.linksStyles}>WWW.GOOGLE.COM</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          
          <View style={{height:1}}>
              <Seperator />
          </View>

          <View style={styles.menu}>
            <View style={styles.menuHeadingWrapper}>
                <Text style={styles.headerText}>Menu</Text>
            </View>

           
             
              <FlatList
                nestedScrollEnabled={true}
                data={this.state.menu}
                numColumns={3}
                renderItem={({item})=>(
                  <View style={styles.menuIcon}>
                  <View style={styles.menuIconWrapper}>
                    <Image
                      style={{height:"90%",width:"45%",borderRadius: 50}}
                      source={item.imageUrl}
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