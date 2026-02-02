import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

import usePressAndHold from '../hooks/usePressAndHold';

const PressAndHold = ({}) => {
  const { onPressIn, onPressOut, isHeld } = usePressAndHold(() => {}, 1000);

  return (
    <>
      <Text style={styles.title}>PressAndHold Component</Text>
      <Pressable
        style={[styles.pressAndHoldButton, isHeld && styles.heldButton]}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
      >
        <Text style={styles.pressAndHoldText}>Press and hold</Text>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    marginBottom: 20,
    marginTop: 20,
  },
  pressAndHoldButton: {
    width: 400,
    height: 200,
    borderRadius: 100,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heldButton: {
    backgroundColor: 'lightgreen',
  },
  pressAndHoldText: {
    fontSize: 38,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default PressAndHold;
