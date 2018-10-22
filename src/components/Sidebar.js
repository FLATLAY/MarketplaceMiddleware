import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';

import { DrawerItems, SafeAreaView } from 'react-navigation';

class Sidebar extends Component {
  handleLogout = () => {
    const keys = ['email', 'username'];
    AsyncStorage.multiRemove(keys);
    this.props.navigation.navigate('LogIn');
  };
  render() {
    return (
      <ScrollView>
        <SafeAreaView
          style={styles.container}
          forceInset={{ top: 'always', horizontal: 'never' }}
        >
          <View
            style={{
              flexDirection: 'row',
              margin: 10,
              padding: 5,
              alignItems: 'center',
              borderBottomWidth: 2,
              borderColor: '#9B9B9B',
            }}
          >
            <Image
              style={{ height: 46, width: 46, margin: 10, marginRight: 20 }}
              source={require('../../assets/profile.png')}
            />
            <Text
              style={{
                fontSize: 18,
                color: '#9B9B9B',
                fontFamily: 'Montserrat-Medium',
              }}
            >
              Shivam dev
            </Text>
          </View>
          <DrawerItems {...this.props} />
          <TouchableOpacity
            onPress={this.handleLogout}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginHorizontal: 34,
              marginTop: 8,
            }}
          >
            <Image
              style={{ height: 20, width: 30, marginRight: 25 }}
              source={require('../../assets/logout.png')}
            />
            <Text
              style={{
                fontSize: 16,
                color: '#9B9B9B',
                fontFamily: 'Montserrat-Medium',
              }}
            >
              Logout
            </Text>
          </TouchableOpacity>
        </SafeAreaView>
      </ScrollView>
    );
  }
}

export default Sidebar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
