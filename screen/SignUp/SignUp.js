import React, {useState} from 'react';
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

const SignUp = ({navigation}) => {
  const [data, setData] = React.useState({
    check_textInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
    isValidConfirmPassword: true,
  });

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [codeStatus, setCodeStatus] = useState();

  const {colors} = useTheme();

  const signUpHandle = async () => {
    const ApiUrl = 'http://34.134.62.167:8585/user/register';
    if (email != '' && password != '' && confirmPassword != '') {
      if (password === confirmPassword) {
        await fetch(ApiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        })
          .then(res => {
            return setCodeStatus(res.status);
          })
          .then(resData => {})
          .catch(error => {
            console.log(error);
            setCodeStatus(error);
          });
      } else {
        Alert.alert(
          'Wrong Input!',
          'Mật khẩu và nhập lại mật khẩu không giống nhau',
          [{text: 'Okay'}],
        );
      }
    }
    if (email.length == 0 || password.length == 0) {
      Alert.alert('Wrong Input!', 'Username or password không thể để trống.', [
        {text: 'Okay'},
      ]);
      return;
    }
  };

  if (codeStatus == 400) {
    Alert.alert('Invalid User!', 'Đăng ký không thành công', [{text: 'Okay'}]);
    setCodeStatus();
    return;
  }

  if (codeStatus == 200) {
    Alert.alert('Invalid User!', 'Đăng ký thành công', [{text: 'Okay'}]);
    navigation.navigate('SignInScreen');
  }

  const textInputChange = val => {
    if (val.trim().length >= 4) {
      setData({
        check_textInputChange: true,
        isValidUser: true,
      });
      setEmail(val);
    } else {
      setData({
        check_textInputChange: false,
        isValidUser: false,
      });
    }
  };

  const handlePasswordChange = val => {
    if (val.trim().length >= 8) {
      setData({
        isValidPassword: true,
      });
      setPassword(val);
    } else {
      setData({
        isValidPassword: false,
      });
    }
  };
  const handleConfirmPasswordChange = val => {
    if (val.trim().length >= 8) {
      setData({
        isValidConfirmPassword: true,
      });
      setConfirmPassword(val);
    } else {
      setData({
        isValidConfirmPassword: false,
      });
    }
  };
  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const updateConfirmSecureTextEntry = () => {
    setData({
      ...data,
      confirm_secureTextEntry: !data.confirm_secureTextEntry,
    });
  };

  return (
    <View style={[styles.container]}>
      <StatusBar backgroundColor="#4845fc" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Register Now!</Text>
      </View>
      <Animatable.View
        style={[styles.footer, {backgroundColor: colors.background}]}
        animation="fadeInUpBig">
        <Text style={[styles.text_footer, {color: colors.text}]}>Email</Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color={colors.value} size={20} />
          <TextInput
            placeholder="Your Email"
            placeholderTextColor={colors.value}
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={val => textInputChange(val)}
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
          <FontAwesome name="lock" color={colors.value} size={20} />
          <TextInput
            placeholder="Your Password"
            placeholderTextColor={colors.value}
            secureTextEntry={data.secureTextEntry ? false : true}
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={val => handlePasswordChange(val)}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ? (
              <Feather name="eye" color={colors.value} size={20} />
            ) : (
              <Feather name="eye-off" color={colors.value} size={20} />
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
        <Text style={[styles.text_footer, {color: colors.text}]}>
          Confirm Password
        </Text>
        <View style={styles.action}>
          <FontAwesome name="lock" color={colors.value} size={20} />
          <TextInput
            placeholder="Confirm Your Password"
            placeholderTextColor={colors.value}
            secureTextEntry={data.confirm_secureTextEntry ? false : true}
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={val => handleConfirmPasswordChange(val)}
          />
          <TouchableOpacity onPress={updateConfirmSecureTextEntry}>
            {data.confirm_secureTextEntry ? (
              <Feather name="eye" color={colors.value} size={20} />
            ) : (
              <Feather name="eye-off" color={colors.value} size={20} />
            )}
          </TouchableOpacity>
        </View>
        {data.isValidConfirmPassword ? (
          true
        ) : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>
              Password phải từ 8 kí tự trở lên.
            </Text>
          </Animatable.View>
        )}

        <View style={styles.button}>
          <TouchableOpacity
            style={styles.signIn}
            onPress={() => signUpHandle()}>
            <LinenearGradient
              colors={['#5a60e6', '#141ba3']}
              style={styles.signIn}>
              <Text style={[styles.textSign, {color: '#fff'}]}>Sign Up</Text>
            </LinenearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={[
              styles.signIn,
              {borderColor: '#5a60e6', borderWidth: 1, marginTop: 15},
            ]}>
            <Text style={[styles.textSign, {color: '#5a60e6'}]}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

export default SignUp;

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
    paddingBottom: 5,
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
