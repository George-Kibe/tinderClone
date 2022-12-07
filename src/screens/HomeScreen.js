import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import TinderCard from '../components/TinderCard'
import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  withSpring,
  useAnimatedGestureHandler } from 'react-native-reanimated'
import { PanGestureHandler } from 'react-native-gesture-handler'

import users from "../assets/data/users"

const HomeScreen = () => {
  const sharedValue = useSharedValue(1);
  const gestureHandler = useAnimatedGestureHandler({
    onStart: () => {
      console.log("Touch Start");
    },
    onActive: (event) => {
      console.log("Touch X: ", event.translationX);
    },
    onEnd: () => {
      console.log("Touch Ended!")
    }
  });
  const cardStyle = useAnimatedStyle(() => ({
    transform:[{
      translateX:sharedValue.value*500 - 250
    }],
    opacity:sharedValue.value
  }));

  return (
    <>
      <Animated.View style={[StyleSheet.animatedCard, cardStyle]}>
        <TinderCard user={users[1]} />
      </Animated.View>
      <Pressable onPress={() => (sharedValue.value = withSpring(Math.random()))}>
        <Text>Change Value</Text>
      </Pressable>
    </>
  
    
  )
}

const styles = StyleSheet.create({
  animatedCard:{
    height:"100%",
    width:"100%",
    justifyContent:"center",
    alignItems:"center",
    flex:1
  }
})

export default HomeScreen