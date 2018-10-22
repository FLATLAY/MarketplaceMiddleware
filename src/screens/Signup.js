import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  AsyncStorage,
} from 'react-native';
import axios from 'axios';
import Spinner from 'react-native-loading-spinner-overlay';

import ApiLinks from '../data/ApiLinks';

export default class Signup extends Component {
  state = {
    email: '',
    username: '',
    password: '',
    visible: false,
    validatedEmail: false,
  };

  emailFocus = React.createRef();

  passwordFocus = React.createRef();

  goEmail = text => {
    if (text.length > 0) {
      const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (reg.test(text)) {
        this.setState({ validatedEmail: true, email: text });
      } else {
        this.setState({ validatedEmail: false, email: text });
      }
    } else {
      this.setState({ validatedEmailStyle: true, email: text });
    }
  };

  handleCreateNewAccount = async () => {
    this.setState({
      visible: true,
    });
    const { email, password, username, validatedEmail } = this.state;
    if (email !== '' && password !== '' && username !== '' && validatedEmail) {
      try {
        const response = await axios.post(ApiLinks.register, {
          email,
          password,
        });
        const data = response.data;
        this.setState({
          visible: false,
        });
        if (data.result === 'error') {
          Alert.alert('Error Message', data.msg, [{ text: 'OK' }], {
            cancelable: false,
          });
        } else if (data.result === 'success') {
          await AsyncStorage.multiSet([
            ['email', `${this.state.email}`],
            ['password', `${this.state.password}`],
          ]);
          this.props.navigation.navigate('Home');
        }

        console.log(data);
      } catch (error) {
        this.setState({
          visible: false,
        });
        console.log(error);
        Alert.alert(
          'Error Message',
          error.response.data[0].description,
          [{ text: 'OK' }],
          { cancelable: false }
        );
      }
    } else {
      this.setState(
        {
          visible: false,
        },
        () => {
          Alert.alert(
            'Error Message',
            'Empty text input or not valid email address',
            [{ text: 'OK' }],
            {
              cancelable: false,
            }
          );
        }
      );
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
              textStyle={{ color: '#fff', fontFamily: 'Montserrat-Medium' }}
            />
          </View>
        ) : null}
        <View style={styles.rect4}>
          <Text style={[styles.text, { fontFamily: 'Montserrat-Medium' }]}>
            Have an account already?
          </Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('LogIn')}
            activeOpacity={0.4}
          >
            <Text style={[styles.text2, { fontFamily: 'Montserrat-Medium' }]}>
              Log in
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.facebook} activeOpacity={0.6}>
          <View style={styles.rectangle2Copy2} />
          <Text
            style={[
              styles.signUpWithFaceboo,
              { fontFamily: 'Montserrat-Medium' },
            ]}
          >
            Sign up with Facebook
          </Text>
          <View style={styles.facebook1}>
            <Image
              style={{ height: 25, width: 25 }}
              source={require('../../assets/facebook.png')}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.google} activeOpacity={0.6}>
          <View style={styles.search}>
            <Image
              style={{ height: 25, width: 25 }}
              source={require('../../assets/google.png')}
            />
          </View>
          <View style={styles.rectangle2Copy} />
          <Text
            style={[
              styles.signUpWithGoogle,
              { fontFamily: 'Montserrat-Medium' },
            ]}
          >
            Sign up with Google
          </Text>
          <View style={styles.rectangle3} />
        </TouchableOpacity>

        <View style={styles.form}>
          <TextInput
            style={[
              styles.rectangle2Copy1,
              { fontFamily: 'Montserrat-Medium' },
            ]}
            keyboardType="email-address"
            returnKeyType="next"
            underlineColorAndroid="transparent"
            onSubmitEditing={() => {
              this.emailFocus.current.focus();
            }}
            textContentType="username"
            placeholder="username"
            onChangeText={text => this.setState({ username: text })}
            value={this.state.username}
          />
          <TextInput
            ref={this.emailFocus}
            style={[
              styles.rectangle2Copy21,
              { fontFamily: 'Montserrat-Medium' },
            ]}
            returnKeyType="next"
            underlineColorAndroid="transparent"
            onSubmitEditing={() => {
              this.passwordFocus.current.focus();
            }}
            textContentType="emailAddress"
            keyboardType="email-address"
            placeholder="Email"
            onChangeText={text => this.goEmail(text)}
            value={this.state.email}
          />
          <TextInput
            ref={this.passwordFocus}
            style={[
              styles.rectangle2Copy3,
              { fontFamily: 'Montserrat-Medium' },
            ]}
            secureTextEntry
            underlineColorAndroid="transparent"
            returnKeyType="done"
            textContentType="password"
            placeholder="Password"
            onChangeText={text => this.setState({ password: text })}
            value={this.state.password}
          />
          <TouchableOpacity
            onPress={this.handleCreateNewAccount}
            style={styles.rectangle2}
            activeOpacity={0.6}
          >
            <Text
              style={[styles.register, { fontFamily: 'Montserrat-Medium' }]}
            >
              Register
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={[styles.register1, { fontFamily: 'Montserrat-Medium' }]}>
          REGISTER
        </Text>
        <Image source={require('../../assets/logo.png')} style={styles.logo} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: 'white',
    flex: 1,
    marginTop: 20,
  },
  facebook: {
    position: 'absolute',
    top: '89.51%',
    left: '8.80%',
    height: '6.90%',
    width: '83.20%',
  },
  rectangle2Copy2: {
    position: 'absolute',
    top: '0.00%',
    left: '0.00%',
    height: '100.00%',
    width: '100.00%',
    borderRadius: 4,
    shadowColor: 'rgba(0,0,0,0.1)',
    shadowRadius: 20,
    shadowOpacity: 1,
    backgroundColor: 'rgba(34,112,186,1)',
    shadowOffset: {
      height: 10,
      width: 0,
    },
  },
  signUpWithFaceboo: {
    position: 'absolute',
    top: '23.91%',
    left: '23.08%',
    backgroundColor: 'transparent',
    color: 'rgba(255,255,255,1)',
    fontSize: 18,
    // fontFamily: 'Avenir-Medium',
  },
  facebook1: {
    position: 'absolute',
    top: '21.74%',
    left: '9.62%',
  },
  google: {
    position: 'absolute',
    top: '78.71%',
    left: '8.80%',
    height: '6.90%',
    width: '83.20%',
  },
  search: {
    position: 'absolute',
    top: '25.78%',
    left: '10.23%',
  },
  rectangle2Copy: {
    position: 'absolute',
    top: '0.00%',
    left: '0.00%',
    height: '100.00%',
    width: '100.00%',
    borderWidth: 3,
    borderColor: 'rgba(238,236,241,1)',
    borderRadius: 4,
    shadowColor: 'rgba(0,0,0,0.1)',
    shadowRadius: 20,
    shadowOpacity: 1,
    backgroundColor: 'transparent',
    shadowOffset: {
      height: 9,
      width: 0,
    },
  },
  signUpWithGoogle: {
    position: 'absolute',
    top: '21.74%',
    left: '23.08%',
    backgroundColor: 'transparent',
    color: 'rgba(155,155,155,1)',
    fontSize: 18,
  },
  rectangle3: {
    position: 'absolute',
    top: '21.74%',
    left: '9.62%',
    height: '56.52%',
    width: '8.33%',
    backgroundColor: 'transparent',
  },
  form: {
    position: 'absolute',
    top: '32.38%',
    left: '8.80%',
    height: '34.18%',
    width: '83.20%',
  },
  rectangle2: {
    position: 'absolute',
    top: '81.58%',
    left: '0.32%',
    height: '18.42%',
    width: '99.68%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 21.5,
    shadowColor: 'rgba(0,0,0,0.1)',
    shadowRadius: 20,
    shadowOpacity: 1,
    backgroundColor: 'rgba(80,227,194,1)',
    shadowOffset: {
      height: 10,
      width: 0,
    },
    opacity: 1,
  },
  rectangle2Copy1: {
    paddingLeft: 14,
    position: 'absolute',
    top: '0.00%',
    left: '0.00%',
    height: '18.42%',
    width: '99.68%',
    borderWidth: 1,
    borderColor: 'rgba(218,218,237,1)',
    borderRadius: 4,
    backgroundColor: 'rgba(255,255,255,1)',
  },
  rectangle2Copy21: {
    paddingLeft: 14,
    position: 'absolute',
    top: '27.19%',
    left: '0.00%',
    height: '18.42%',
    width: '99.68%',
    borderWidth: 1,
    borderColor: 'rgba(218,218,237,1)',
    borderRadius: 4,
    backgroundColor: 'rgba(255,255,255,1)',
  },
  rectangle2Copy3: {
    paddingLeft: 14,
    position: 'absolute',
    top: '54.82%',
    left: '0.00%',
    height: '18.42%',
    width: '99.68%',
    borderWidth: 1,
    borderColor: 'rgba(218,218,237,1)',
    borderRadius: 4,
    backgroundColor: 'rgba(255,255,255,1)',
  },
  register: {
    height: 23,
    backgroundColor: 'transparent',
    textAlign: 'center',
    color: 'rgba(255,255,255,1)',
    fontSize: 17,
    // fontFamily: 'Avenir-Medium',
    letterSpacing: -0.3,
  },
  register1: {
    position: 'absolute',
    top: '20.99%',
    left: '31.73%',
    height: '5.70%',
    backgroundColor: 'transparent',
    color: 'rgba(85,85,85,1)',
    fontSize: 30,
    // fontFamily: 'Avenir-Light',
  },
  logo: {
    position: 'absolute',
    top: '0.00%',
    left: '35.47%',
    height: '16.49%',
    width: '29.33%',
    backgroundColor: 'transparent',
  },
  rect4: {
    top: '71.81%',
    width: 284,
    left: '10%',
    height: '5%',
    position: 'absolute',
    flexDirection: 'row',
  },
  text: {
    fontSize: 18,
    color: 'rgba(155,155,155,1)',
  },
  text2: {
    paddingLeft: 5,
    fontSize: 18,
    color: 'rgba(74,144,226,1)',
  },
});
