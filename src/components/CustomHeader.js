import React, { Component } from 'react';
import { Image, View, Text, Dimensions, TouchableOpacity } from 'react-native';

class CustomHeader extends Component {
  render() {
    return (
      <View
        style={{
          width: Dimensions.get('window').width,
          height: 78,
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <TouchableOpacity
          activeOpacity={0.4}
          onPress={() => this.props.navigation.toggleDrawer()}
        >
          <Image
            style={{
              marginLeft: 27,
              width: 30,
              height: 23,
            }}
            source={require('../../assets/Header.png')}
          />
        </TouchableOpacity>
        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            paddingRight: 90,
          }}
        >
          <Text
            style={{ fontSize: 18, color: '#9B9B9B', fontFamily: 'mont-m' }}
          >
            {this.props.headerTitle}
          </Text>
        </View>
      </View>
    );
  }
}
export default CustomHeader;
