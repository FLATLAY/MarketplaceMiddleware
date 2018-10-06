import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  AsyncStorage,
} from 'react-native';
import { Constants } from 'expo';
import axios from 'axios';
import Spinner from 'react-native-loading-spinner-overlay';

import ApiLinks from '../data/ApiLinks';

//a@b1.com
//Aa123456

class Login extends Component {
  state = {
    email: '',
    password: '',
    visible: false,
  };

  passwordFocus = React.createRef();

  handleLoginAccount = async () => {
    this.setState({
      visible: true,
    });
    const { email, password } = this.state;
    if (email !== '' && password !== '') {
      try {
        const response = await axios.post(ApiLinks.login, {
          email,
          password,
        });
        const data = response.data;
        console.log(data);
        this.setState({
          visible: false,
        });
        if (data.result === 'success') {
          await AsyncStorage.multiSet([
            ['email', `${this.state.email}`],
            ['password', `${this.state.password}`],
          ]);
          this.props.navigation.navigate('Home');
        } else {
          Alert.alert('Error Message', data.msg, [{ text: 'OK' }], {
            cancelable: false,
          });
        }
      } catch (error) {
        this.setState({
          visible: false,
        });
        console.log(error);
      }
    } else {
      this.setState({
        visible: false,
      });
      Alert.alert('Error Message', 'Input Text is Empty', [{ text: 'OK' }], {
        cancelable: false,
      });
    }
  };
  render() {
    return (
      <View style={styles.root}>
        {this.state.visible ? (
          <View style={{ flex: 1 }}>
            <Spinner
              visible={this.state.visible}
              textContent={'Loading...'}
              textStyle={{ color: '#fff' }}
            />
          </View>
        ) : null}
        <Image source={require('../../assets/logo.png')} style={styles.logo} />
        <Text style={styles.login}>LOGIN</Text>
        <View style={styles.form}>
          <View>
            <TextInput
              style={styles.inputTextStyle}
              underlineColorAndroid="transparent"
              onChangeText={text => this.setState({ email: text })}
              returnKeyType="next"
              onSubmitEditing={() => {
                this.passwordFocus.current.focus();
              }}
              textContentType="emailAddress"
              keyboardType="email-address"
              placeholder="Email"
              value={this.state.email}
            />
          </View>
          <View>
            <TextInput
              ref={this.passwordFocus}
              style={[styles.inputTextStyle, { marginTop: 21 }]}
              underlineColorAndroid="transparent"
              onChangeText={text => this.setState({ password: text })}
              secureTextEntry
              returnKeyType="done"
              textContentType="password"
              placeholder="Password"
              value={this.state.password}
            />
          </View>
          <TouchableOpacity
            onPress={this.handleLoginAccount}
            style={styles.rectangle2}
            activeOpacity={0.6}
          >
            <Text style={styles.login1}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.signUp}>
          <Text style={styles.dontHaveAnAccoun}>Don’t have an account?</Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('SignUp')}
          >
            <Text style={styles.signUp1}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Login;

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'white',
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  logo: {
    position: 'absolute',
    top: '0.00%',
    left: '30.67%',
    height: '21.89%',
    width: '38.93%',
    backgroundColor: 'transparent',
  },
  inputTextStyle: {
    height: 42,
    fontSize: 16,
    paddingLeft: 14,
    borderRadius: 4,
    fontFamily: 'mont-m',
    borderWidth: 1,
    borderColor: '#DADAED',
  },
  login: {
    position: 'absolute',
    top: '27.89%',
    left: '37.07%',
    height: '5.70%',
    backgroundColor: 'transparent',
    color: 'rgba(85,85,85,1)',
    fontSize: 30,
    fontFamily: 'mont-sb',
  },
  form: {
    position: 'absolute',
    top: '40.08%',
    left: '8.80%',
    height: '24.89%',
    width: '83.20%',
  },
  login1: {
    fontSize: 17,
    letterSpacing: -0.3,
    color: '#fff',
    fontFamily: 'mont-m',
  },
  rectangle2: {
    position: 'absolute',
    top: '74.70%',
    left: '0.32%',
    marginTop: 21,
    height: '25.30%',
    width: '99.68%',
    backgroundColor: '#71E7CA',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 21.5,
  },
  signUp: {
    position: 'absolute',
    top: '92.95%',
    left: '10.47%',
    height: '5.00%',
    width: '100%',
    flexDirection: 'row',
  },
  dontHaveAnAccoun: {
    color: 'rgba(155,155,155,1)',
    fontSize: 18,
    fontFamily: 'mont-m',
  },
  signUp1: {
    paddingLeft: 5,
    color: 'rgba(74,144,226,1)',
    fontSize: 18,
    fontFamily: 'mont-m',
  },
});
