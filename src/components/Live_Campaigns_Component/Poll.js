import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

class Poll extends Component {
  state = {
    pollQuestion: '',
    pollOptions: '',
  };
  render() {
    return (
      <React.Fragment>
        <Text style={styles.publishAPoll}>Publish a Poll</Text>
        <Text style={styles.pollYourAudience}>Poll your audience </Text>
        <TextInput
          style={styles.rectangle2Copy}
          placeholder="Ask a question.."
          onChangeText={text => this.setState({ pollQuestion: text })}
          value={this.state.pollQuestion}
        />
        <View style={styles.options}>
          <Text style={styles.options1}>Options</Text>
          <View style={styles.addOptions}>
            <TextInput
              style={styles.rectangle2Copy2}
              placeholder="Type a option.."
              onChangeText={text => this.setState({ pollOptions: text })}
              value={this.state.pollOptions}
            />
            <TouchableOpacity activeOpacity={0.5} style={styles.group6}>
              <View style={styles.rectangle16} />
              <Text style={styles.add}>Add</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.bottomTab}>
          <TouchableOpacity activeOpacity={0.5} style={styles.activeTab}>
            <Text style={styles.startOver}>Start Over</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5} style={styles.activeTabCopy}>
            <Text style={styles.publishPoll}>Publish poll</Text>
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
export default Poll;

const styles = StyleSheet.create({
  publishAPoll: {
    paddingTop: '8%',
    paddingLeft: '7%',
    backgroundColor: 'transparent',
    color: 'rgba(74,74,74,1)',
    fontSize: 25,
    fontFamily: 'mont-m',
    letterSpacing: 0.89,
  },
  pollYourAudience: {
    paddingTop: '2%',
    paddingLeft: '7%',
    height: '3.75%',
    backgroundColor: 'transparent',
    lineHeight: 16,
    color: 'rgba(155,155,155,1)',
    fontSize: 15,
    fontFamily: 'mont-m',
    letterSpacing: 0.54,
  },
  rectangle2Copy: {
    marginTop: '2%',
    marginLeft: '7%',
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
    paddingLeft: '7%',
    paddingTop: '5%',
    height: 77,
    width: 311,
  },
  options1: {
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
    // height: Dimensions.get('window').height - 158,
    position: 'absolute',
    bottom: '26.5%',
    left: '3%',
    flexDirection: 'row',
    marginVertical: 13,
    justifyContent: 'center',
  },
});
