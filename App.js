import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import Login from './src/screens/Login';
import {
  createStackNavigator,
  createDrawerNavigator,
  createSwitchNavigator,
} from 'react-navigation';

import Signup from './src/screens/Signup';
import Overview from './src/screens/Overview';
import LiveCampaigns from './src/screens/LiveCampaigns';
import Sidebar from './src/components/Sidebar';
import Analysis from './src/screens/Analysis';
import Calender from './src/screens/Calender';
import ConnectSocial from './src/screens/ConnectSocial';
import Messages from './src/screens/Messages';
import AccountDetails from './src/screens/AccountDetails';
import NewCampaigns from './src/screens/NewCampaigns';
import CalenderPop from './src/components/CalenderPop';
import LoadingScreen from './src/screens/LoadingScreen';
import { Provider } from './src/data/CampaignsData';

const AuthStackNavigator = createStackNavigator(
  {
    SignUp: Signup,
    LogIn: Login,
  },
  {
    headerMode: 'none',
  }
);

const HomeDrawerNavigator = createDrawerNavigator(
  {
    overview: Overview,
    liveCampaigns: LiveCampaigns,
    Performance: Analysis,
    calender: Calender,
    messages: Messages,
    accountDetails: AccountDetails,
    connectSocial: ConnectSocial,
  },
  {
    mode: 'card',
    initialRouteName: 'overview',
    drawerWidth: Dimensions.get('window').width - 100,
    contentComponent: Sidebar,
    contentOptions: {
      activeTintColor: '#4A4A4A',
      inactiveTintColor: '#9B9B9B',
      activeBackgroundColor: 'transparent',
      labelStyle: {
        fontSize: 16,
        fontWeight: '400',
      },
      itemsContainerStyle: {
        marginHorizontal: 15,
      },
      iconContainerStyle: {
        opacity: 1,
      },
    },
  }
);

const OtherScreens = createStackNavigator(
  {
    newCampaigns: NewCampaigns,
    calender: CalenderPop,
  },
  {
    mode: 'modal',
    headerMode: 'none',
    cardStyle: {
      backgroundColor: 'transparent',
      opacity: 1,
    },
  }
);

const CustomStack = createSwitchNavigator({
  LoadingScreen: LoadingScreen,
  Auth: AuthStackNavigator,
  Home: HomeDrawerNavigator,
  otherScreens: OtherScreens,
});

class App extends Component {
  render() {
    return (
      <Provider>
        <CustomStack />
      </Provider>
    );
  }
}

export default App;
