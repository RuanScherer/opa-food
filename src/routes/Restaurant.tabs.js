import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FontAwesome5 } from '@expo/vector-icons'
import Menu from '../pages/Menu'
import Waiting from '../pages/Waiting'
import Cart from '../pages/Cart'
import bottomTabsConfig from '../config/bottomTabs'

const { Navigator, Screen } = createBottomTabNavigator()

const RestaurantTabs = () => (
  <Navigator tabBarOptions={bottomTabsConfig}>
    <Screen 
      name="Menu"
      options={{
        tabBarLabel: '',
        tabBarIcon: ({ color, size, focused }) => (
          <FontAwesome5 
            name="th-list"
            size={size}
            color={focused ? '#554ab2' : color}
          />
        )
      }}
      component={Menu}
    />
    <Screen 
      name="Waiting"
      options={{
        tabBarIcon: ({ color, size, focused }) => (
          <FontAwesome5 
            name="hourglass-start"
            size={size}
            color={focused ? '#554ab2' : color}
          />
        )
      }}
      component={Waiting}
    />
    <Screen 
      name="Cart"
      options={{
        tabBarIcon: ({ color, size, focused }) => (
          <FontAwesome5 
            name="shopping-cart"
            size={size}
            color={focused ? '#554ab2' : color}
          />
        )
      }}
      component={Cart}
    />
  </Navigator>
);

export default RestaurantTabs