import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import CustomHeader from '../components/CustomHeader';

class Analysis extends Component {
  static navigationOptions = {
    drawerLabel: 'Analysis',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../../assets/analysis.png')}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    ),
  };
  render() {
    return (
      <View>
        <CustomHeader {...this.props} headerTitle="Analysis" />
      </View>
    );
  }
}
export default Analysis;

const styles = StyleSheet.create({
  icon: {
    height: 24,
    width: 24,
  },
});
