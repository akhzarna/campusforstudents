import { Text, View, Modal, Button, TextInput, FlatList, ScrollView, Image, TouchableOpacity, Alert } from 'react-native'
import React, { Component } from 'react'
import { style } from './CityModelStyle';
import { StackActions } from "@react-navigation/native"
const popAction = StackActions.pop();


export default class CityModal extends Component {
    state = {
        allCities: [
            { key: 0, name: 'Abbottabad', },
            { key: 1, name: 'Ahmadpur East', },
            { key: 2, name: 'Bahawalnagar', },
            { key: 3, name: 'Bahawalpur', },
            { key: 4, name: 'Burewala', },
            { key: 5, name: 'Chakdara', },
            { key: 6, name: 'Chakwal', },
            { key: 7, name: 'Chaman', },
            { key: 8, name: 'Chiniot', },
            { key: 9, name: 'Chishtian', },
            { key: 10, name: 'Dadu', },
            { key: 11, name: 'Daska', },
            { key: 12, name: 'Dera Ghazi Khan', },
            { key: 13, name: 'Dera Ismail Khan', },
            { key: 14, name: 'Gojra', },
            { key: 15, name: 'Gujranwala', },
            { key: 16, name: 'Gujrat', },
            { key: 17, name: 'Hafizabad', },
            { key: 18, name: 'Hyderabad', },
            { key: 19, name: 'Islamabad', },
            { key: 20, name: 'Jacobabad', },
            { key: 21, name: 'Jaranwala', },
            { key: 22, name: 'Jhang', },
            { key: 23, name: 'Jehlum', },
            { key: 24, name: 'Kamalia', },
            { key: 25, name: 'Kamoke', },
            { key: 26, name: 'Kandhkot', },
            { key: 27, name: 'Karachi', },
            { key: 28, name: 'Kasur', },
            { key: 29, name: 'Khairpur', },
            { key: 30, name: 'Khanewal', },
            { key: 31, name: 'Khanpur', },
            { key: 32, name: 'Khushab', },
            { key: 33, name: 'Khuzdar', },
            { key: 34, name: 'Kohat', },
            { key: 35, name: 'Kot Adu', },
            { key: 36, name: 'Lahore', },
            { key: 37, name: 'Larkana', },
            { key: 38, name: 'Mandi Bahauddin', },
            { key: 39, name: 'Mardan', },
            { key: 40, name: 'Mingora', },
            { key: 41, name: 'Mirpur Khas', },
            { key: 42, name: 'Multan', },
            { key: 43, name: 'Muridke', },
            { key: 44, name: 'Muzaffargarh', },
            { key: 45, name: 'Nawabshah', },
            { key: 46, name: 'Nowshera', },
            { key: 47, name: 'Okara', },
            { key: 48, name: 'Pakpattan', },
            { key: 49, name: 'Peshawar', },
            { key: 50, name: 'Quetta', },
            { key: 51, name: 'Rahim Yar Khan', },
            { key: 52, name: 'Rawalpindi', },
            { key: 53, name: 'Sadiqabad', },
            { key: 54, name: 'Sahiwal', },
            { key: 55, name: 'Sargodha', },
            { key: 56, name: 'Sheikhupura', },
            { key: 57, name: 'Shikarpur', },
            { key: 58, name: 'Sialkot', },
            { key: 59, name: 'Sukkur', },
            { key: 60, name: 'Swabi', },
            { key: 61, name: 'Tando Allahyar', },
            { key: 62, name: 'Taxila', },
            { key: 63, name: 'Timergara', },
            { key: 64, name: 'Toba Tek Singh', },
            { key: 65, name: 'Vehari', },
            { key: 66, name: 'Wah Cantt', },
            { key: 67, name: 'Wazirabad', }
        ],
        popupalarCities: [
            { key: 0, name: 'Karachi', url: require("../../../assets/images/Karachi.png") },
            { key: 1, name: 'Lahore', url: require("../../../assets/images/Lahore.png") },
            { key: 2, name: 'Islamabad', url: require("../../../assets/images/Islamabad.png") },
            { key: 3, name: 'Peshawar', url: require("../../../assets/images/peshawar.png") },
            { key: 4, name: 'Quetta', url: require("../../../assets/images/Lahore.png") },
            { key: 5, name: 'Bahawalpur', url: require("../../../assets/images/bahawalpur.png") },
        ],
        recentCities: [
            { key: 0, name: 'Lahore', },
            { key: 1, name: 'Karachi', },
        ],
        selectedCity:''
    }

    checkFunction=()=>{
        // Alert.alert('Hello');
        // console.log('In the name of Allah');
        // this.props.update
    }

    render() {
        return (
            <Modal transparent={true} visible={this.props.show}>
                <ScrollView>
                    <View style={style.container}>
                        <View style={style.modelContainer}>
                            <View style={style.header}>
                                <View style={style.title}>
                                    <Text style={style.heading} >Search City</Text>
                                    <TouchableOpacity onPress={this.props.update}
                                        style={style.cancelImgStyle}>
                                        <Image style={style.cancelImg} source={require("../../../assets/images/cancel.png")} />
                                    </TouchableOpacity>
                                </View>
                                {/* <Text style={style.currentCity}>Current:Lahore</Text> */}
                                {/* <TextInput style={style.searchBar} placeholder='Find Best Match For You' /> */}
                            </View>

                            <View style={style.popularCities}>
                            <Text style={[style.heading,style.mb10]}>Popular Cities</Text>
                                <FlatList
                                    horizontal={true}
                                    numColumns={1}
                                    keyExtractor={(item) => item.key}
                                    data={this.state.popupalarCities}
                                    showsHorizontalScrollIndicator={false}
                                    renderItem={
                                        ({ item }) =>
                                            <View style={{ marginLeft: 10 }}>
                                                <View style={style.cityNameContainer}>
                                                <TouchableOpacity onPress={this.props.update}>
                                                    <Image style={style.cityImg} source={item.url} />
                                                </TouchableOpacity>
                                                <Text style={style.cityNames}>{item.name}</Text>
                                                </View>
                                            </View>
                                    }
                                />
                            </View>

                            <View style={style.RecentCities}>
                                <Text style={style.heading}>Recent Cities</Text>
                                {/* <Text style={style.currentCity}>Current:Lahore</Text> */}
                                <FlatList
                                    numColumns={1}
                                    keyExtractor={(item) => item.key}
                                    data={this.state.recentCities}
                                    showsVerticalScrollIndicator={false}
                                    renderItem={
                                        ({ item }) =>
                                            <View style={{flex:1.0}}>
                                                  <TouchableOpacity onPress={this.props.update}>
                                                  <Text style={[style.cityNames,style.ml10]}>{item.name}</Text>
                                                </TouchableOpacity>
                                            </View>
                                    }
                                />
                            </View>

                            <View style={style.allCities}>
                                <Text style={style.heading}>All Cities</Text>
                                <FlatList
                                    numColumns={1}
                                    keyExtractor={(item) => item.key}
                                    data={this.state.allCities}
                                    showsVerticalScrollIndicator={false}
                                    renderItem={
                                        ({ item }) =>
                                        <View style={{flex:1.0}}>
                                            <TouchableOpacity onPress={this.props.update}>
                                            <Text style={[style.cityNames,style.ml10]}>{item.name}</Text>
                                            </TouchableOpacity>
                                        </View>
                                    }
                                />
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </Modal>
        )
    }
}