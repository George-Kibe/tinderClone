import { View, Text } from 'react-native'
import React from 'react'
import TinderCard from '../components/TinderCard'
import users from "../assets/data/users"

const HomeScreen = () => {
  return (
    <TinderCard user={users[1]} />
  )
}

export default HomeScreen