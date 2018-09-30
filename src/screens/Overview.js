import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Container } from 'native-base';

import CustomHeader from '../components/CustomHeader';

class Overview extends Component {
  static navigationOptions = {
    title: 'Overview',
    drawerLabel: 'Overview',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../../assets/overview.png')}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    ),
  };

  render() {
    return (
      <View>
        <CustomHeader {...this.props} headerTitle="Overview" />
      </View>
    );
  }
}

export default Overview;

const styles = StyleSheet.create({
  icon: {
    height: 24,
    width: 24,
  },
});
