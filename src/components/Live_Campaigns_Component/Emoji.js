import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Switch,
  Image,
  TouchableOpacity,
} from 'react-native';

const EmojiData = [
  {
    key: '1',
    name: 'heart',
    isSelected: false,
    image: require('../../../assets/heart.png'),
  },
  {
    key: '2',
    name: 'like',
    isSelected: false,
    image: require('../../../assets/like.png'),
  },
  {
    key: '3',
    name: 'face',
    isSelected: false,
    image: require('../../../assets/straight.png'),
  },
];

class Emoji extends Component {
  state = {
    emoji: EmojiData,
    emojiSelected: '',
    value: false,
  };
  handleSwitch = () => {
    this.setState({
      value: !this.state.value,
    });
  };
  handleSelectEmoji = text => {
    const oldValue = [...EmojiData];
    const newValue = oldValue.map(item => {
      if (item.name === text) {
        item.isSelected = !item.isSelected;
        return item;
      }
      item.isSelected = false;

      return item;
    });
    this.setState({
      emoji: newValue,
      emojiSelected: text,
    });
  };
  render() {
    return (
      <React.Fragment>
        <Text style={styles.publishAPoll}>Emoji Settings</Text>
        <View
          style={{
            marginLeft: 29,
            marginTop: 10,
            flexDirection: 'row',

            alignItems: 'center',
          }}
        >
          <Switch onValueChange={this.handleSwitch} value={this.state.value} />
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              fontFamily: 'mont-m',
              padding: 10,
              color: 'rgba(169,174,190,1)',
            }}
          >
            {this.state.value ? 'ON' : 'OFF'}
          </Text>
        </View>
        <View style={{ flexDirection: 'row', margin: 20 }}>
          {this.state.emoji.map(item => {
            const styleObject = item.isSelected ? styles.isSelected : null;
            return (
              <TouchableOpacity
                style={[{ margin: 5 }, styleObject]}
                onPress={() => this.handleSelectEmoji(item.name)}
                key={item.key}
              >
                <Image
                  resizeMode="contain"
                  source={item.image}
                  style={{ height: 30, width: 30 }}
                />
              </TouchableOpacity>
            );
          })}
        </View>
      </React.Fragment>
    );
  }
}
export default Emoji;

const styles = StyleSheet.create({
  publishAPoll: {
    paddingTop: 31,
    paddingLeft: 27,
    height: '10.80%',
    width: '84.53%',
    backgroundColor: 'transparent',
    color: 'rgba(74,74,74,1)',
    fontSize: 25,
    fontFamily: 'mont-m',
    letterSpacing: 0.89,
  },
  isSelected: {
    borderWidth: 4,
    borderRadius: 20,
    borderColor: 'rgba(80,227,194,1)',
  },
});
