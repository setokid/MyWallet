import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Platform,
  Alert,
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import LinenearGradient from 'react-native-linear-gradient';
import {useTheme} from 'react-native-paper';
import Users from '../../Users';

import {AuthContext} from '../../components/Context/Context';

const SignIn = ({navigation}) => {
  const [data, setData] = React.useState({
    username: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });

  const {colors} = useTheme();

  const {signIn} = React.useContext(AuthContext);

  const loginHandle = (userName, password) => {
    const foundUser = Users.filter(item => {
      return userName == item.username && password == item.password;
    });

    if (data.username.length == 0 || data.password.length == 0) {
      Alert.alert('Wrong Input!', 'Username or password không thể để trống.', [
        {text: 'Okay'},
      ]);
      return;
    }

    if (foundUser.length == 0) {
      Alert.alert('Invalid User!', 'Username or password không đúng.', [
        {text: 'Okay'},
      ]);
      return;
    }
    signIn(foundUser);
  };

  const textInputChange = val => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
        isValidUser: false,
      });
    }
  };

  const handlePasswordChange = val => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        password: val,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false,
      });
    }
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const handleValidUser = val => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        isValidUser: false,
      });
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#5a60e6" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome!</Text>
      </View>
      <Animatable.View
        style={[styles.footer, {backgroundColor: colors.background}]}
        animation="fadeInUpBig">
        <Text style={[styles.text_footer, {color: colors.text}]}>Username</Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color={colors.text} size={20} />
          <TextInput
            placeholder="Your Username"
            style={[styles.textInput, {color: colors.text}]}
            autoCapitalize="none"
            onChangeText={val => textInputChange(val)}
            onEndEditing={e => handleValidUser(e.nativeEvent.text)}
          />
          {data.check_textInputChange ? (
            <Animatable.View animation="bounceIn">
              <Feather name="check-circle" color="green" size={20} />
            </Animatable.View>
          ) : null}
        </View>
        {data.isValidUser ? (
          true
        ) : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>
              Username phải từ 4 kí tự trở lên.
            </Text>
          </Animatable.View>
        )}
        <Text style={[styles.text_footer, {color: colors.text}]}>Password</Text>
        <View style={styles.action}>
          <FontAwesome name="lock" color={colors.text} size={20} />
          <TextInput
            placeholder="Your Password"
            secureTextEntry={data.secureTextEntry ? true : false}
            style={[styles.textInput, {color: colors.text}]}
            autoCapitalize="none"
            onChangeText={val => handlePasswordChange(val)}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ? (
              <Feather name="eye-off" color="gray" size={20} />
            ) : (
              <Feather name="eye" color="gray" size={20} />
            )}
          </TouchableOpacity>
        </View>
        {data.isValidPassword ? (
          true
        ) : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>
              Password phải từ 8 kí tự trở lên.
            </Text>
          </Animatable.View>
        )}

        <TouchableOpacity>
          <Text style={{color: '#5a60e6'}}>Forgot password?</Text>
        </TouchableOpacity>
        <View style={styles.button}>
          <TouchableOpacity
            style={styles.signIn}
            onPress={() => {
              loginHandle(data.username, data.password);
            }}>
            <LinenearGradient
              colors={['#5a60e6', '#141ba3']}
              style={styles.signIn}>
              <Text style={[styles.textSign, {color: '#fff'}]}>Sign In</Text>
            </LinenearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SignUpScreen');
            }}
            style={[
              styles.signIn,
              {borderColor: '#5a60e6', borderWidth: 1, marginTop: 15},
            ]}>
            <Text style={[styles.textSign, {color: '#5a60e6'}]}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4845fc',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,

    fontFamily: 'serif',
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 0,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  button: {
    alignItems: 'center',
    marginTop: 15,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  errorMsg: {
    color: 'red',
  },
});
