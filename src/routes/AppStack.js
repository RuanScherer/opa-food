import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Routes from './App.routes'

const AppStack = () => {
  return (
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
  )
}

export default AppStack