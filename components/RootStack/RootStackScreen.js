import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from '../../screen/SignIn/SignIn';
import SignUp from '../../screen/SignUp/SignUp';

const RootStack = createNativeStackNavigator();

const RootStackScreen = ({navigation}) => (
  <RootStack.Navigator screenOptions={{headerShown: false}}>
    <RootStack.Screen name="SignInScreen" component={SignIn} />
    <RootStack.Screen name="SignUpScreen" component={SignUp} />
  </RootStack.Navigator>
);

export default RootStackScreen;
