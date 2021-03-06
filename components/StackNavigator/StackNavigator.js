import React from 'react';
import {ImageBackground} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer, useTheme} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MenuIcon from 'react-native-vector-icons/Entypo';
import Home from '../../screen/Home/Home';
import Pages from '../../screen/Pages/Pages';
import Profile from '../../screen/Profile/Profile';

import Send from '../../screen/Pages/Send';
import Spending from '../../screen/Pages/Spending';
import Income from '../../screen/Pages/Income';
import Transactions from '../../screen/Pages/Transactions';
import SavingGoals from '../../screen/Pages/SavingGoals';
import About from '../../screen/Pages/About';
import Contact from '../../screen/Pages/Contact';
import FAQ from '../../screen/Pages/FAQ';
import Target from '../../screen/Pages/Target';

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const PagesStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();

function HomeStackScreen({navigation}) {
  const {t} = useTranslation();
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: useTheme().colors.header,
        },
        headerTintColor: useTheme().colors.value,
        headerTitleStyle: {
          fontWeight: 'bold',
          color: useTheme().colors.value,
        },
        headerTitleAlign: 'center',
      }}>
      <HomeStack.Screen
        name="HomePage"
        component={Home}
        options={{
          title: t('Home'),
          headerLeft: () => (
            <MenuIcon.Button
              name="menu"
              size={25}
              backgroundColor={useTheme().colors.header}
              color={'gray'}
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
      {/* <HomeStack.Screen
        name="SendScreen"
        component={Send}
        options={{
          title: t('Send'),
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
      /> */}
      <HomeStack.Screen
        name="TargetScreen"
        component={Target}
        options={{
          title: t('Target'),
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
      <HomeStack.Screen
        name="IncomeScreen"
        component={Income}
        options={{
          title: t('Income'),
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
      <HomeStack.Screen
        name="SpendingScreen"
        component={Spending}
        options={{
          title: t('Spending'),
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
      <HomeStack.Screen
        name="TransactionScreen"
        component={Transactions}
        options={{
          title: t('Transaction'),
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
      <HomeStack.Screen
        name="SavingGoalsScreen"
        component={SavingGoals}
        options={{
          title: t('Saving Goals'),
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
}

function PagesStackScreen({navigation}) {
  const {t} = useTranslation();
  return (
    <PagesStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: useTheme().colors.header,
        },
        headerTintColor: useTheme().colors.value,
        headerTitleStyle: {
          fontWeight: 'bold',
          color: useTheme().colors.value,
        },
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: useTheme().colors.value,
        },
      }}>
      <PagesStack.Screen
        name="PagesPage"
        component={Pages}
        options={{
          title: t('Pages'),
          headerLeft: () => (
            <MenuIcon.Button
              name="menu"
              size={25}
              backgroundColor={useTheme().colors.header}
              color={'gray'}
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
      <PagesStack.Screen
        name="AboutScreen"
        component={About}
        options={{
          title: t('About'),
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
      <PagesStack.Screen
        name="ContactScreen"
        component={Contact}
        options={{
          title: t('Contact'),
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
      <PagesStack.Screen
        name="FAQScreen"
        component={FAQ}
        options={{
          title: t('FAQ'),
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
    </PagesStack.Navigator>
  );
}

function ProfileStackScreen({navigation}) {
  const {t} = useTranslation();
  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: useTheme().colors.header,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: useTheme().colors.value,
        },
      }}>
      <ProfileStack.Screen
        name="ProfilePage"
        component={Profile}
        options={{
          title: t('Profile'),
          headerLeft: () => (
            <MenuIcon.Button
              name="menu"
              size={25}
              backgroundColor={useTheme().colors.header}
              color={'gray'}
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
    </ProfileStack.Navigator>
  );
}

function MainTabScreen() {
  const {t} = useTranslation();
  return (
    <Tab.Navigator
      initialRouteName="Login"
      screenOptions={({route}) => ({
        tabBarInactiveTintColor: useTheme().colors.value,
        tabBarActiveTintColor: '#6236FF',
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Pages') {
            iconName = focused ? 'view-list' : 'view-list-outline';
          } else if (route.name === 'Profile') {
            iconName = focused
              ? 'account-settings'
              : 'account-settings-outline';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        // tabBarActiveTintColor: 'white',
        // tabBarInactiveTintColor: 'black',
        tabBarStyle: {backgroundColor: useTheme().colors.background},
      })}>
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          headerShown: false,
          tabBarLabel: t('Home'),
        }}
      />
      <Tab.Screen
        name="Pages"
        component={PagesStackScreen}
        options={{
          headerShown: false,
          tabBarLabel: t('Pages'),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={{
          headerShown: false,
          tabBarLabel: t('Profile'),
        }}
      />
    </Tab.Navigator>
  );
}

export default MainTabScreen;
