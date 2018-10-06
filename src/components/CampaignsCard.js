import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const CampaignsCard = props => (
  <View style={styles.card2}>
    <Image source={props.image} style={styles.rectangleCopy61} />
    <View
      style={[styles.rectangleCopy61, { backgroundColor: 'rgba(0,0,0,0.5)' }]}
    />

    <Text style={styles.active}>{props.state}</Text>
    <View style={styles.meatball} />
    <Text style={styles.nylon}>{props.title}</Text>
    <Text style={styles.vandifair}>{props.handle}</Text>
    <Text style={styles.atVeroEosEtAccus}>
      {props.details}
      {'\n'}
      {'\n'}
    </Text>
    <Image source={props.stateImage} style={styles.oval} />
  </View>
);
export default CampaignsCard;

const styles = StyleSheet.create({
  card2: {
    height: 240,
    width: 314,
    marginBottom: 20,
  },
  rectangleCopy61: {
    position: 'absolute',
    height: 240,
    width: 314,
    borderRadius: 8,
    shadowColor: 'rgba(0,0,0,0.08)',
    shadowRadius: 8,
    shadowOpacity: 1,
    shadowOffset: {
      height: 3,
      width: 0,
    },
  },
  rectangleCopy6: {
    position: 'absolute',
    borderRadius: 8,
    shadowColor: 'rgba(0,0,0,0.08)',
    shadowRadius: 8,
    shadowOpacity: 1,
    backgroundColor: 'transparent',
    shadowOffset: {
      height: 3,
      width: 0,
    },
  },
  active: {
    position: 'absolute',
    fontFamily: 'mont-m',
    top: 19.59,
    left: 41.56,
    height: 25,
    backgroundColor: 'transparent',
    lineHeight: 25,
    color: 'rgba(255,255,255,1)',
    fontSize: 15,
    letterSpacing: 0.44,
  },
  meatball: {
    position: 'absolute',
    top: 37.22,
    left: 275.21,
    height: 3.92,
    width: 18.47,
    transform: [
      {
        rotate: '-90deg',
      },
    ],
  },
  fill33: {
    position: 'absolute',
    height: 3.92,
    width: 3.69,
    backgroundColor: 'transparent',
    borderColor: 'transparent',
  },
  fill40: {
    position: 'absolute',
    height: 3.92,
    width: 3.69,
    left: 7.39,
    backgroundColor: 'transparent',
    borderColor: 'transparent',
  },
  fill46: {
    position: 'absolute',
    height: 3.92,
    width: 3.69,
    left: 14.78,
    backgroundColor: 'transparent',
    borderColor: 'transparent',
  },
  nylon: {
    position: 'absolute',
    top: 105.54,
    left: 27.71,
    height: 25,
    width: 258.59,
    backgroundColor: 'transparent',
    lineHeight: 25,
    color: 'rgba(255,255,255,1)',
    fontSize: 24,
    fontFamily: 'mont-m',
    letterSpacing: 0.7,
  },
  vandifair: {
    position: 'absolute',
    top: 125.07,
    left: 27.71,
    width: 258.59,
    backgroundColor: 'transparent',
    lineHeight: 25,
    color: 'rgba(255,255,255,1)',
    fontSize: 15,
    fontFamily: 'mont-m',
    letterSpacing: 0.44,
  },
  atVeroEosEtAccus: {
    position: 'absolute',
    top: 149.03,
    left: 29.55,
    height: 83,
    width: 258.59,
    backgroundColor: 'transparent',
    lineHeight: 16,
    color: 'rgba(255,255,255,1)',
    fontSize: 14,
    fontFamily: 'mont-m',
    letterSpacing: 0.1,
  },
  oval: {
    position: 'absolute',
    height: 15.69,
    width: 14.85,
    top: 23.99,
    left: 22.59,
    backgroundColor: 'transparent',
    borderColor: 'transparent',
  },
});
