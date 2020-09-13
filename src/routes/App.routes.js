import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Home from '../pages/Home'

const { Navigator, Screen } = createStackNavigator()

const AppRoutes = () => (
  <Navigator screenOptions={{ headerShown: false }}>
    <Screen 
      name="Register"
      component={Register}
    />
    <Screen 
      name="Login"
      component={Login}
    />
    <Screen 
      name="Home"
      component={Home}
    />
  </Navigator>
)

export default AppRoutes