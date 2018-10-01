import React, { Component } from 'react';
import { View, Dimensions, StatusBar } from 'react-native';
import { CalendarList } from 'react-native-calendars';

// var today = new Date();
// const date = `${today.getFullYear()}-${today.getDate()}  ${parseInt(
//   today.getMonth() + 1
// )} `;

class CalenderPop extends Component {
  static navigationOptions = ({ navigation }) => {
    console.log(navigation);
  };

  state = {
    sendData: null,
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
        }}
      >
        <StatusBar backgroundColor="#9B9B9B" barStyle="dark-content" />

        <View
          style={{
            height: '50%',
            width: '100%',
            backgroundColor: '#fff',
            justifyContent: 'center',
          }}
        >
          <CalendarList
            style={{
              height: Dimensions.get('window').width,
              width: Dimensions.get('window').width,
            }}
            horizontal={true}
            pagingEnabled={true}
            scrollEnabled={true}
            current={Date()}
            onDayPress={day => {
              let sendData = {};
              if (this.props.navigation.state.params.dateType === 'START') {
                sendData = {
                  type: 'START',
                  date: day.dateString,
                };
              } else {
                sendData = {
                  type: 'END',
                  date: day.dateString,
                };
              }
              this.props.navigation.state.params.handleDate(sendData);
              this.props.navigation.navigate('newCampaigns');
            }}
          />
        </View>
      </View>
    );
  }
}

export default CalenderPop;
