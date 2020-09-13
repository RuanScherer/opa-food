import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import BottomTabButton from '../components/BottomTabButton'
import Home from '../pages/Home'
import { FontAwesome5 } from '@expo/vector-icons'

const { Navigator, Screen } = createBottomTabNavigator()

const AppTabs = () => (
  <Navigator
    tabBarOptions={{
      showLabel: false,
      style: {
        elevation: 0,
        shadowOpacity: 0,
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
      labelStyle: {
        fontFamily: 'Arvo_700Bold',
        fontSize: 14,
        marginLeft: 16
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
      component={Home}
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