import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import uuid from 'react-native-uuid';
import ImagePicker from 'react-native-image-picker';
import { NavigationActions } from 'react-navigation';

import { Consumer } from '../data/CampaignsData';

const typeData = ['Active', 'Inactive', 'Completed'];
const typeDataImage = {
  Active: require('../../assets/green.png'),
  Inactive: require('../../assets/red.png'),
  Completed: require('../../assets/gray.png'),
};
const linkTypeData = ['Image', 'Videos'];

let todayDateStart;
let todayDateEnd;
let nameValue;
let imageValue;
let linkTypeValue;
let typeStateValue;
let campignsType;
let keyValue;
let navigateTo = '';

const options = {
  title: 'Select Image',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

class NewCampaigns extends Component {
  static navigationOptions = ({ navigation }) => {
    console.log('navigation', navigation);
    if (navigation.state.params.campaignsType === 'UPDATE_CAMPAIGNS') {
      const {
        details,
        endDate,
        image,
        startDate,
        state,
        key,
        linkType,
      } = navigation.state.params.data;
      campignsType = 'UPDATE_CAMPAIGNS';
      nameValue = details;
      todayDateEnd = endDate;
      imageValue = image;
      todayDateStart = startDate;
      keyValue = key;
      navigateTo = navigation.state.params.navigateToValue;
      typeStateValue = state;
      linkTypeValue = linkType;
    } else if (navigation.state.params.campaignsType === 'NEW_CAMPAIGNS') {
      campignsType = 'NEW_CAMPAIGNS';
      nameValue = '';
      todayDateEnd = 'YYYY-MM-DD';
      imageValue = 'DEFAULT';
      navigateTo = navigation.state.params.navigateToValue;
      todayDateStart = 'YYYY-MM-DD';
      keyValue = uuid.v4();
      typeStateValue = '';
      linkTypeValue = linkTypeData[0];
    }
  };

  state = {
    name: nameValue,
    image: imageValue,
    linkType: linkTypeValue,
    typeState: typeStateValue,
    currentDateEnd: todayDateEnd,
    currentDateStart: todayDateStart,
  };

  handleChangeDate = data => {
    if (data.type === 'START') {
      todayDateStart = data.date;
    } else if (data.type === 'END') {
      todayDateEnd = data.date;
      if (new Date() <= new Date(todayDateStart)) {
        typeStateValue = typeData[1];
      } else if (
        new Date() >= new Date(todayDateStart) &&
        new Date() <= new Date(todayDateEnd)
      ) {
        typeStateValue = typeData[0];
      } else if (
        new Date() > new Date(todayDateEnd) &&
        new Date() > new Date(todayDateStart)
      ) {
        typeStateValue = typeData[2];
      }
    }
    console.log('typeStateValue', typeStateValue);

    this.setState({
      currentDateEnd: todayDateEnd,
      currentDateStart: todayDateStart,
      typeState: todayDateEnd === 'YYYY-MM-DD' ? '' : typeStateValue,
    });
  };

  selectImage = () => {
    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        // You can also display the image using data:
        const source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          image: source.uri,
        });
      }
    });
  };

  render() {
    const {
      name,
      image,
      typeState,
      currentDateEnd,
      currentDateStart,
      linkType,
    } = this.state;
    return (
      <Consumer>
        {stateValue => {
          const { dispatch } = stateValue;
          return (
            <View style={styles.root}>
              <View style={styles.header}>
                <TouchableOpacity
                  onPress={() => {
                    todayDateStart = 'YYYY-DD-MM';
                    todayDateEnd = 'YYYY-DD-MM';
                    this.setState(
                      {
                        name: '',
                        image: '',
                        linkType: linkType[0],
                        typeState: '',
                        currentDateEnd: todayDateEnd,
                        currentDateStart: todayDateStart,
                      },
                      () => {
                        this.props.navigation.navigate(navigateTo);
                      }
                    );
                  }}
                >
                  <Image
                    style={styles.iconArrowLeft}
                    source={require('../../assets/left.png')}
                  />
                </TouchableOpacity>
                <Text style={styles.createCampaigns}>Create Campaigns</Text>
              </View>

              <ScrollView
                style={styles.scrollViewCampaignsSettings}
                contentContainerStyle={{
                  height: 750,
                  width: 375,
                }}
              >
                <View style={{ marginTop: -80 }}>
                  <View style={styles.datePicker}>
                    <Text style={styles.dateRange}>Date Range</Text>
                    <Text style={styles.startDate}>Start Date</Text>
                    <Text style={styles.endDate}>End Date</Text>
                    <View style={styles.baseGhostCopy} />
                    <TouchableOpacity
                      style={{
                        position: 'absolute',
                        top: 76,
                        left: 273,
                      }}
                      onPress={() => {
                        todayDateEnd = 'YYYY-DD-MM';
                        this.setState({
                          currentDateEnd: 'YYYY-DD-MM',
                        });
                        this.props.navigation.navigate('calender', {
                          dateType: 'START',
                          handleDate: this.handleChangeDate,
                        });
                      }}
                    >
                      <Image
                        source={require('../../assets/calender.png')}
                        style={styles.group6Copy}
                      />
                    </TouchableOpacity>
                    <Text style={styles.style}>{currentDateStart}</Text>
                    <View style={styles.baseGhostCopy2} />
                    <TouchableOpacity
                      disabled={
                        currentDateStart === 'YYYY-DD-MM' ? true : false
                      }
                      style={{
                        position: 'absolute',
                        top: 162,
                        left: 273,
                      }}
                      onPress={() =>
                        this.props.navigation.navigate('calender', {
                          dateType: 'END',
                          handleDate: this.handleChangeDate,
                          startDate: currentDateStart,
                        })
                      }
                    >
                      <Image
                        source={require('../../assets/calender.png')}
                        style={styles.group6Copy2}
                      />
                    </TouchableOpacity>
                    <Text style={styles.style1}>{currentDateEnd}</Text>
                  </View>

                  <View style={styles.iconArrowLeft} />
                  <View style={styles.name}>
                    <Text style={styles.title}>Title</Text>
                    <TextInput
                      style={[styles.rectangle2Copy2, styles.nylon]}
                      placeholder="Enter title..."
                      underlineColorAndroid="transparent"
                      onChangeText={text => this.setState({ name: text })}
                      value={name}
                    />
                  </View>
                  <View style={styles.imgeUrl}>
                    <Text style={styles.imageLinks}>{`${
                      this.state.linkType
                    }`}</Text>
                    <TouchableOpacity
                      onPress={this.selectImage}
                      style={[styles.rectangle2Copy21]}
                    >
                      <Text
                        style={styles.imageLinks2}
                      >{`Select ${linkType}`}</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.status}>
                    <Text style={styles.status1}>Status</Text>
                    <View style={styles.dropdownIconsHover}>
                      <Text style={styles.active}>
                        {typeState === '' ? 'Please select date' : typeState}
                      </Text>
                    </View>
                  </View>
                  <TouchableOpacity
                    onPress={() => {
                      dispatch({
                        type: campignsType,
                        data: {
                          key: keyValue,
                          name: 'Nylon',
                          handle: '@vandifair',
                          details: name,
                          state: typeState,
                          stateImage: typeDataImage[typeState],
                          image: image,
                          startDate: currentDateStart,
                          endDate: currentDateEnd,
                          linkType: linkTypeValue,
                        },
                      });
                      if (
                        navigateTo === 'liveCampaigns' &&
                        typeState === 'Active'
                      ) {
                        dispatch({
                          type: 'SELECTED_CAMPAIGNS',
                          data: {
                            key: keyValue,
                            name: 'Nylon',
                            handle: '@vandifair',
                            details: name,
                            state: typeState,
                            stateImage: typeDataImage[typeState],
                            image: image,
                            startDate: currentDateStart,
                            endDate: currentDateEnd,
                            linkType: linkTypeValue,
                          },
                        });
                      } else if (
                        navigateTo === 'liveCampaigns' &&
                        typeState === 'Inactive'
                      ) {
                        dispatch({
                          type: 'SELECTED_CAMPAIGNS',
                          data: '',
                        });
                      } else if (
                        navigateTo === 'Home' &&
                        campignsType === 'UPDATE_CAMPAIGNS' &&
                        stateValue.selectedCampaigns.key === keyValue &&
                        typeState === 'Inactive'
                      ) {
                        dispatch({
                          type: 'SELECTED_CAMPAIGNS',
                          data: '',
                        });
                      }

                      this.props.navigation.navigate(navigateTo);
                    }}
                    disabled={
                      name !== '' &&
                      typeState !== '' &&
                      currentDateEnd !== 'YYYY-DD-MM' &&
                      currentDateStart !== 'YYYY-DD-MM'
                        ? false
                        : true
                    }
                    style={styles.save}
                  >
                    <View style={styles.rectangle2} />
                    <Text style={styles.save1}>SAVE</Text>
                  </TouchableOpacity>
                  <View style={styles.name1}>
                    <Text style={styles.linksType}>Links type</Text>
                    <ModalDropdown
                      style={styles.dropdownIconsHover1}
                      dropdownStyle={styles.baseGhost1}
                      textStyle={styles.image}
                      defaultValue={
                        linkTypeValue !== ''
                          ? linkTypeValue
                          : 'Please select...'
                      }
                      onSelect={value =>
                        this.setState({ linkType: linkTypeData[value] })
                      }
                      dropdownTextStyle={{
                        color: 'rgba(169,174,190,1)',
                        fontSize: 16,
                        fontFamily: 'Montserrat-Medium',
                        letterSpacing: -0.3,
                      }}
                      options={linkTypeData}
                    />
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

export default NewCampaigns;

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'white',
    flex: 1,
    paddingTop: 20,
  },
  scrollViewCampaignsSettings: {
    height: 667,
    width: 375,
  },
  datePicker: {
    position: 'absolute',
    top: 498,
    left: 40,
    height: 194,
    width: 311,
  },
  dateRange: {
    position: 'absolute',
    height: 26,
    width: 304,
    backgroundColor: 'transparent',
    color: 'rgba(124,132,149,1)',
    fontSize: 19,
    fontFamily: 'Montserrat-Medium',
    letterSpacing: 0.35,
  },
  startDate: {
    position: 'absolute',
    top: 40,
    left: 27,
    height: 26,
    width: 284,
    backgroundColor: 'transparent',
    color: 'rgba(124,132,149,1)',
    fontSize: 19,
    fontFamily: 'Montserrat-Medium',
    letterSpacing: 0.35,
  },
  endDate: {
    position: 'absolute',
    top: 117,
    left: 27,
    height: 26,
    width: 284,
    backgroundColor: 'transparent',
    color: 'rgba(124,132,149,1)',
    fontSize: 19,
    fontFamily: 'Montserrat-Medium',
    letterSpacing: 0.35,
  },
  baseGhostCopy: {
    position: 'absolute',
    top: 70,
    left: 27,
    height: 38,
    width: 283,
    borderWidth: 1,
    borderColor: 'rgba(218,218,237,1)',
    borderRadius: 3,
    backgroundColor: 'rgba(255,255,255,1)',
  },
  group6Copy: {
    height: 26,
    width: 27,
    opacity: 0.6,
  },
  style: {
    position: 'absolute',
    top: 78,
    left: 51,
    height: 22,
    width: 120,
    backgroundColor: 'transparent',
    color: 'rgba(169,174,190,1)',
    fontSize: 18,
    fontFamily: 'Montserrat-Medium',
    letterSpacing: -0.34,
  },
  baseGhostCopy2: {
    position: 'absolute',
    top: 156,
    left: 27,
    height: 38,
    width: 283,
    borderWidth: 1,
    borderColor: 'rgba(218,218,237,1)',
    borderRadius: 3,
    backgroundColor: 'rgba(255,255,255,1)',
  },
  group6Copy2: {
    height: 26,
    width: 27,
    opacity: 0.6,
  },
  style1: {
    position: 'absolute',
    top: 162,
    left: 51,
    height: 22,
    width: 120,
    backgroundColor: 'transparent',
    color: 'rgba(169,174,190,1)',
    fontSize: 18,
    fontFamily: 'Montserrat-Medium',
    letterSpacing: -0.34,
  },
  header: {
    height: 78,
    width: 376,
    alignItems: 'center',
    flexDirection: 'row',
  },
  createCampaigns: {
    height: 25,
    width: 273,
    textAlign: 'center',
    color: 'rgba(155,155,155,1)',
    fontSize: 18,
    fontFamily: 'Montserrat-Medium',
  },
  iconArrowLeft: {
    marginLeft: 20,
    height: 26,
    width: 25,
    // transform: [
    //   {
    //     rotate: '-180deg',
    //   },
    // ],
  },
  name: {
    position: 'absolute',
    top: 80,
    left: 36,
    height: 78,
    width: 319,
  },
  title: {
    position: 'absolute',
    height: 26,
    width: 304,
    backgroundColor: 'transparent',
    color: 'rgba(124,132,149,1)',
    fontSize: 19,
    fontFamily: 'Montserrat-Medium',
    letterSpacing: 0.35,
  },
  rectangle2Copy2: {
    position: 'absolute',
    top: 36,
    height: 42,
    width: 319,
    borderWidth: 1,
    borderColor: 'rgba(218,218,237,1)',
    borderRadius: 4,
    backgroundColor: 'rgba(255,255,255,1)',
  },
  nylon: {
    paddingLeft: 20,
    backgroundColor: 'transparent',
    color: 'rgba(169,174,190,1)',
    fontSize: 16,
    fontFamily: 'Montserrat-Medium',
    letterSpacing: -0.3,
  },
  imgeUrl: {
    position: 'absolute',
    top: 393,
    left: 36,
    height: 78,
    width: 319,
  },
  imageLinks2: {
    backgroundColor: 'transparent',
    color: 'rgba(124,132,149,0.7)',
    fontSize: 16.5,
    paddingHorizontal: 10,
    paddingVertical: 10,
    fontFamily: 'Montserrat-Medium',
    letterSpacing: 0.35,
  },
  imageLinks: {
    position: 'absolute',
    height: 26,
    width: 304,
    backgroundColor: 'transparent',
    color: 'rgba(124,132,149,1)',
    fontSize: 19,
    fontFamily: 'Montserrat-Medium',
    letterSpacing: 0.35,
  },
  rectangle2Copy21: {
    position: 'absolute',
    top: 36,
    height: 42,
    width: 319,
    borderWidth: 1,
    borderColor: 'rgba(218,218,237,1)',
    borderRadius: 4,
    backgroundColor: 'rgba(255,255,255,1)',
  },
  status: {
    position: 'absolute',
    top: 288,
    left: 36,
    height: 78,
    width: 319,
  },
  status1: {
    position: 'absolute',
    height: 26,
    width: 304,
    backgroundColor: 'transparent',
    color: 'rgba(124,132,149,1)',
    fontSize: 19,
    fontFamily: 'Montserrat-Medium',
    letterSpacing: 0.35,
  },
  dropdownIconsHover: {
    position: 'absolute',
    top: 36,
    height: 42,
    width: 319,
    borderWidth: 1,
    borderColor: 'rgba(218,218,237,1)',
    borderRadius: 3,
  },
  baseGhost: {
    height: 100,
    width: 319,
  },
  active: {
    paddingHorizontal: 15,
    marginVertical: 10,
    color: 'rgba(169,174,190,1)',
    fontSize: 16,
    fontFamily: 'Montserrat-Medium',
    letterSpacing: -0.3,
  },
  save: {
    position: 'absolute',
    top: 725,
    left: 33,
    height: 42,
    width: 311,
  },
  rectangle2: {
    position: 'absolute',
    height: 42,
    width: 311,
    shadowColor: 'rgba(0,0,0,0.1)',
    shadowRadius: 20,
    borderRadius: 21.5,
    shadowOpacity: 1,
    backgroundColor: '#71E7CA',
    shadowOffset: {
      height: 10,
      width: 0,
    },
  },
  save1: {
    position: 'absolute',
    top: 8,
    left: 125,
    height: 23,
    width: 62,
    backgroundColor: 'transparent',
    textAlign: 'center',
    color: 'rgba(255,255,255,1)',
    fontSize: 17,
    fontFamily: 'Montserrat-Medium',
    letterSpacing: -0.3,
  },
  name1: {
    position: 'absolute',
    top: 185,
    left: 36,
    height: 76,
    width: 319,
  },
  linksType: {
    position: 'absolute',
    height: 26,
    width: 304,
    backgroundColor: 'transparent',
    color: 'rgba(124,132,149,1)',
    fontSize: 19,
    fontFamily: 'Montserrat-Medium',
    letterSpacing: 0.35,
  },
  dropdownIconsHover1: {
    position: 'absolute',
    top: 34,
    height: 42,
    width: 319,
    borderWidth: 1,
    borderColor: 'rgba(218,218,237,1)',
    borderRadius: 3,
  },
  baseGhost1: {
    position: 'absolute',
    height: 80,
    width: 319,
  },
  image: {
    paddingHorizontal: 15,
    marginVertical: 10,
    backgroundColor: 'transparent',
    color: 'rgba(169,174,190,1)',
    fontSize: 16,
    fontFamily: 'Montserrat-Medium',
    letterSpacing: -0.3,
  },
});
