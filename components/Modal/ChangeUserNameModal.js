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
import {updateUserName} from '../Store/FetchAPI';

const screenWidth = Dimensions.get('screen').width;
const windowWidth = Dimensions.get('window').width;

export default function ChangeUserNameModal({data, showModal, closeModal}) {
  const {t} = useTranslation();
  const {colors, colors2} = useTheme();
  const [userName, setUserName] = useState('');
  const confirm = username => {
    if (username != '') {
      if (username != data.fullName) {
        updateUserName(username);
        Alert.alert('Successful', 'Successful update user name', [
          {text: 'Okay'},
        ]);
        setUserName('');
        closeModal();
      } else {
        Alert.alert('Error', 'New name is same as User name', [{text: 'Okay'}]);
      }
    } else {
      Alert.alert('Error', 'User name cant be null', [{text: 'Okay'}]);
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
              {t('Change User Name')}
            </Text>
          </View>
          <View
            style={[
              styles.modalViewSelect,
              {backgroundColor: colors.background},
            ]}>
            <View style={styles.nameView}>
              <View style={{flexDirection: 'row'}}>
                <Text style={{color: colors.value}}>{t('User name: ')}</Text>
                <Text
                  style={{
                    color: colors.value,
                    fontWeight: 'bold',
                    marginLeft: 3,
                  }}>
                  {t(data.fullName)}
                </Text>
              </View>
              <TextInput
                style={[styles.inputName]}
                onChangeText={val => setUserName(val)}
                value={userName}
                placeholder={t('New user name')}
                placeholderTextColor={colors.value}
                keyboardType="default"
              />
            </View>
            <View style={[styles.btn, {width: '100%'}]}>
              <Button
                onPress={() => confirm(userName)}
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
});
