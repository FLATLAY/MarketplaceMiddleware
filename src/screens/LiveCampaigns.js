import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  FlatList,
  YellowBox,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';

import CustomHeader from '../components/CustomHeader';
import LiveCampaignsOptions from '../data/LiveCampaignsOptions';
import Poll from '../components/Live_Campaigns_Component/Poll';
import Cta from '../components/Live_Campaigns_Component/Cta';
import Chat from '../components/Live_Campaigns_Component/Chat';
import Emoji from '../components/Live_Campaigns_Component/Emoji';
import ProductCarousel from '../components/Live_Campaigns_Component/ProductCarousel';
import BroadcastTools from '../components/Live_Campaigns_Component/BroadcastTools';
import { Consumer } from '../data/CampaignsData';

const LiveCampaignsComponent = [
  <Cta />,
  <Poll />,
  <Chat />,
  <Emoji />,
  <ProductCarousel />,
  <BroadcastTools />,
];

const LiveCampaignsImages = [
  require('../../assets/LiveCampaignsImages/cta.png'),
  require('../../assets/LiveCampaignsImages/poll.png'),
  require('../../assets/LiveCampaignsImages/chat.png'),
  require('../../assets/LiveCampaignsImages/emojies.png'),
  require('../../assets/LiveCampaignsImages/carousel.png'),
  require('../../assets/LiveCampaignsImages/broadcast.png'),
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
    campaignsImage: LiveCampaignsImages[0],
    activeCampaigns: '',
    mainStyle: {},
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
        campaignsImage: LiveCampaignsImages[index],
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
                fontFamily: 'Montserrat-Medium',
              }}
            >
              {item.text}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  getInitialActiveCampaings = (selectedCampaigns, activeCampaigns) => {
    if (selectedCampaigns === '') {
      console.log('EMPTY');
      // this.setState({
      //   activeCampaigns: '',
      // });
      console.log('isNOTAvailable', this.state.activeCampaigns);
    } else {
      const isAvailable = activeCampaigns.find(item => {
        if (item.key === selectedCampaigns.key) {
          return item;
        }
      });

      console.log('isAvailable', isAvailable);

      // this.setState({
      //   activeCampaigns: isAvailable,
      // });

      if (
        typeof this.state.activeCampaigns !== 'object' &&
        this.state.activeCampaigns.details === undefined
      ) {
        console.log('isAvailable1', isAvailable);
        console.log('selectedCampaigns1', selectedCampaigns);
        this.setState({
          activeCampaigns: isAvailable,
        });
      } else if (
        this.state.activeCampaigns.details !== selectedCampaigns.details
      ) {
        console.log('isAvailableINSIDE', isAvailable);

        this.setState({
          activeCampaigns: isAvailable,
        });
      }
    }
  };

  render() {
    YellowBox.ignoreWarnings(['Cannot update during']);
    return (
      <Consumer>
        {value => {
          console.log('value.selectedCampaigns', value.activeCampaigns);

          if (value.selectedCampaigns !== '') {
            this.getInitialActiveCampaings(
              value.selectedCampaigns,
              value.activeCampaigns
            );
          } else if (this.state.activeCampaigns !== '') {
            this.setState({
              activeCampaigns: '',
            });
          }
          return (
            <View style={styles.root}>
              <CustomHeader {...this.props} headerTitle="Live Campaigns" />
              <View
                style={{
                  position: 'absolute',
                  top: '10%',
                  height: 42,
                  zIndex: 2000,
                  alignSelf: 'center',
                  width: 319,
                }}
              >
                {value.activeCampaigns.length === 0 ? (
                  <View
                    style={{
                      width: 319,
                      borderWidth: 1,
                      height: 42,
                      borderColor: 'rgba(218,218,237,1)',
                      borderRadius: 20,
                      backgroundColor: 'rgba(0,0,0,0)',
                      alignSelf: 'center',
                    }}
                  >
                    <Text
                      style={{
                        paddingHorizontal: 15,
                        marginVertical: 10,
                        backgroundColor: 'rgba(0,0,0,0)',
                        color: 'rgba(169,174,190,1)',
                        fontSize: 16,
                        fontFamily: 'Montserrat-Medium',
                        letterSpacing: -0.3,
                        alignSelf: 'center',
                      }}
                    >
                      No Active Campaigns Available!
                    </Text>
                  </View>
                ) : (
                  <ModalDropdown
                    style={{
                      width: 319,
                      borderWidth: 1,
                      borderColor: 'rgba(218,218,237,1)',
                      borderRadius: 20,
                      backgroundColor: 'rgba(0,0,0,0)',
                    }}
                    dropdownStyle={{
                      // position: 'absolute',
                      marginTop: 10,
                      padding: 10,
                      height: 100,
                      backgroundColor: 'rgba(0,0,0,0.5)',
                      width: 319,
                      borderWidth: 1,
                      borderColor: 'rgba(218,218,237,1)',
                      borderRadius: 20,
                    }}
                    onDropdownWillShow={() => {
                      this.setState({
                        mainStyle: {
                          width: 319,
                          borderWidth: 1,
                          borderColor: 'rgba(218,218,237,1)',
                          borderRadius: 3,
                        },
                      });
                    }}
                    onDropdownWillHide={() => {
                      this.setState({
                        mainStyle: {
                          width: 319,
                          borderWidth: 1,
                          borderColor: 'rgba(218,218,237,1)',
                          borderRadius: 20,
                        },
                      });
                    }}
                    textStyle={{
                      paddingHorizontal: 15,
                      marginVertical: 10,
                      backgroundColor: 'rgba(0,0,0,0)',
                      color: 'rgba(169,174,190,1)',
                      fontSize: 16,
                      fontFamily: 'Montserrat-Medium',
                      letterSpacing: -0.3,
                    }}
                    defaultValue={
                      this.state.activeCampaigns !== ''
                        ? typeof this.state.activeCampaigns === 'object'
                          ? `${this.state.activeCampaigns.details}`
                          : null
                        : 'Please select a campaigns'
                    }
                    onSelect={valueData => {
                      const datArray = value.activeCampaigns.map(
                        itemData => itemData.details
                      );
                      this.setState(
                        {
                          activeCampaigns: value.activeCampaigns.find(
                            itemData => {
                              if (itemData.details === datArray[valueData]) {
                                return itemData;
                              }
                            }
                          ),
                        },
                        () => {
                          value.dispatch({
                            type: 'SELECTED_CAMPAIGNS',
                            data: this.state.activeCampaigns,
                          });
                        }
                      );
                    }}
                    dropdownTextStyle={{
                      // color: 'rgba(169,174,190,1)',
                      backgroundColor: '#fff',
                      margin: 2,
                      fontSize: 16,
                      fontFamily: 'Montserrat-Medium',
                      letterSpacing: -0.3,
                    }}
                    options={value.activeCampaigns.map(
                      itemData => itemData.details
                    )}
                  />
                )}
              </View>
              <TouchableOpacity
                disabled={this.state.activeCampaigns === '' ? true : false}
                onPress={() =>
                  this.props.navigation.navigate('newCampaigns', {
                    campaignsType: 'UPDATE_CAMPAIGNS',
                    data: this.state.activeCampaigns,
                    navigateToValue: 'liveCampaigns',
                  })
                }
                style={{
                  height: 35,
                  width: 35,
                  position: 'absolute',
                  right: 20,
                  backgroundColor: 'rgba(80,227,194,1)',
                  borderRadius: 17.5,
                  top: 25,
                  justifyContent: 'center',
                  alignContent: 'center',
                  alignSelf: 'center',
                  alignItems: 'center',
                }}
              >
                <Image
                  resizeMode="contain"
                  style={{
                    height: 23,
                    width: 23,
                    alignSelf: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  source={require('../../assets/upload.png')}
                />
              </TouchableOpacity>
              <View
                style={{
                  position: 'absolute',
                  top: '15%',
                  zIndex: 5,
                  height: 270,
                  width: '100%',
                  paddingHorizontal: 10,
                }}
              >
                <Image
                  resizeMode="contain"
                  style={{
                    height: 270,
                    width: '100%',
                    borderRadius: 10,
                  }}
                  source={this.state.campaignsImage}
                />
              </View>

              <ScrollView
                showsVerticalScrollIndicator={false}
                style={{
                  position: 'absolute',
                  top: '17%',
                  backgroundColor: 'rgba(0,0,0,0)',
                  width: '100%',
                  height: 700,
                  zIndex: 15,
                }}
              >
                <View
                  style={{
                    marginTop: 250,
                    backgroundColor: '#fff',
                    shadowColor: 'gray',
                    borderTopRightRadius: 14,
                    borderTopLeftRadius: 14,
                    shadowOffset: { width: 0, height: -2 },
                    shadowOpacity: 0.4,
                    shadowRadius: 14,
                    elevation: 1,
                  }}
                >
                  <View
                    style={{
                      width: Dimensions.get('window').width,
                      marginTop: 40,
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
                      height: 600,
                      width: '100%',
                    }}
                  >
                    {this.state.campaignsComponent}
                  </View>
                </View>
              </ScrollView>
            </View>
          );
        }}
      </Consumer>
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
