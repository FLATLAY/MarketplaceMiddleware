import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import CustomHeader from '../components/CustomHeader';
import CampaignsCard from '../components/CampaignsCard';

const defaultData = [
  {
    key: '1',
    name: 'Nylon',
    handle: '@vandifair',
    details: `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
    `,
    state: 'Active',
    stateImage: require('../../assets/green.png'),
    image: require('../../assets/hero.jpg'),
  },
  {
    key: '2',
    name: 'Nylon',
    handle: '@vandifair',
    details: `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
    `,
    state: 'Inactive',
    stateImage: require('../../assets/red.png'),
    image: require('../../assets/hero2.jpg'),
  },
  {
    key: '3',
    name: 'Nylon',
    handle: '@vandifair',
    details: `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
    `,
    state: 'Finished',
    stateImage: require('../../assets/gray.png'),
    image: require('../../assets/hero.jpg'),
  },
  {
    key: '4',
    name: 'Nylon',
    handle: '@vandifair',
    details: `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
    `,
    state: 'Inactive',
    stateImage: require('../../assets/red.png'),
    image: require('../../assets/hero2.jpg'),
  },
  {
    key: '5',
    name: 'Nylon',
    handle: '@vandifair',
    details: `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
    `,
    state: 'Finished',
    stateImage: require('../../assets/gray.png'),
    image: require('../../assets/hero.jpg'),
  },
];

class Overview extends Component {
  static navigationOptions = {
    title: 'Overview',
    drawerLabel: 'Overview',
    contentOptions: {
      activeTintColor: '#4A4A4A',
      inactiveTintColor: '#9B9B9B',
      activeBackgroundColor: 'transparent',
      labelStyle: {
        fontSize: 16,
        fontWeight: '400',
      },
      itemsContainerStyle: {
        marginHorizontal: 15,
      },
      iconContainerStyle: {
        opacity: 1,
      },
    },
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../../assets/overview.png')}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    ),
  };
  render() {
    return (
      <View style={styles.root}>
        <CustomHeader {...this.props} headerTitle="newCampaigns" />

        <ScrollView
          style={styles.scrollViewNavigationOverview}
          contentContainerStyle={{
            width: 375,
          }}
        >
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('newCampaigns')}
            style={styles.activeTab}
            activeOpacity={0.5}
          >
            <View style={styles.rectangle12Copy7} />
            <Text style={styles.createCampaigns}>Create Campaigns</Text>
          </TouchableOpacity>
          <View style={{ paddingTop: 30 }}>
            {defaultData.map(item => (
              <CampaignsCard
                key={item.key}
                image={item.image}
                title={item.name}
                details={item.details}
                handle={item.handle}
                stateImage={item.stateImage}
                state={item.state}
              />
            ))}
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default Overview;

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'white',
    flex: 1,
  },
  icon: {
    height: 24,
    width: 24,
  },
  scrollViewNavigationOverview: {
    position: 'absolute',
    top: 78,
    left: 32,
    height: Dimensions.get('window').height - 78,
    width: 375,
  },
  activeTab: {
    height: 43,
    width: 314,
  },
  rectangle12Copy7: {
    position: 'absolute',
    height: 43,
    width: 314,
    borderRadius: 21.5,
    backgroundColor: 'rgba(80,227,194,1)',
  },
  createCampaigns: {
    position: 'absolute',
    top: 10,
    left: 78,
    height: 23,
    width: 151,
    backgroundColor: 'transparent',
    textAlign: 'center',
    color: 'rgba(255,255,255,1)',
    fontSize: 17,
    letterSpacing: 0.33,
  },
});
