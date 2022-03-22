import { Text, View } from 'react-native'
import React, { Component } from 'react'
import Carousel from 'react-native-snap-carousel';
export default class TempScreen extends Component {
    _renderItem = ({item, index}) => {
        return (
            <View >
                <Text >{ item.title }</Text>
            </View>
        );
    }
  render() {
    return (
        <Carousel
        ref={(c) => { this._carousel = c; }}
        data={this.state.entries}
        renderItem={this._renderItem}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
      />

    )
  }
}