import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../pages/Home'
import Reservations from '../pages/Reservations'
import { FontAwesome5 } from '@expo/vector-icons'
import Scan from '../pages/Scan'
import bottomTabsConfig from '../config/bottomTabs'

const { Navigator, Screen } = createBottomTabNavigator()

const AppTabs = () => (
  <Navigator tabBarOptions={bottomTabsConfig}>
    <Screen 
      name="Home"
      options={{
        tabBarLabel: '',
        tabBarIcon: ({ color, size, focused }) => (
          <FontAwesome5 
            name="home"
            size={size}
            color={focused ? '#554ab2' : color}
          />
        )
      }}
      component={Home}
    />
    <Screen 
      name="Reservations"
      options={{
        tabBarIcon: ({ color, size, focused }) => (
          <FontAwesome5 
            name="clipboard-list"
            size={size}
            color={focused ? '#554ab2' : color}
          />
        )
      }}
      component={Reservations}
    />
    <Screen 
      name="QRCode"
      options={{
        tabBarIcon: ({ color, size, focused }) => (
          <FontAwesome5 
            name="qrcode"
            size={size}
            color={focused ? '#554ab2' : color}
          />
        )
      }}
      component={Scan}
    />
  </Navigator>
);

export default AppTabs