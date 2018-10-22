import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const BroadcastData = [
  {
    key: '1',
    name: 'VIMEO',
    isSelected: false,
    image:
      'https://pmcvariety.files.wordpress.com/2014/01/vimeo_logo.jpg?w=500',
    link: '',
  },
  {
    key: '2',
    name: 'YOUTUBE',
    isSelected: false,
    image: 'http://www.youthincmag.com/wp-content/uploads/2018/05/YouTube.jpg',
    link: '',
  },
  {
    key: '3',
    name: 'INSTAGRAM LIVE',
    isSelected: false,
    image:
      'https://i.pinimg.com/originals/d7/84/3a/d7843ac53b2f80e0bf32998329ec7260.png',
    link: '',
  },
  {
    key: '4',
    name: 'SNAPCHAT',
    isSelected: false,
    image:
      'https://pmcvariety.files.wordpress.com/2017/11/snapchat-logo.jpg?w=700&h=393&crop=1',
    link: '',
  },
  {
    key: '5',
    name: 'PERISCOPE',
    isSelected: false,
    image:
      'https://www.gannett-cdn.com/-mm-/2b733376d47775456e7b4e2a4a86b4d86ad3c3b9/c=0-127-1024-897/local/-/media/2016/03/28/USATODAY/USATODAY/635947222185033040-periscope-logo.jpg?width=534&height=401&fit=crop',
    link: '',
  },
];

class BroadcastTools extends Component {
  state = {
    broadcast: BroadcastData,
    selectedData: null,
  };
  handleSelectBroadcast = data => {
    const oldValue = [...BroadcastData];
    const newValue = oldValue.map(item => {
      if (item.name === data.name) {
        item.isSelected = !item.isSelected;
        return item;
      }
      item.isSelected = false;

      return item;
    });

    this.setState({
      broadcast: newValue,
      selectedData: data,
    });
  };
  render() {
    return (
      <React.Fragment>
        <Text style={styles.publishACTA}>Broadcast Settings</Text>
        <Text style={styles.pollYourAudience}>Select Hosting Service</Text>

        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginHorizontal: 20,
          }}
        >
          {this.state.broadcast.map(item => {
            const selected = item.isSelected ? styles.isSelected : null;
            return (
              <TouchableOpacity
                key={item.key}
                style={[{ margin: 5 }, selected]}
                activeOpacity={0.5}
                onPress={() => this.handleSelectBroadcast(item)}
              >
                <Image
                  resizeMode="cover"
                  source={{ uri: item.image }}
                  style={{ height: 70, width: 125, borderRadius: 20 }}
                />
              </TouchableOpacity>
            );
          })}
        </View>

        <View style={styles.bottomTab}>
          <TouchableOpacity activeOpacity={0.5} style={styles.activeTabCopy}>
            <Text style={styles.publishPoll}>Go Live</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5}>
            <Image
              style={styles.calendarWithAClockTimeTools}
              source={require('../../../assets/calender.png')}
            />
          </TouchableOpacity>
        </View>
      </React.Fragment>
    );
  }
}
export default BroadcastTools;

const styles = StyleSheet.create({
  isSelected: {
    borderWidth: 3,
    borderColor: 'rgba(80,227,194,1)',
    borderRadius: 22,
  },
  publishACTA: {
    paddingTop: 31,
    paddingLeft: 27,
    height: '10.80%',
    width: '84.53%',
    backgroundColor: 'transparent',
    color: 'rgba(74,74,74,1)',
    fontSize: 25,
    fontFamily: 'Montserrat-Medium',
    letterSpacing: 0.89,
  },
  pollYourAudience: {
    paddingTop: 2,
    paddingLeft: 29,
    height: '3.75%',
    backgroundColor: 'transparent',
    lineHeight: 16,
    color: 'rgba(155,155,155,1)',
    fontSize: 15,
    fontFamily: 'Montserrat-Medium',
    letterSpacing: 0.54,
  },
  rectangle2Copy: {
    paddingTop: 8,
    marginLeft: 29,
    height: '6.30%',
    width: '82.93%',
    borderWidth: 1,
    borderColor: 'rgba(218,218,237,1)',
    borderRadius: 4,
    backgroundColor: 'rgba(255,255,255,1)',
    color: 'rgba(169,174,190,1)',
    fontSize: 16,
    fontFamily: 'Montserrat-Medium',
    letterSpacing: -0.3,
    paddingLeft: 14,
  },
  options: {
    marginLeft: 29,
    height: 77,
    width: 311,
  },
  options1: {
    paddingTop: 16,
    color: 'rgba(155,155,155,1)',
    fontSize: 15,
    fontFamily: 'Montserrat-Medium',
    letterSpacing: 0.54,
  },
  addOptions: {
    marginTop: 10,
    height: 42,
    width: 308,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rectangle2Copy2: {
    marginRight: 15,
    height: 42,
    width: 220,
    borderWidth: 1,
    borderColor: 'rgba(218,218,237,1)',
    borderRadius: 4,
    backgroundColor: 'rgba(255,255,255,1)',
    color: 'rgba(169,174,190,1)',
    fontSize: 16,
    fontFamily: 'Montserrat-Medium',
    letterSpacing: -0.3,
    paddingLeft: 14,
  },
  group6: {
    height: 42,
    width: 73,
    borderRadius: 3,
    backgroundColor: 'rgba(80,227,194,1)',
    justifyContent: 'center',
  },
  add: {
    textAlign: 'center',
    color: 'rgba(255,255,255,1)',
    fontSize: 17,
    fontFamily: 'Montserrat-Medium',
    letterSpacing: 0.17,
  },
  activeTab: {
    height: 43,
    width: 143,
    marginRight: 10,
    borderRadius: 21.5,
    backgroundColor: 'rgba(80,227,194,1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  startOver: {
    textAlign: 'center',
    color: 'rgba(255,255,255,1)',
    fontSize: 14,
    fontFamily: 'Montserrat-Medium',
    letterSpacing: 0.27,
  },
  activeTabCopy: {
    height: 43,
    width: 143,
    marginRight: 10,
    borderRadius: 21.5,
    backgroundColor: 'rgba(80,227,194,1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  publishPoll: {
    backgroundColor: 'transparent',
    textAlign: 'center',
    color: 'rgba(255,255,255,1)',
    fontSize: 14,
    fontFamily: 'Montserrat-Medium',
    letterSpacing: 0.27,
  },
  calendarWithAClockTimeTools: {
    height: 43,
    width: 43,
  },
  bottomTab: {
    position: 'absolute',
    bottom: '26.5%',
    left: '45%',
    flexDirection: 'row',
    marginVertical: 13,
    justifyContent: 'center',
  },
});
