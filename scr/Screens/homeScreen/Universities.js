import { Text, View,SafeAreaView,Image,FlatList,TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import styles from './UniversitiesStyle';

const Separator = () => <View style={styles.itemSeparator} />;

export default class Universities extends Component {
    state = {
        filters : [
            {
              id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
              title: "Fee",
            },
            {
              id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
              title: "Ranking",
            },
            {
              id: "58694a0f-3da1-471f-bd96-145571e29d72",
              title: "Merit",
            },
            {
              id: "58694a0f-3da1-471f-bd96-145571e29d72",
              title: "Type",
            },
            {
              id: "58694a0f-3da1-471f-bd96-145571e29d72",
              title: "Admission",
            },
            {
              id: "58694a0f-3da1-471f-bd96-145571e29d72",
              title: "Status",
            },
            {
              id: "58694a0f-3da1-471f-bd96-145571e29d72",
              title: "Location",
            },
          ],
          universities:[
            {
                id: "1",
                name: "University of Punjab",
                fee:2000,
                admission:'Open',
                location: "Lahore",
                ranking:11
              },
            {
                id: "2",
                name: "Comsats",
                fee:12000,
                admission:'Close',
                location: "Islamabad",
                ranking:12
              },
            {
                id: "3",
                name: "Comsats",
                fee:12000,
                admission:'Close',
                location: "Faislabad",
                ranking:13
              },
            {
                id: "4",
                name: "Comsats",
                fee:12000,
                admission:'Close',
                location: "Islamabad",
                ranking:120
              },
            {
                id: "5",
                name: "Fast",
                fee:12000,
                admission:'Close',
                location: "Lahore",
                ranking:1
              },
          ],
    }
  render() {
    return (
      <SafeAreaView style={styles.container}>
       <View style={styles.filterWrapper}>
        <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={this.state.filters}
            renderItem={({item})=>(
                <View key={item.key} style={styles.singleFilter}> 
                <TouchableOpacity
                    style={styles.filter}>
                    <Text>{item.title}</Text>
                </TouchableOpacity>
                </View>
            )}
        />       
       </View>
       <View style={styles.universitiesWrapper}>
       <FlatList
            data={this.state.universities}
            renderItem={({item})=>(
                <View key={item.key} style={styles.singleUniversity}>
               <View style={styles.rankingTextWrapper}>
                   <Text style={styles.rankingText}>Ranking {item.ranking}</Text>
                </View>

                <View style={{flex:0.85,flexDirection:"row"}}>
                    <View style={styles.imageWrapper}>
                        <Image
                            style={{height:"90%",width:"90%"}}
                            source = {require('../../Assets/images/COMSATS.jpeg')}
                            />
                    </View>
                    <View style={styles.universityDetailWrapper}>
                        <Text style={styles.universityDetailText}>{item.name}</Text>
                        <Text style={styles.universityDetailText}>Fee : {item.fee}</Text>
                        <Text style={styles.universityDetailText}>Admission : {item.admission}</Text>
                        
                        <View style={styles.locAndPhoneWrapper}>
                        <Text style={styles.universityDetailText}>Location : {item.location}</Text>
                        <Text style={styles.phone}>Phon</Text>
                        </View>
                    </View>
                   </View>
            </View>
            )}
            ItemSeparatorComponent={() => <Separator />}
        /> 

           {/* <View key={item.key} style={styles.singleUniversity}>
               <View style={styles.rankingTextWrapper}>
                   <Text style={styles.rankingText}>Ranking 1</Text>
                </View>

                <View style={{flex:0.85,flexDirection:"row"}}>
                    <View style={styles.imageWrapper}>
                        <Image
                            style={{height:"90%",width:"90%"}}
                            source = {require('../../Assets/images/COMSATS.jpeg')}
                            />
                    </View>
                    <View style={styles.universityDetailWrapper}>
                        <Text style={styles.universityDetailText}>University of Punjab</Text>
                        <Text style={styles.universityDetailText}>Fee : 20000</Text>
                        <Text style={styles.universityDetailText}>Admission : Open</Text>
                        
                        <View style={styles.locAndPhoneWrapper}>
                        <Text style={styles.universityDetailText}>Location : Lahore</Text>
                        <Text style={styles.phone}>Phon</Text>
                        </View>
                    </View>
                   </View>
            </View> */}
           
       </View>
      </SafeAreaView>
    )
  }
}