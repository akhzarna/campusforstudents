import { Text, View, Modal, Button, TextInput, FlatList, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { style } from './CityModelStyle';
import { StackActions } from "@react-navigation/native"
const popAction = StackActions.pop();


export default class CityModal extends Component {
    state = {
        allCities: [
            { key: 0, name: 'Lahore', },
            { key: 1, name: 'Karachi', },
            { key: 2, name: 'Islamabad', },
            { key: 3, name: 'Peshawar', },
            { key: 4, name: 'Quetta', },
            { key: 5, name: 'Sakurdu', },
            { key: 6, name: 'Sialkot', },
            { key: 7, name: 'Multan', },
            { key: 8, name: 'Bahawalpur', },
            { key: 9, name: 'Rawalpindi', },
        ],
        popupalarCities: [
            { key: 0, name: 'Lahore', url: require("../../../assets/images/Lahore.png") },
            { key: 1, name: 'Karachi', url: require("../../../assets/images/Karachi.png") },
            { key: 2, name: 'Islamabad', url: require("../../../assets/images/Islamabad.png") },
            { key: 3, name: 'Peshawar', url: require("../../../assets/images/peshawar.png") },
            { key: 4, name: 'Quetta', url: require("../../../assets/images/Lahore.png") },
        ],
        recentCities: [
            { key: 0, name: 'Lahore', },
            { key: 1, name: 'Karachi', },
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
                                        <Image style={style.cancelImg} source={require("../../../assets/images/cancel.png")} />
                                    </TouchableOpacity>
                                </View>
                                <Text style={style.currentCity}>Current:Lahore</Text>
                                <TextInput style={style.searchBar} placeholder='Find Best Match For You' />
                            </View>

                            <View style={style.popularCities}>
                                <Text style={style.heading}>Popular Cities</Text>
                                <FlatList
                                    horizontal={true}
                                    numColumns={1}
                                    keyExtractor={(item) => item.key}
                                    data={this.state.popupalarCities}
                                    showsHorizontalScrollIndicator={false}
                                    renderItem={
                                        ({ item }) =>
                                            <View style={{ marginLeft: 10 }}>
                                                <TouchableOpacity>
                                                    <Image style={style.cityImg} source={item.url} />

                                                </TouchableOpacity>

                                                <View style={style.cityNameContainer}>
                                                    <Text style={style.cityNames}>{item.name}</Text>
                                                </View>

                                            </View>
                                    }
                                />
                            </View>

                            <View style={style.RecentCities}>
                                <Text style={style.heading}>Recent Cities</Text>
                                <Text style={style.currentCity}>Current:Lahore</Text>
                                <FlatList
                                    numColumns={1}
                                    keyExtractor={(item) => item.key}
                                    data={this.state.recentCities}
                                    showsVerticalScrollIndicator={false}
                                    renderItem={
                                        ({ item }) =>
                                            <View >
                                                <View>
                                                    <Text style={style.cityNames}>{item.name}</Text>
                                                </View>
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
                                            <View >
                                                <View>
                                                    <Text style={style.cityNames}>{item.name}</Text>
                                                </View>
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