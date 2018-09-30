import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import CustomHeader from '../components/CustomHeader';

class AccountDetails extends Component {
  static navigationOptions = {
    drawerLabel: 'Account Details',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../../assets/account.png')}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    ),
  };
  render() {
    return (
      <View>
        <CustomHeader {...this.props} headerTitle="Account Details" />
      </View>
    );
  }
}
export default AccountDetails;

const styles = StyleSheet.create({
  icon: {
    height: 24,
    width: 24,
  },
});
