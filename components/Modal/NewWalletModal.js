import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  Button,
  Dimensions,
  TextInput,
} from 'react-native';
import {useTranslation} from 'react-i18next';
import Icon from 'react-native-vector-icons/Ionicons';
import {useTheme} from '@react-navigation/native';
import {List} from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';

const screenWidth = Dimensions.get('screen').width;
const windowWidth = Dimensions.get('window').width;

export default function NewWalletModal(props) {
  const {t} = useTranslation();
  const {colors, colors2} = useTheme();
  const [expanded, setExpanded] = useState(true);
  const [text, onChangeText] = useState(null);
  const [selectedValue, setSelectedValue] = useState('VND');

  const handlePress = () => setExpanded(!expanded);

  return (
    <Modal
      animationType="slide"
      statusBarTranslucent={true}
      transparent={true}
      visible={props.showModal}
      onRequestClose={() => (Modal.visible = false)}>
      <View style={[styles.centeredView]}>
        <View style={[styles.modalView, {backgroundColor: colors2.background}]}>
          <View style={styles.modelTitleView}>
            <Text style={[styles.modalTitle, {color: colors.value}]}>
              {t('Create new Wallet')}
            </Text>
          </View>
          <View
            style={[
              styles.modalViewSelect,
              {backgroundColor: colors.background},
            ]}>
            <View style={styles.nameView}>
              <Text>{t('Name: ')}</Text>
              <TextInput
                style={[styles.inputName]}
                onChangeText={onChangeText}
                value={text}
                placeholder={t('Value')}
                placeholderTextColor={colors.value}
                keyboardType="default"
              />
            </View>
            <View style={styles.accountCurrencyView}>
              <Text>{t('Account Currency: ')}</Text>
              <View style={[styles.pickerView]}>
                <Picker
                  selectedValue={selectedValue}
                  style={[
                    styles.picker,
                    {color: colors.value, width: screenWidth - 220},
                  ]}
                  dropdownIconColor={colors.value}
                  onValueChange={(itemValue, itemIndex) =>
                    setSelectedValue(itemValue)
                  }
                  mode="dropdown">
                  <Picker.Item
                    style={{
                      backgroundColor: colors.background,
                      color: colors.value,
                      fontFamily: 'Ebrima',
                      fontSize: 17,
                    }}
                    label="VNĐ"
                    value="VND"
                  />
                  <Picker.Item
                    style={{
                      backgroundColor: colors.background,
                      color: colors.value,
                      fontFamily: 'Ebrima',
                      fontSize: 17,
                    }}
                    label="USD"
                    value="USD"
                  />
                </Picker>
              </View>
            </View>
            <View style={styles.initalView}>
              <Text>{t('Initial amount: ')}</Text>
              <TextInput
                style={[styles.inputInitial]}
                onChangeText={onChangeText}
                value={text}
                placeholder={t('0')}
                placeholderTextColor={colors.value}
                keyboardType="numeric"
              />
            </View>
            <View style={styles.noteView}>
              <TextInput
                style={[styles.inputNote]}
                onChangeText={onChangeText}
                value={text}
                placeholder={t('Note (Not required)')}
                placeholderTextColor={colors.value}
                keyboardType="numeric"
              />
            </View>
            <View style={styles.btnSave}>
              <Button
                onPress={() => props.closeModal()}
                title={t('SAVE')}
                color="#6236FF"
                style={styles.btn}
              />
            </View>
          </View>
          <View style={styles.btn}>
            <Button
              onPress={() => props.closeModal()}
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
  inputNote: {
    padding: 0,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    width: screenWidth - 110,
  },
  inputInitial: {
    padding: 0,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    width: (screenWidth - 80) / 2,
    marginLeft: 35,
  },
  inputName: {
    padding: 0,
    marginLeft: 80,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    width: (screenWidth - 80) / 2,
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
