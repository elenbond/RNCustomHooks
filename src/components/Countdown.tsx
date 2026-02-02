import React from "react";
import { View, StyleSheet, Text } from "react-native";

import useCountdown from "../hooks/useCountdown";

const Countdown =({}) => {

  const { secondsLeft, isRunning, startPause, reset } = useCountdown(60);

  return (
  <> 
    <Text style={styles.title}>Countdown Timer</Text>
    <View style={styles.countdownCircle}>
      <Text style={styles.countdownText}>{secondsLeft}</Text>
    </View>
    <View style={styles.buttonsContainer}>
      <View style={styles.button}>
        <Text style={styles.buttonText} onPress={startPause}>{isRunning ? "pause" : "start"}</Text>
      </View>
      <View style={styles.button}>
        <Text style={styles.buttonText} onPress={reset}>Reset</Text>
      </View>
    </View>
  </>);

}

const styles = StyleSheet.create({
  title:{
    fontSize: 24, 
    marginBottom: 20
  },  
  countdownCircle: { 
    width: 200, 
    height: 200, 
    borderRadius: 100, 
    backgroundColor: "lightblue",
    justifyContent: 'center', 
    alignItems: 'center'
  },
  countdownText: { 
    fontSize: 48, 
    fontWeight: 'bold' 
  },
  buttonsContainer: { 
    flexDirection: 'row', 
    marginTop: 20
  },
  button: { 
    marginHorizontal: 20, 
    padding: 10, 
    backgroundColor: "lightgray",
    borderRadius: 5
  },
  buttonText: { 
    fontSize: 18 
  },
}) 

export default Countdown;