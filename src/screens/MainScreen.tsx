import React from "react";
import { View, StyleSheet } from "react-native";

import Countdown from "../components/Countdown";

const MainScreen =({}) => {

  return (
  <View style={styles.container}> 
    <Countdown />
  </View>);

}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  }
}) 

export default MainScreen;