import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Grid, LineChart, XAxis, YAxis } from 'react-native-svg-charts';
import { Circle, G, Line, Rect, Text } from 'react-native-svg';

import CustomHeader from '../components/CustomHeader';
const data = [
  {
    time: '2 am',
    followers: 228,
  },
  {
    time: '6 am',
    followers: 222,
  },
  {
    time: '8 am',
    followers: 345,
  },
  {
    time: '9 am',
    followers: 280,
  },
  {
    time: '10 am',
    followers: 200,
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

  state = {
    showDetails: false,
    xValue: null,
    yValue: null,
  };

  handleShowDetails = (xValue, yValue) => {
    this.setState({
      showDetails: true,
      xValue,
      yValue,
    });
  };

  render() {
    const Decorator = ({ x, y, data }) => {
      return data.map((value, index) => (
        <Circle
          key={index}
          cx={x(index)}
          cy={y(value.followers)}
          onPress={() => this.handleShowDetails(index, value.followers)}
          r={4}
          stroke={'rgb(134, 65, 244)'}
          fill={'white'}
        />
      ));
    };
    const axesSvg = { fontSize: 10, fill: 'grey' };
    const verticalContentInset = { top: 10, bottom: 10, paddingHorizontal: 10 };
    const xAxisHeight = 30;
    const HorizontalLine = ({ y }) => (
      <Line
        key={'zero-axis'}
        x1={'0%'}
        x2={'100%'}
        y1={y(this.state.yValue)}
        y2={y(this.state.yValue)}
        stroke={'grey'}
        strokeDasharray={[4, 8]}
        strokeWidth={2}
      />
    );

    const Tooltip = ({ x, y }) => {
      console.log(`${x(this.state.xValue)} ${y(this.state.yValue)}`);
      return (
        <G x={x(this.state.xValue) - 75 / 2} key={'tooltip'}>
          <G y={y(this.state.yValue)}>
            <Text
              x={75 / 2}
              dy={20}
              alignmentBaseline={'middle'}
              textAnchor={'middle'}
              stroke={'rgb(134, 65, 244)'}
            >
              {`${this.state.yValue}`}
            </Text>
          </G>
          <G x={75 / 2}>
            <Circle
              cy={y(this.state.yValue)}
              r={6}
              stroke={'white'}
              strokeWidth={2}
              fill={'rgb(134, 65, 244)'}
            />
          </G>
        </G>
      );
    };
    return (
      <View>
        <CustomHeader {...this.props} headerTitle="Analysis" />
        <View style={{ height: 200, padding: 20, flexDirection: 'row' }}>
          <YAxis
            data={data}
            style={{ marginBottom: xAxisHeight }}
            yAccessor={({ index }) => data[index].followers}
            // numberOfTicks={5}
            // formatLabel={(value, index) => data[4 - index].followers}
            contentInset={verticalContentInset}
            svg={axesSvg}
          />
          <View style={{ flex: 1, marginLeft: 10 }}>
            <LineChart
              style={{ flex: 1 }}
              data={data}
              xAccessor={({ index }) => index}
              yAccessor={({ item }) => item.followers}
              contentInset={verticalContentInset}
              svg={{ stroke: 'rgb(134, 65, 244)' }}
            >
              <Grid />
              <Decorator />
              {this.state.showDetails ? <HorizontalLine /> : null}
              <Tooltip />
            </LineChart>
            <XAxis
              style={{ marginHorizontal: 10, height: xAxisHeight }}
              data={data}
              xAccessor={({ index }) => index}
              formatLabel={(value, index) => data[index].time}
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
