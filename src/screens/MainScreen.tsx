import React from 'react';
import { View, StyleSheet } from 'react-native';

import Countdown from '../components/Countdown';
import Debounce from '../components/Debounce';
import PressAndHold from '../components/PressAndHold';

const MainScreen = ({}) => {
  return (
    <View style={styles.container}>
      <Countdown />
      <Debounce />
      <PressAndHold />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MainScreen;
