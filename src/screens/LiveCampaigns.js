import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import CustomHeader from '../components/CustomHeader';
import LiveCampaignsOptions from '../data/LiveCampaignsOptions';
import Poll from '../components/Live_Campaigns_Component/Poll';
import Cta from '../components/Live_Campaigns_Component/Cta';
import Chat from '../components/Live_Campaigns_Component/Chat';
import Emoji from '../components/Live_Campaigns_Component/Emoji';
import ProductCarousel from '../components/Live_Campaigns_Component/ProductCarousel';
import BroadcastTools from '../components/Live_Campaigns_Component/BroadcastTools';

const LiveCampaignsComponent = [
  <Cta />,
  <Poll />,
  <Chat />,
  <Emoji />,
  <ProductCarousel />,
  <BroadcastTools />,
];

let previousPressedComponent = LiveCampaignsComponent[0];

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

  state = {
    campaignsOptions: LiveCampaignsOptions,
    campaignsComponent: previousPressedComponent,
  };
  handleOptionsSelect = index => {
    const newData = LiveCampaignsOptions.map(item => {
      if (item.key === `${index + 1}`) {
        item.isActive = true;
        return item;
      }
      item.isActive = false;
      return item;
    });

    if (index + 1) {
      previousPressedComponent = LiveCampaignsComponent[index];
      this.setState({
        campaignsComponent: LiveCampaignsComponent[index],
        campaignsOptions: newData,
      });
    } else {
      this.setState({
        campaignsComponent: null,
        campaignsOptions: newData,
      });
    }
  };

  _renderItem = ({ item, index }) => {
    const itemStyle = item.isActive ? item.active : item.inactive;

    return (
      <TouchableOpacity
        onPress={() => this.handleOptionsSelect(index)}
        style={{
          height: 80,
          width: 145,
          padding: 5,
        }}
      >
        <View
          style={{
            height: '100.00%',
            width: '100.00%',
            backgroundColor: itemStyle.backgroundColor,
            justifyContent: 'center',
            borderRadius: 11.5,
            elevation: 5,
            shadowColor: 'rgba(0,0,0,0.25)',
            shadowOffset: { width: 0, height: 3 },
            shadowOpacity: 1,
          }}
        >
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'center',
            }}
          >
            <Image
              resizeMode="contain"
              source={itemStyle.image}
              style={{ height: 30, width: 30, margin: 5 }}
            />
            <Text
              style={{
                color: itemStyle.color,
                fontSize: 14,
                fontFamily: 'mont-m',
              }}
            >
              {item.text}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View style={styles.root}>
        <CustomHeader {...this.props} headerTitle="Live Campaigns" />

        <View
          style={{
            position: 'absolute',
            top: '13.19%',
            width: Dimensions.get('window').width,
          }}
        >
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={this.state.campaignsOptions}
            horizontal={true}
            renderItem={this._renderItem}
          />
        </View>
        <View
          style={{
            position: 'relative',
            top: 100,
            height: '100%',
            width: '100%',
          }}
        >
          {this.state.campaignsComponent}
        </View>
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
  root: {
    backgroundColor: 'white',
    flex: 1,
  },
});
