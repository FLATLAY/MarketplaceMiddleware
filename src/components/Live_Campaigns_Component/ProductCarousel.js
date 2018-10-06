import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Switch,
} from 'react-native';
class ProductCarousel extends Component {
  state = {
    message: '',
    value: false,
  };
  handleSwitch = () => {
    this.setState({
      value: !this.state.value,
    });
  };
  render() {
    return (
      <React.Fragment>
        <Text style={styles.publishACTA}>Publish a Product Carousel</Text>

        <TextInput
          style={styles.rectangle2Copy}
          placeholder="Upload Image"
          onChangeText={text => this.setState({ message: text })}
          value={this.state.message}
        />
        <View
          style={{
            marginLeft: 29,
            marginTop: 20,
            flexDirection: 'row',

            alignItems: 'center',
          }}
        >
          <Switch onValueChange={this.handleSwitch} value={this.state.value} />
          <Text
            style={{
              fontSize: 15,
              fontFamily: 'mont-m',
              fontWeight: 'bold',
              padding: 10,
              color: 'rgba(169,174,190,1)',
            }}
          >
            {this.state.value ? 'ON' : 'OFF'}
          </Text>
        </View>

        <View style={styles.bottomTab}>
          <TouchableOpacity activeOpacity={0.5} style={styles.activeTab}>
            <Text style={styles.startOver}>Placement</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5} style={styles.activeTabCopy}>
            <Text style={styles.publishPoll}>Publish</Text>
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
export default ProductCarousel;

const styles = StyleSheet.create({
  publishACTA: {
    paddingTop: 31,
    paddingLeft: 27,
    height: '10.80%',
    backgroundColor: 'transparent',
    color: 'rgba(74,74,74,1)',
    fontSize: 20,
    fontFamily: 'mont-m',
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
    fontFamily: 'mont-m',
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
    fontFamily: 'mont-m',
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
    fontFamily: 'mont-m',
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
    fontFamily: 'mont-m',
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
    fontFamily: 'mont-m',
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
    fontFamily: 'mont-m',
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
    fontFamily: 'mont-m',
    letterSpacing: 0.27,
  },
  calendarWithAClockTimeTools: {
    height: 43,
    width: 43,
  },
  bottomTab: {
    position: 'absolute',
    bottom: '26.5%',
    left: '3%',
    flexDirection: 'row',
    marginVertical: 13,
    justifyContent: 'center',
  },
});
