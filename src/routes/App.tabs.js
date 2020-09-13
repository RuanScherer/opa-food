import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../pages/Home'
import Reservations from '../pages/Reservations'
import { FontAwesome5 } from '@expo/vector-icons'
import Scan from '../pages/Scan'

const { Navigator, Screen } = createBottomTabNavigator()

const AppTabs = () => (
  <Navigator
    tabBarOptions={{
      showLabel: false,
      style: {
        height: 54
      },
      tabStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
      },
      iconStyle: {
        flex: 0,
        width: 20,
        height: 20
      },
      inactiveBackgroundColor: '#FAFAFC',
      activeBackgroundColor: '#EBEBF5',
      inactiveTintColor: '#C1BCCC',
      activeTintColor: '#554ab2'
    }
  }>
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