import React, { Component } from 'react';
import { View, StyleSheet, AsyncStorage, YellowBox } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

class LoadingScreen extends Component {
  state = {
    visible: false,
  };

  componentWillMount() {
    this.setState({
      visible: true,
    });
    const { navigation } = this.props;
    setTimeout(async () => {
      try {
        const value = await AsyncStorage.getItem('email');
        if (value !== null) {
          navigation.navigate('Home');
        } else {
          navigation.navigate('Auth');
        }
      } catch (error) {
        // Error retrieving data
        navigation.navigate('Auth');
        this.setState({
          visible: false,
        });
        console.log('HOLA', error);
      }
    }, 500);
  }
  render() {
    YellowBox.ignoreWarnings(['Module RNFetchBlob']);

    return (
      <View style={styles.container}>
        <Spinner
          color="#fff"
          size="large"
          visible={this.state.visible}
          textContent={'Loading...'}
          textStyle={{ color: '#fff' }}
          backgroundColor="#fff"
        />
      </View>
    );
  }
}
export default LoadingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#50E3C2',
  },
});
