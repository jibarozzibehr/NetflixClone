/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import HomeScreen from '../screens/HomeScreen';
import MovieDetailsScreen from '../screens/MovieDetailsScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList, BottomTabParamList, RootTabScreenProps, HomeParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

import { AntDesign, MaterialIcons, Ionicons } from '@expo/vector-icons';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Root" component={BottomTabNavigator} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}






const HomeStack = createNativeStackNavigator<HomeParamList>();

function TabOneNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />

      <HomeStack.Screen
        name="MovieDetailsScreen"
        component={MovieDetailsScreen}
        options={{ title: "" }}
      />
    </HomeStack.Navigator>
  );
}


/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<BottomTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}
    >
      
      <BottomTab.Screen
        name="Home"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({color}) => <AntDesign name="home" size={24} color={color} />,
          headerShown: false
        }}
      />
      
      <BottomTab.Screen
        name="Coming_Soon"
        component={TabTwoScreen}
        options={{
          tabBarIcon: ({color}) => <MaterialIcons name="video-library" size={24} color={color} />
        }}
      />

      <BottomTab.Screen
        name="Search"
        component={TabTwoScreen}
        options={{
          tabBarIcon: ({color}) => <Ionicons name="search" size={24} color={color} />
        }}
      />

      <BottomTab.Screen
        name="Downloads"
        component={TabTwoScreen}
        options={{
          tabBarIcon: ({color}) => <AntDesign name="download" size={24} color={color} />
        }}
      />

    </BottomTab.Navigator>
  );
}


