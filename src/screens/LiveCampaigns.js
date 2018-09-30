import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import CustomHeader from '../components/CustomHeader';

class LiveCampaigns extends Component {
  static navigationOptions = {
    drawerLabel: 'Live Campaigns',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../../assets/liveCamp.png')}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    ),
  };
  render() {
    return (
      <View>
        <CustomHeader {...this.props} headerTitle="Live Campaigns" />
      </View>
    );
  }
}
export default LiveCampaigns;

const styles = StyleSheet.create({
  icon: {
    height: 24,
    width: 24,
  },
});
