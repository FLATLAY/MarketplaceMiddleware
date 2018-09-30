import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import CustomHeader from '../components/CustomHeader';

class Messages extends Component {
  static navigationOptions = {
    drawerLabel: 'Messages',
    drawerIcon: ({ tintColor }) => (
      <Image
        resizeMode="contain"
        source={require('../../assets/messages.png')}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    ),
  };
  render() {
    return (
      <View>
        <CustomHeader {...this.props} headerTitle="Messages" />
      </View>
    );
  }
}
export default Messages;

const styles = StyleSheet.create({
  icon: {
    height: 24,
    width: 24,
  },
});
