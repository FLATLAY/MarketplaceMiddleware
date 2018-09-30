import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';

import { DrawerItems, SafeAreaView } from 'react-navigation';

const Sidebar = props => (
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
        <Text style={{ fontSize: 18, color: '#9B9B9B' }}>Shivam dev</Text>
      </View>
      <DrawerItems {...props} />
      <TouchableOpacity
        onPress={() => props.navigation.navigate('LogIn')}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: 30,
          marginVertical: 5,
        }}
      >
        <Image
          style={{ height: 20, width: 30, marginRight: 25 }}
          source={require('../../assets/logout.png')}
        />
        <Text style={{ fontSize: 16, color: '#9B9B9B' }}>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  </ScrollView>
);

export default Sidebar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
