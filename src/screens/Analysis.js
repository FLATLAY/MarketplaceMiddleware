import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import { Grid, LineChart, XAxis, YAxis } from 'react-native-svg-charts';

import CustomHeader from '../components/CustomHeader';
const data = [
  {
    value: 50,
    date: new Date(2018, 0, 1, 2),
  },
  {
    value: 10,
    date: new Date(2018, 0, 1, 9),
  },
  {
    value: 150,
    date: new Date(2018, 0, 1, 10),
  },
  {
    value: 10,
    date: new Date(2018, 0, 1, 13),
  },
  {
    value: 100,
    date: new Date(2018, 0, 1, 21),
  },
  {
    value: 20,
    date: new Date(2018, 0, 2, 0),
  },
  {
    value: 115,
    date: new Date(2018, 0, 2, 8),
  },
  {
    value: 75,
    date: new Date(2018, 0, 2, 10),
  },
  {
    value: 25,
    date: new Date(2018, 0, 2, 16),
  },
  {
    value: 125,
    date: new Date(2018, 0, 2, 17),
  },
  {
    value: 66,
    date: new Date(2018, 0, 2, 19),
  },
  {
    value: 85,
    date: new Date(2018, 0, 2, 23),
  },
];
class Analysis extends React.PureComponent {
  static navigationOptions = {
    drawerLabel: 'Performance',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../../assets/analysis.png')}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    ),
  };

  render() {
    const axesSvg = { fontSize: 10, fill: 'grey' };
    const verticalContentInset = { top: 10, bottom: 10 };
    const xAxisHeight = 30;
    return (
      <View>
        <CustomHeader {...this.props} headerTitle="Analysis" />
        <View style={{ height: 200, padding: 20, flexDirection: 'row' }}>
          <YAxis
            data={data}
            style={{ marginBottom: xAxisHeight }}
            contentInset={verticalContentInset}
            svg={axesSvg}
          />
          <View style={{ flex: 1, marginLeft: 10 }}>
            <LineChart
              style={{ flex: 1 }}
              data={data}
              contentInset={verticalContentInset}
              svg={{ stroke: 'rgb(134, 65, 244)' }}
            >
              <Grid />
            </LineChart>
            <XAxis
              style={{ marginHorizontal: -10, height: xAxisHeight }}
              data={data}
              formatLabel={(value, index) => index}
              contentInset={{ left: 10, right: 10 }}
              svg={axesSvg}
            />
          </View>
        </View>
      </View>
    );
  }
}
export default Analysis;

const styles = StyleSheet.create({
  icon: {
    height: 24,
    width: 24,
  },
});
