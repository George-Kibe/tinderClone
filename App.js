import { View, StyleSheet } from 'react-native'
import React from 'react'
import HomeScreen from './src/screens/HomeScreen'
import "react-native-gesture-handler"

const App = () => {
  return (
    <View style={styles.pageContainer}>
      <HomeScreen />
    </View>    
  )
}

const styles = StyleSheet.create({
  pageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

export default App