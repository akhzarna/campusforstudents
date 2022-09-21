import { Text, View, Modal, Button, TextInput, FlatList, ScrollView, Image, TouchableOpacity, Alert } from 'react-native'
import React, { Component } from 'react'
import { style } from './CityModelStyle';
import { StackActions } from "@react-navigation/native"
import { Picker } from '@react-native-picker/picker';
const popAction = StackActions.pop();

export default class CityModal extends Component {
    state = {
        
        allCities: [
            { key: 0, title: 'Abbottabad', },
            { key: 1, title: 'Ahmadpur East', },
            { key: 2, title: 'Bahawalnagar', },
            { key: 3, title: 'Bahawalpur', },
            { key: 4, title: 'Burewala', },
            { key: 5, title: 'Chakdara', },
            { key: 6, title: 'Chakwal', },
            { key: 7, title: 'Chaman', },
            { key: 8, title: 'Chiniot', },
            { key: 9, title: 'Chishtian', },
            { key: 10, title: 'Dadu', },
            { key: 11, title: 'Daska', },
            { key: 12, title: 'Dera Ghazi Khan', },
            { key: 13, title: 'Dera Ismail Khan', },
            { key: 14, title: 'Gojra', },
            { key: 15, title: 'Gujranwala', },
            { key: 16, title: 'Gujrat', },
            { key: 17, title: 'Hafizabad', },
            { key: 18, title: 'Hyderabad', },
            { key: 19, title: 'Islamabad', },
            { key: 20, title: 'Jacobabad', },
            { key: 21, title: 'Jaranwala', },
            { key: 22, title: 'Jhang', },
            { key: 23, title: 'Jehlum', },
            { key: 24, title: 'Kamalia', },
            { key: 25, title: 'Kamoke', },
            { key: 26, title: 'Kandhkot', },
            { key: 27, title: 'Karachi', },
            { key: 28, title: 'Kasur', },
            { key: 29, title: 'Khairpur', },
            { key: 30, title: 'Khanewal', },
            { key: 31, title: 'Khanpur', },
            { key: 32, title: 'Khushab', },
            { key: 33, title: 'Khuzdar', },
            { key: 34, title: 'Kohat', },
            { key: 35, title: 'Kot Adu', },
            { key: 36, title: 'Lahore', },
            { key: 37, title: 'Larkana', },
            { key: 38, title: 'Mandi Bahauddin', },
            { key: 39, title: 'Mardan', },
            { key: 40, title: 'Mingora', },
            { key: 41, title: 'Mirpur Khas', },
            { key: 42, title: 'Multan', },
            { key: 43, title: 'Muridke', },
            { key: 44, title: 'Muzaffargarh', },
            { key: 45, title: 'Nawabshah', },
            { key: 46, title: 'Nowshera', },
            { key: 47, title: 'Okara', },
            { key: 48, title: 'Pakpattan', },
            { key: 49, title: 'Peshawar', },
            { key: 50, title: 'Quetta', },
            { key: 51, title: 'Rahim Yar Khan', },
            { key: 52, title: 'Rawalpindi', },
            { key: 53, title: 'Sadiqabad', },
            { key: 54, title: 'Sahiwal', },
            { key: 55, title: 'Sargodha', },
            { key: 56, title: 'Sheikhupura', },
            { key: 57, title: 'Shikarpur', },
            { key: 58, title: 'Sialkot', },
            { key: 59, title: 'Sukkur', },
            { key: 60, title: 'Swabi', },
            { key: 61, title: 'Tando Allahyar', },
            { key: 62, title: 'Taxila', },
            { key: 63, title: 'Timergara', },
            { key: 64, title: 'Toba Tek Singh', },
            { key: 65, title: 'Vehari', },
            { key: 66, title: 'Wah Cantt', },
            { key: 67, title: 'Wazirabad', }
        ],

        popupalarCities: [
            { key: 0, title: 'Karachi', url: require("../../../assets/images/Karachi.png") },
            { key: 1, title: 'Lahore', url: require("../../../assets/images/Lahore.png") },
            { key: 2, title: 'Islamabad', url: require("../../../assets/images/Islamabad.png") },
            { key: 3, title: 'Peshawar', url: require("../../../assets/images/peshawar.png") },
            { key: 4, title: 'Quetta', url: require("../../../assets/images/Lahore.png") },
            { key: 5, title: 'Bahawalpur', url: require("../../../assets/images/bahawalpur.png") },
        ],

        recentCities: [
            { key: 0, title: 'Lahore', },
            { key: 1, title: 'Karachi', },
        ],

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
                                        <Image style={style.cancelImg} source={require("../../../assets/images/cancelcross.png")} />
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
                                                <TouchableOpacity onPress={() => this.props.sortCity(item.title)}>
                                                    <Image style={style.cityImg} source={item.url} />
                                                </TouchableOpacity>
                                                <Text style={style.cityNames}>{item.title}</Text>
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
                                                  <TouchableOpacity onPress={() => this.props.sortCity(item.title)}>
                                                  <Text style={[style.cityNames,style.ml10]}>{item.title}</Text>
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
                                            <TouchableOpacity onPress={() => this.props.sortCity(item.title)}>
                                            <Text style={[style.cityNames,style.ml10]}>{item.title}</Text>
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