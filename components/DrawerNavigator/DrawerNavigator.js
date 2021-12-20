import React, {useEffect, useState} from 'react';

import {View, ActivityIndicator} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Provider as PaperProvider} from 'react-native-paper';

import Support from '../../screen/Support/Support';
import RootStackScreen from '../RootStack/RootStackScreen';

import {CustomDarkTheme, CustomDefaultTheme} from '../DarkMode/DarkMode';
import {DrawerContent} from './DrawerContent';
import {AuthContext} from '../Store/Context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MainTabScreen from '../StackNavigator/StackNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [userData, setUserData] = useState([]);
  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
    // userTheme: null,
  };

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(
    loginReducer,
    initialLoginState,
  );

  const authContext = React.useMemo(() => ({
    signIn: async (userToken, userName) => {
      if (userToken != '') {
        console.log('token tra ve:', userToken);
        console.log('email tra ve', userName);
        // setUserData(userData);
        try {
          await AsyncStorage.setItem('userToken', userToken);
        } catch (error) {
          console.log(error);
        }
        dispatch({type: 'LOGIN', id: userName, token: userToken});
      }
    },

    signOut: async () => {
      try {
        await AsyncStorage.removeItem('userToken');
      } catch (error) {
        console.log(error);
      }
      dispatch({type: 'LOGOUT'});
    },

    signUp: (email, password, confirmPassword) => {},

    toggleTheme: async () => {
      setIsDarkTheme(isDarkTheme => !isDarkTheme);
      // await AsyncStorage.setItem('userTheme', userTheme);
    },

    toggleLanguage: async () => {},
  }));

  useEffect(() => {
    setTimeout(async () => {
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
        userName = await AsyncStorage.getItem('userName');
      } catch (error) {
        console.log(error);
      }
      dispatch({type: 'REGISTER', token: userToken});
    }, 1000);
    async function callApi() {
      if (cleanup) {
        let resuserdata = await getUserData();
        setUserData(resuserdata);
      }
    }

    callApi();
    return () => {
      cleanup = false;
    };
  }, []);

  if (loginState.isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <PaperProvider theme={theme}>
      <AuthContext.Provider value={authContext}>
        <NavigationContainer theme={theme}>
          {loginState.userToken != null ? (
            <Drawer.Navigator
              screenOptions={{headerShown: false}}
              drawerContent={props => <DrawerContent {...props} />}>
              <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
              <Drawer.Screen name="SupportScreen" component={Support} />
            </Drawer.Navigator>
          ) : (
            <RootStackScreen />
          )}
        </NavigationContainer>
      </AuthContext.Provider>
    </PaperProvider>
  );
};

export default DrawerNavigator;
