import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import CustomHeader from '../components/CustomHeader';

class ConnectSocial extends Component {
  static navigationOptions = {
    drawerLabel: 'Connect Social',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../../assets/connect.png')}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    ),
  };
  render() {
    return (
      <View>
        <CustomHeader {...this.props} headerTitle="Connect Social" />
      </View>
    );
  }
}
export default ConnectSocial;

const styles = StyleSheet.create({
  icon: {
    height: 24,
    width: 24,
  },
});
