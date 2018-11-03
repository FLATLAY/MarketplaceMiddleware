import React, { Component } from 'react';
import { View, Dimensions, StatusBar } from 'react-native';
import { CalendarList } from 'react-native-calendars';

// var today = new Date();
// const date = `${today.getFullYear()}-${today.getDate()}  ${parseInt(
//   today.getMonth() + 1
// )} `;

let startDate = '';

class CalenderPop extends Component {
  static navigationOptions = ({ navigation }) => {
    console.log(navigation);
    if (navigation.state.params.dateType === 'END') {
      startDate = navigation.state.params.startDate;
    } else {
      startDate = '';
    }
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
            position: 'absolute',
            height: Dimensions.get('window').height,
            width: Dimensions.get('window').width,
            backgroundColor: 'rgba(0,0,0,0.5)',
          }}
        />

        <View
          style={{
            height: '70%',
            // width: Dimensions.get('window').width - 20,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
          }}
        >
          <CalendarList
            style={{
              height: Dimensions.get('window').width + 50,
              width: Dimensions.get('window').width - 20,
              margin: 50,
            }}
            markedDates={{
              startDate: {
                selected: true,
                marked: true,
                selectedColor: 'blue',
              },
            }}
            horizontal={true}
            pagingEnabled={true}
            scrollEnabled={true}
            calendarWidth={Dimensions.get('window').width - 20}
            current={startDate === '' ? Date() : startDate}
            minDate={startDate === '' ? Date() : startDate}
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
