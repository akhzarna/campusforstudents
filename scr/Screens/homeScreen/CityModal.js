import { Text, View, Modal, Button, TextInput, FlatList } from 'react-native'
import React, { Component } from 'react'
import { style } from './CityModelStyle';

export default class CityModal extends Component {
    state = {
        allCities: [
            { key: 0, name: 'Lahore', },
            { key: 1, name: 'Karachi', },
            { key: 2, name: 'Islamabad', },
            { key: 3, name: 'Peshawar', },
            { key: 4, name: 'Quetta', },
        ]


    }
    render() {
        return (
            <Modal transparent={true} visible={this.props.show}
            >
                <View style={style.container}>
                    <View style={style.modelContainer}>

                        <View style={style.header}>
                            <Text style={style.heading}>Search City</Text>
                            <Text style={style.currentCity}>Current:Lahore</Text>
                            <TextInput style={style.searchBar} placeholder='Find Best Match For You' />
                        </View>

                        <View style={style.popularCities}>
                            <Text style={style.heading}>Popular Cities</Text>
                            <FlatList 
                                horizontal={true}
                                numColumns={1}
                                keyExtractor={(item) => item.key}
                                data={this.state.allCities} 
                                renderItem={
                                    ({ item }) =><Text style={{margin:20}}>{item.name}</Text>}
                                
                                />
                             



                        </View>





                    </View>

                </View>
            </Modal>
        )
    }
}