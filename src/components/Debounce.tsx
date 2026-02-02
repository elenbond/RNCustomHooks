import { useState } from "react";
import { View, StyleSheet, Text } from "react-native";

import useDebounce from "../hooks/useDebounce";

const Debounce = ({}) => {
  const [value, setValue] = useState(0);

  const debouncedIncrement = useDebounce(() => {
    setValue((prev) => prev + 1);
  }, 2000)

  return (
    <>  
      <Text style={styles.title}>Debounce Component</Text>
      <View style={styles.debounceCircle}> 
        <Text style={styles.debounceText}>{value}</Text>
      </View>
      <View style={styles.button}> 
        <Text style={styles.buttonText} onPress={debouncedIncrement}>Increment</Text>
      </View>
    </>
  );

}

const styles = StyleSheet.create({
  title:{
    fontSize: 24, 
    marginBottom: 20
  },
  debounceCircle: { 
    width: 200, 
    height: 200, 
    borderRadius: 100, 
    backgroundColor: "lightblue",
    justifyContent: 'center', 
    alignItems: 'center'
  },
  debounceText: {
    fontSize: 48, 
    fontWeight: 'bold' 
  },
  button:{
    marginHorizontal: 20, 
    padding: 10, 
    backgroundColor: "lightgray",
    borderRadius: 5,
    cursor: 'pointer',
  },
  buttonText:{
    fontSize: 18 
  },
}) 

export default Debounce;