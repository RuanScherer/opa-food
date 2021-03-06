import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../pages/Login'
import Register from '../pages/Register'
import AppTabs from './App.tabs'
import Details from '../pages/Details'
import Reserve from '../pages/Reserve'
import RestaurantTabs from './Restaurant.tabs'
import MenuItem from '../pages/MenuItem'
import PaymentSuccess from '../pages/PaymentSuccess'

const { Navigator, Screen } = createStackNavigator()

const AppRoutes = () => (
  <Navigator screenOptions={{ headerShown: false }}>
    <Screen 
      name="Register"
      component={Register}
    />
    <Screen 
      name="Details"
      component={Details}
    />
    <Screen 
      name="Login"
      component={Login}
    />
    <Screen 
      name="Home"
      component={AppTabs}
    />
    <Screen 
      name="Restaurant"
      component={RestaurantTabs}
    />
    <Screen 
      name="MenuItem"
      component={MenuItem}
    />
    <Screen 
      name="Reserve"
      component={Reserve}
    />
    <Screen 
      name="PaymentSuccess"
      component={PaymentSuccess}
    />
  </Navigator>
)

export default AppRoutes