import React from 'react';
import {ImageBackground} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MenuIcon from 'react-native-vector-icons/Entypo';

import Home from '../../screen/Home/Home';
import Pages from '../../screen/Pages/Pages';
import Profile from '../../screen/Profile/Profile';

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const PagesStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();

const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#6236FF',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerTitleAlign: 'center',
    }}>
    <HomeStack.Screen
      name="MainHome"
      component={Home}
      options={{
        headerLeft: () => (
          <MenuIcon.Button
            name="menu"
            size={25}
            backgroundColor="#6236FF"
            onPress={() => navigation.openDrawer()}
          />
        ),
        headerRight: () => (
          <ImageBackground
            source={require('../../assets/avt.jpg')}
            imageStyle={{
              borderRadius: 25,
            }}
            style={{width: 35, height: 35}}
          />
        ),
      }}
    />
  </HomeStack.Navigator>
);

const PagesStackScreen = ({navigation}) => (
  <PagesStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: 'gray',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerTitleAlign: 'center',
    }}>
    <PagesStack.Screen name="MainPages" component={Pages} />
  </PagesStack.Navigator>
);

const ProfileStackScreen = ({navigation}) => (
  <ProfileStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: 'gray',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerTitleAlign: 'center',
    }}>
    <ProfileStack.Screen name="MainProfile" component={Profile} />
  </ProfileStack.Navigator>
);

const MainTabScreen = () => (
  <Tab.Navigator
    initialRouteName="Login"
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === 'Pages') {
          iconName = focused ? 'view-list' : 'view-list-outline';
        } else if (route.name === 'Profile') {
          iconName = focused ? 'account-settings' : 'account-settings-outline';
        }

        return <Icon name={iconName} size={size} color={color} />;
      },
      // tabBarActiveTintColor: 'white',
      // tabBarInactiveTintColor: 'black',
      // tabBarStyle: {backgroundColor: '#4845FC'},
    })}>
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        headerShown: false,
      }}
    />
    <Tab.Screen
      name="Pages"
      component={PagesStackScreen}
      options={{
        headerShown: false,
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileStackScreen}
      options={{
        headerShown: false,
      }}
    />
  </Tab.Navigator>
);

export default MainTabScreen;
