import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  Button,
  Dimensions,
  TextInput,
  Alert,
} from 'react-native';
import {useTranslation} from 'react-i18next';
import {useTheme} from '@react-navigation/native';
import {updatePassWord} from '../Store/FetchAPI';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';
const screenWidth = Dimensions.get('screen').width;
const windowWidth = Dimensions.get('window').width;

export default function ChangePassWordModal({data, showModal, closeModal}) {
  const {t} = useTranslation();

  const [state, setState] = useState({
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: false,
    isValidPassword: false,
  });

  const {colors, colors2} = useTheme();
  const [password, setPassword] = useState('');
  const [newpassword, setNewpassword] = useState('');
  const [resUpdate, setResUpdate] = useState();
  console.log('b', resUpdate);
  console.log(newpassword);
  const confirm = async (password, newpassword) => {
    console.log('a', newpassword);
    if ((password != '') & (newpassword != '')) {
      updatePassWord(password, newpassword);
      let resUpdatePassWord = await updatePassWord();
      setResUpdate(resUpdatePassWord.error);
      if (resUpdate == 'Thành công') {
        Alert.alert('Successful', 'Successful update password', [
          {text: 'Okay'},
        ]);
        closeModal();
      } else if (resUpdate == 'Sai mk') {
        Alert.alert('Error', 'Wrong password', [{text: 'Okay'}]);
      } else {
        console.log('sai');
      }
    } else {
      Alert.alert('Error', 'Password or New Password can be null', [
        {text: 'Okay'},
      ]);
    }
  };

  const handlePasswordChange = val => {
    if (val.trim().length >= 8) {
      setState({
        isValidPassword: false,
      });
      setNewpassword(val);
    } else {
      setState({
        isValidPassword: true,
      });
    }
  };

  return (
    <Modal
      animationType="slide"
      statusBarTranslucent={true}
      transparent={true}
      visible={showModal}
      onRequestClose={() => (Modal.visible = false)}>
      <View style={[styles.centeredView]}>
        <View style={[styles.modalView, {backgroundColor: colors2.background}]}>
          <View style={styles.modelTitleView}>
            <Text style={[styles.modalTitle, {color: colors.value}]}>
              {t('Change Password')}
            </Text>
          </View>
          <View
            style={[
              styles.modalViewSelect,
              {backgroundColor: colors.background},
            ]}>
            <View style={styles.nameView}>
              <View style={{flexDirection: 'row'}}>
                <Text style={{color: colors.value}}>{t('Password ')}</Text>
              </View>
              <TextInput
                style={[styles.inputName]}
                onChangeText={val => setPassword(val)}
                placeholder={t('Password')}
                placeholderTextColor={colors.value}
                keyboardType="default"
                secureTextEntry={true}
              />
              <View style={{flexDirection: 'row'}}>
                <Text style={{color: colors.value, marginTop: 20}}>
                  {t('New Password ')}
                </Text>
              </View>
              <View style={styles.action}>
                <TextInput
                  style={[styles.inputName]}
                  onChangeText={val => handlePasswordChange(val)}
                  placeholder={t('New PassWord')}
                  placeholderTextColor={colors.value}
                  keyboardType="default"
                  secureTextEntry={data.secureTextEntry ? false : true}
                />
              </View>
              {state.isValidPassword ? (
                <Animatable.View animation="fadeInLeft" duration={500}>
                  <Text style={styles.errorMsg}>
                    Password phải từ 8 kí tự trở lên.
                  </Text>
                </Animatable.View>
              ) : null}
            </View>

            <View style={[styles.btn, {width: '100%'}]}>
              <Button
                onPress={() => confirm(password, newpassword)}
                title="Confirm"
                color="#6236FF"
                style={styles.btn}
              />
            </View>
          </View>
          <View style={styles.btn}>
            <Button
              onPress={() => closeModal()}
              title="Close"
              color="#6236FF"
              style={styles.btn}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalView: {
    backgroundColor: '#ededf5',
    borderRadius: 10,
    paddingBottom: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: screenWidth - 33,
    height: 'auto',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 16,
  },
  modelTitleView: {
    backgroundColor: '#6236FF',
    height: 100,
    justifyContent: 'flex-start',
    paddingTop: 15,
    alignItems: 'center',
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  modalTitle: {
    paddingLeft: 15,
    paddingRight: 15,
    fontSize: 20,
    fontWeight: '500',
  },
  modalViewSelect: {
    backgroundColor: '#fff',
    width: windowWidth - 75,
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: 10,
    marginTop: -40,
    padding: 15,
    height: 'auto',
  },

  title: {
    paddingLeft: 5,
    fontWeight: '400',
    fontSize: 20,
    width: '100%',
  },
  btn: {
    width: '50%',
    paddingTop: 10,
    borderRadius: 20,
  },

  inputName: {
    padding: 0,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    width: '100%',
  },
  currency: {
    color: '#000',
  },

  btnConfirm: {
    width: '100%',
  },
  nameView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 15,
    flexDirection: 'column',
  },
  accountCurrencyView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 15,
  },
  initalView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 15,
  },
  btnSave: {
    alignContent: 'center',
    width: '100%',
    paddingTop: 10,
    borderRadius: 20,
  },
  inputBorder: {
    width: '30%',
    borderRadius: 8,
    borderColor: '#cacaca',
    borderWidth: 1,
  },
  errorMsg: {
    color: 'red',
    fontSize: 16,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 0,
  },
});
