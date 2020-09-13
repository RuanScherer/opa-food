import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FontAwesome5 } from '@expo/vector-icons'
import Menu from '../pages/Menu'
import Waiting from '../pages/Waiting'
import Cart from '../pages/Cart'

const { Navigator, Screen } = createBottomTabNavigator()

const RestaurantTabs = () => (
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