import { View, Text, StyleSheet, Pressable , useWindowDimensions} from 'react-native'
import React from 'react'
import TinderCard from '../components/TinderCard'
import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  useDerivedValue,
  interpolate,
  useAnimatedGestureHandler } from 'react-native-reanimated'
import { PanGestureHandler } from 'react-native-gesture-handler'

import users from "../assets/data/users"

const HomeScreen = () => {
  const {width:screenWidth} = useWindowDimensions();

  const translateX = useSharedValue(0);            //-width    0     +width
  const rotate = useDerivedValue(() => interpolate(
    translateX.value, [0, screenWidth], [0, 60]) +'deg')     //60 deg   0 deg  60deg
 
  const cardStyle = useAnimatedStyle(() => ({
    transform:[
      {
        translateX:translateX.value,
      },
      {
        rotate: rotate.value,
      }
    ],
  }));

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, context) => {
      context.startX=translateX.value
      console.log("Touch Start");
    },
    onActive: (event, context) => {
      translateX.value=context.startX + event.translationX
      //console.log("Touch X: ", event.translationX);
    },
    onEnd: () => {
      console.log("Touch Ended!")
    }
  });

  return (
    <PanGestureHandler onGestureEvent={gestureHandler}>
      <Animated.View style={[styles.animatedCard, cardStyle]}>
        <TinderCard user={users[1]} />
      </Animated.View>
    </PanGestureHandler>
  )
}

const styles = StyleSheet.create({
  animatedCard:{
    width:"100%",
    justifyContent:"center",
    alignItems:"center",
  }
})

export default HomeScreen