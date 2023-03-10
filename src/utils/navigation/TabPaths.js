import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../screens/Home/Home';
import Register from '../../screens/Register/Register';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../styles/Colors';
import Logs from '../../screens/Logs/Logs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Paths from './Paths';
import DevConsole from '../../screens/DevConsole/DevConsole';
import {style} from '../styles/GlobalStyles';
import Reports from '../../screens/Reports/Reports';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabPaths = () => {
  const tabHiddenRoutes = ['Paths'];
  const options = {
    headerShown: false,
    gestureEnabled: false,
  };
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Reports') {
            iconName = focused ? 'file-document' : 'file-document-outline';
          } else if (route.name === 'Logs') {
            iconName = focused
              ? 'chart-timeline-variant'
              : 'chart-timeline-variant';
          } else if (route.name === 'Dev') {
            iconName = focused ? 'dev-to' : 'dev-to';
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: COLORS.accent,
        tabBarInactiveTintColor: COLORS.accent_muted,
        tabBarShowLabel: false,
        tabBarStyle: {
          paddingBottom: 0,
          position: 'absolute',
          borderTopWidth: 0,
          height: 80,
          // margin:20,
          // marginBottom:30,
          ...style.card,
          backgroundColor: 'rgba(255, 255, 255,0.8)',
        },
      })}>
      <Tab.Screen name="Home" component={Home} options={options} />
      <Tab.Screen name="Reports" component={Reports} options={options} />
      <Tab.Screen name="Logs" component={Logs} options={options} />
      <Tab.Screen name="Dev" component={DevConsole} options={options} />
    </Tab.Navigator>
  );
};

export default TabPaths;
