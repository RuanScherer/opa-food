import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../pages/Login'
import Register from '../pages/Register'

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
  </Navigator>
)

export default AppRoutes