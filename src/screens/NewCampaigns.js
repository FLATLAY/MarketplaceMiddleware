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

const typeData = ['Active', 'Inactive', 'Completed'];
const linkType = ['Image', 'Videos'];
let todayDateStart = 'YYYY-DD-MM';
let todayDateEnd = 'YYYY-DD-MM';
class NewCampaigns extends Component {
  static navigationOptions = ({ navigation }) => {
    console.log(navigation);
  };
  state = {
    name: '',
    image: '',
    linkType: linkType[0],
    typeState: '',
    currentDateEnd: todayDateEnd,
    currentDateStart: todayDateStart,
  };

  handleChangeDate = data => {
    if (data.type === 'START') {
      todayDateStart = data.date;
    } else if (data.type === 'END') {
      todayDateEnd = data.date;
    }
    this.setState({
      currentDateEnd: todayDateEnd,
      currentDateStart: todayDateStart,
    });
  };

  render() {
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
                () => this.props.navigation.navigate('Home')
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
                onPress={() =>
                  this.props.navigation.navigate('calender', {
                    dateType: 'START',
                    handleDate: this.handleChangeDate,
                  })
                }
              >
                <Image
                  source={require('../../assets/calender.png')}
                  style={styles.group6Copy}
                />
              </TouchableOpacity>
              <Text style={styles.style}>{this.state.currentDateStart}</Text>
              <View style={styles.baseGhostCopy2} />
              <TouchableOpacity
                style={{
                  position: 'absolute',
                  top: 162,
                  left: 273,
                }}
                onPress={() =>
                  this.props.navigation.navigate('calender', {
                    dateType: 'END',
                    handleDate: this.handleChangeDate,
                  })
                }
              >
                <Image
                  source={require('../../assets/calender.png')}
                  style={styles.group6Copy2}
                />
              </TouchableOpacity>
              <Text style={styles.style1}>{this.state.currentDateEnd}</Text>
            </View>

            <View style={styles.iconArrowLeft} />
            <View style={styles.name}>
              <Text style={styles.title}>Title</Text>
              <TextInput
                style={[styles.rectangle2Copy2, styles.nylon]}
                placeholder="Name"
                underlineColorAndroid="transparent"
                onChangeText={text => this.setState({ name: text })}
                value={this.state.name}
              />
            </View>
            <View style={styles.imgeUrl}>
              <Text style={styles.imageLinks}>{`${
                this.state.linkType
              } Links`}</Text>
              <TextInput
                style={[styles.rectangle2Copy21, styles.links]}
                placeholder={`${this.state.linkType} links`}
                underlineColorAndroid="transparent"
                onChangeText={text => this.setState({ image: text })}
                value={this.state.image}
              />
            </View>
            <View style={styles.status}>
              <Text style={styles.status1}>Status</Text>
              <ModalDropdown
                style={styles.dropdownIconsHover}
                dropdownStyle={styles.baseGhost}
                textStyle={styles.active}
                onSelect={value =>
                  this.setState({ typeState: typeData[value] })
                }
                dropdownTextStyle={{
                  color: 'rgba(169,174,190,1)',
                  fontSize: 16,
                  fontFamily: 'Montserrat-Medium',
                  letterSpacing: -0.3,
                }}
                options={typeData}
              />
            </View>
            <View style={styles.save}>
              <View style={styles.rectangle2} />
              <Text style={styles.save1}>SAVE</Text>
            </View>
            <View style={styles.name1}>
              <Text style={styles.linksType}>Links type</Text>
              <ModalDropdown
                style={styles.dropdownIconsHover1}
                dropdownStyle={styles.baseGhost1}
                textStyle={styles.image}
                onSelect={value => this.setState({ linkType: linkType[value] })}
                dropdownTextStyle={{
                  color: 'rgba(169,174,190,1)',
                  fontSize: 16,
                  fontFamily: 'Montserrat-Medium',
                  letterSpacing: -0.3,
                }}
                options={linkType}
              />
            </View>
          </View>
        </ScrollView>
      </View>
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
  links: {
    paddingLeft: 20,
    backgroundColor: 'transparent',
    color: 'rgba(169,174,190,1)',
    fontSize: 16,
    fontFamily: 'Montserrat-Medium',
    letterSpacing: -0.3,
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
    borderRadius: 4,
    shadowColor: 'rgba(0,0,0,0.1)',
    shadowRadius: 20,
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
