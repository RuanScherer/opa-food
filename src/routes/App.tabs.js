import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../pages/Home'
import Reserves from '../pages/Reserves'
import { FontAwesome5 } from '@expo/vector-icons'

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
      name="Reserve"
      options={{
        tabBarIcon: ({ color, size, focused }) => (
          <FontAwesome5 
            name="clipboard-list"
            size={size}
            color={focused ? '#554ab2' : color}
          />
        )
      }}
      component={Reserves}
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
      component={Home}
    />
  </Navigator>
);

export default AppTabs