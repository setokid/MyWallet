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
  ScrollView,
  Dimensions,
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import LinenearGradient from 'react-native-linear-gradient';
import {useTheme} from 'react-native-paper';

import {signIn} from '../../components/Store/FetchAPI';

const SignUp = ({navigation}) => {
  const [data, setData] = React.useState({
    check_textInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
    isValidUser: false,
    isValidPassword: false,
    isValidConfirmPassword: false,
  });

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [codeStatus, setCodeStatus] = useState();

  const {colors} = useTheme();

  const signUpHandle = async () => {
    if (email != '' && password != '' && confirmPassword != '') {
      if (password === confirmPassword) {
        let result = await signIn(email, password);
        setCodeStatus(result.status);
        setCodeStatus(result.result);
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

  if (codeStatus == 'fail') {
    Alert.alert('User already exists!', 'Đăng ký không thành công', [
      {text: 'Okay'},
    ]);
    setCodeStatus();
    return;
  }

  if (codeStatus == 'Thành công') {
    Alert.alert('Successful!', 'Đăng ký thành công', [{text: 'Okay'}]);
    navigation.navigate('SignInScreen');
  }

  const textInputChange = val => {
    if (val.trim().length >= 4) {
      setData({
        check_textInputChange: true,
        isValidUser: false,
      });
      setEmail(val);
    } else {
      setData({
        check_textInputChange: false,
        isValidUser: true,
      });
    }
  };

  const handlePasswordChange = val => {
    if (val.trim().length >= 8) {
      setData({
        isValidPassword: false,
      });
      setPassword(val);
    } else {
      setData({
        isValidPassword: true,
      });
    }
  };
  const handleConfirmPasswordChange = val => {
    if (val.trim().length >= 8) {
      setData({
        isValidConfirmPassword: false,
      });
      setConfirmPassword(val);
    } else {
      setData({
        isValidConfirmPassword: true,
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
      <ScrollView>
        <Animatable.View
          style={[styles.footer, {backgroundColor: colors.background}]}
          animation="fadeInUpBig">
          <Text style={[styles.text_footer, {color: colors.text}]}>Email</Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" color={colors.value} size={28} />
            <TextInput
              placeholder="Your Email"
              placeholderTextColor={colors.value}
              style={[styles.textInput, {color: colors.text, fontSize: 20}]}
              autoCapitalize="none"
              onChangeText={val => textInputChange(val)}
            />
            {data.check_textInputChange ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="green" size={28} />
              </Animatable.View>
            ) : null}
          </View>
          {data.isValidUser ? (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>
                Username phải từ 4 kí tự trở lên.
              </Text>
            </Animatable.View>
          ) : null}
          <Text style={[styles.text_footer, {color: colors.text}]}>
            Password
          </Text>
          <View style={styles.action}>
            <FontAwesome name="lock" color={colors.value} size={28} />
            <TextInput
              placeholder="Your Password"
              placeholderTextColor={colors.value}
              secureTextEntry={data.secureTextEntry ? false : true}
              style={[styles.textInput, {color: colors.text, fontSize: 20}]}
              autoCapitalize="none"
              onChangeText={val => handlePasswordChange(val)}
            />
            <TouchableOpacity onPress={updateSecureTextEntry}>
              {data.secureTextEntry ? (
                <Feather name="eye" color={colors.value} size={28} />
              ) : (
                <Feather name="eye-off" color={colors.value} size={28} />
              )}
            </TouchableOpacity>
          </View>
          {data.isValidPassword ? (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>
                Password phải từ 8 kí tự trở lên.
              </Text>
            </Animatable.View>
          ) : null}
          <Text style={[styles.text_footer, {color: colors.text}]}>
            Confirm Password
          </Text>
          <View style={styles.action}>
            <FontAwesome name="lock" color={colors.value} size={28} />
            <TextInput
              placeholder="Confirm Your Password"
              placeholderTextColor={colors.value}
              secureTextEntry={data.confirm_secureTextEntry ? false : true}
              style={[styles.textInput, {color: colors.text, fontSize: 20}]}
              autoCapitalize="none"
              onChangeText={val => handleConfirmPasswordChange(val)}
            />
            <TouchableOpacity onPress={updateConfirmSecureTextEntry}>
              {data.confirm_secureTextEntry ? (
                <Feather name="eye" color={colors.value} size={28} />
              ) : (
                <Feather name="eye-off" color={colors.value} size={28} />
              )}
            </TouchableOpacity>
          </View>
          {data.isValidConfirmPassword ? (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>
                Password phải từ 8 kí tự trở lên.
              </Text>
            </Animatable.View>
          ) : null}

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
      </ScrollView>
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
    fontSize: 25,
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
    fontSize: 20,
  },
});
