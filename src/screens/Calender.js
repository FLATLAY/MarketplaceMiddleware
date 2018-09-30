import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import CustomHeader from '../components/CustomHeader';

class Calender extends Component {
  static navigationOptions = {
    drawerLabel: 'Calender',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../../assets/calender.png')}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    ),
  };
  render() {
    return (
      <View>
        <CustomHeader {...this.props} headerTitle="Calender" />
      </View>
    );
  }
}
export default Calender;

const styles = StyleSheet.create({
  icon: {
    height: 24,
    width: 24,
  },
});
