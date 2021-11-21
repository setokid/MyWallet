import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Button,
  Dimensions,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import DateTimePicker from '@react-native-community/datetimepicker';

import {useTheme} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {Picker} from '@react-native-picker/picker';
import {color} from 'react-native-reanimated';

const screenWidth = Dimensions.get('screen').width;

const Send = ({navigation}) => {
  const [text, onChangeText] = useState(null);

  const [selectedValue, setSelectedValue] = useState('java');

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const today = date.toJSON().slice(0, 10);
  const nDate =
    today.slice(8, 10) + '/' + today.slice(5, 7) + '/' + today.slice(0, 4);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const {t} = useTranslation();

  const {colors, colors2} = useTheme();

  return (
    <View style={[styles.container, {backgroundColor: colors2.background}]}>
      <View style={[styles.content, {backgroundColor: colors.background}]}>
        <View>
          <Text style={[styles.title, {color: colors.value}]}>
            {t('Send (Value)')}{' '}
          </Text>
        </View>
        <View style={styles.inputValue}>
          <TextInput
            style={[styles.input]}
            onChangeText={onChangeText}
            value={text}
            placeholder="Value"
            placeholderTextColor={colors.value}
            keyboardType="numeric"
          />
          <Text style={[styles.currency, {color: colors.value}]}>
            Đơn vị tiền
          </Text>
        </View>
        <View style={styles.from}>
          <Text style={[styles.text, {color: colors.value}]}>
            {t('From: ')}
          </Text>
          <View>
            <View style={styles.pickerView}>
              <Picker
                selectedValue={selectedValue}
                style={[styles.picker, {color: colors.value}]}
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
                  label="Java"
                  value="java"
                />
                <Picker.Item
                  style={{
                    backgroundColor: colors.background,
                    color: colors.value,
                    fontFamily: 'Ebrima',
                    fontSize: 17,
                  }}
                  label="JavaScript"
                  value="js"
                />
              </Picker>
            </View>
            <View style={styles.valueView}>
              <Text style={{color: colors.value}}>100000000</Text>
            </View>
          </View>
        </View>
        <View style={styles.to}>
          <Text style={[styles.text, {marginRight: 74, color: colors.value}]}>
            {t('To: ')}
          </Text>
          <View>
            <View style={styles.pickerView}>
              <Picker
                selectedValue={selectedValue}
                style={[styles.picker, {color: colors.value}]}
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
                  label="Java"
                  value="java"
                />
                <Picker.Item
                  style={{
                    backgroundColor: colors.background,
                    color: colors.value,
                    fontFamily: 'Ebrima',
                    fontSize: 17,
                  }}
                  label="JavaScript"
                  value="js"
                />
              </Picker>
            </View>
            <View style={styles.valueView}>
              <Text style={{color: colors.value}}>100000000</Text>
            </View>
          </View>
        </View>
        <View style={styles.dateTimePicker}>
          <Text style={[styles.text, {color: colors.value}]}>
            {t('Date: ')}
          </Text>
          <View>
            <View style={styles.btndateTimePicker}>
              <Button
                color={'gray'}
                onPress={showDatepicker}
                title={String(nDate)}
              />
            </View>
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                display="default"
                onChange={onChange}
              />
            )}
          </View>
        </View>
        <View style={styles.inputValue}>
          <TextInput
            style={styles.inputNote}
            placeholderTextColor={colors.value}
            onChangeText={onChangeText}
            value={text}
            placeholder={t('Note (Not required)')}
            keyboardType="default"
          />
        </View>
        <View>
          <View style={styles.btnConfirm}>
            <Button onPress={{}} title={t('Confirm')} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Send;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  content: {
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
  },
  input: {
    padding: 0,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    width: (screenWidth - 80) / 2,
  },
  inputValue: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 15,
  },
  inputNote: {
    padding: 0,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    width: screenWidth - 80,
  },
  currency: {
    color: '#000',
  },
  text: {
    color: '#000',
    marginRight: 50,
    fontSize: 20,
  },
  from: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'flex-start',
  },
  to: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'flex-start',
  },
  pickerView: {
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
    height: 30,
  },
  picker: {
    width: screenWidth - 170,
  },
  valueView: {
    paddingLeft: 15,
  },
  dateTimePicker: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btndateTimePicker: {
    width: screenWidth - 200,
    marginLeft: 20,
    height: 40,
    justifyContent: 'center',
  },
  btnConfirm: {
    width: '100%',
  },
});
