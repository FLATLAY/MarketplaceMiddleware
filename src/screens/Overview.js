import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  YellowBox,
} from 'react-native';

import CustomHeader from '../components/CustomHeader';
import CampaignsCard from '../components/CampaignsCard';
import { Consumer } from '../data/CampaignsData';

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
    YellowBox.ignoreWarnings(['Module RNFetchBlob']);

    return (
      <Consumer>
        {value => {
          console.log('campaigns', value);
          return (
            <View style={styles.root}>
              <CustomHeader {...this.props} headerTitle="Overview" />
              <ScrollView
                style={styles.scrollViewNavigationOverview}
                contentContainerStyle={{
                  width: 375,
                }}
              >
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('newCampaigns', {
                      campaignsType: 'NEW_CAMPAIGNS',
                      navigateToValue: 'Home',
                    })
                  }
                  style={styles.activeTab}
                  activeOpacity={0.5}
                >
                  <View style={styles.rectangle12Copy7} />
                  <Text
                    style={[
                      styles.createCampaigns,
                      { fontFamily: 'Montserrat-Medium' },
                    ]}
                  >
                    Create Campaigns
                  </Text>
                </TouchableOpacity>
                <View style={{ paddingTop: 30 }}>
                  {value.provideData.length === 0 ? (
                    <CampaignsCard empty={true} />
                  ) : (
                    value.provideData.map(item => (
                      <CampaignsCard
                        navigateSource={this.props.navigation}
                        dataValue={item}
                        key={item.key}
                        empty={false}
                        image={item.image}
                        title={item.name}
                        details={item.details}
                        handle={item.handle}
                        stateImage={item.stateImage}
                        state={item.state}
                      />
                    ))
                  )}
                </View>
              </ScrollView>
            </View>
          );
        }}
      </Consumer>
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
    backgroundColor: 'transparent',
    textAlign: 'center',
    color: 'rgba(255,255,255,1)',
    fontSize: 17,
    letterSpacing: 0.33,
  },
});
