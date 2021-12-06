import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Dimensions,
  Alert,
} from 'react-native';

import DateTimePicker from '@react-native-community/datetimepicker';
import CommonCurrency from '../../components/Store/CommonCurrency';

import {useTheme} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {Picker} from '@react-native-picker/picker';
import {addTarget, getTarget, addAmount} from '../../components/Store/FetchAPI';

const screenWidth = Dimensions.get('screen').width;

const AddTargetView = () => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const today = date.toJSON().slice(0, 10);
  const nDate =
    today.slice(8, 10) + '/' + today.slice(5, 7) + '/' + today.slice(0, 4);

  const endDate = String(
    today.slice(0, 4) + '-' + today.slice(5, 7) + '-' + today.slice(8, 10),
  );

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

  const {colors} = useTheme();

  const [name, setName] = useState('');
  const [currency, setCurrency] = useState('VND');
  const [total, setTotal] = useState('');
  const [description, setDescription] = useState('');
  const [commonCurrency, setCommonCurrency] = useState(CommonCurrency);

  const clearInput = () => {
    setName('');
    setCurrency('');
    setTotal('');
    setDate(new Date());
    setDescription('');
  };

  const confirmAddTarget = (name, currency, total, date_end, description) => {
    if (total == null || total == 0) {
      Alert.alert('Error', 'Total cant be zero', [{text: 'Okay'}]);
    } else {
      addTarget(name, currency, total, date_end, description);
      clearInput();
      Alert.alert('Successful', 'Successful extra target', [{text: 'Okay'}]);
    }
  };

  return (
    <View style={[styles.content, {backgroundColor: colors.background}]}>
      <View>
        <Text style={[styles.title, {color: colors.value}]}>
          {t('Target')}{' '}
        </Text>
      </View>
      <View style={styles.inputValue}>
        <TextInput
          style={[styles.input]}
          onChangeText={val => setTotal(val)}
          value={total}
          placeholder="Target value"
          placeholderTextColor={colors.value}
          keyboardType="numeric"
        />
        <View style={styles.pickerView}>
          <Picker
            selectedValue={currency}
            style={[
              styles.picker,
              {color: colors.value, width: screenWidth - 220},
            ]}
            dropdownIconColor={colors.value}
            onValueChange={(itemValue, itemIndex) => setCurrency(itemValue)}
            mode="dropdown">
            {commonCurrency.map(item => (
              <Picker.Item
                key={item}
                style={{
                  backgroundColor: colors.background,
                  color: colors.value,
                  fontFamily: 'Ebrima',
                  fontSize: 17,
                }}
                label={item.code}
                value={item.code}
              />
            ))}
          </Picker>
        </View>
      </View>
      <View
        style={[
          styles.inputValue,
          {flexDirection: 'column', alignItems: 'flex-start'},
        ]}>
        <Text style={[styles.text, {color: colors.value}]}>
          {t('Target name: ')}
        </Text>
        <TextInput
          style={[styles.inputNote]}
          placeholderTextColor={colors.value}
          onChangeText={val => setName(val)}
          value={name}
          placeholder={t('Target name')}
          keyboardType="default"
        />
      </View>
      <View style={styles.dateTimePicker}>
        <Text style={[styles.text, {color: colors.value}]}>
          {t('Date end: ')}
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
          onChangeText={setDescription}
          value={description}
          placeholder={t('Description (Not required)')}
          keyboardType="default"
        />
      </View>
      <View>
        <View style={styles.btnConfirm}>
          <Button
            onPress={() =>
              confirmAddTarget(name, currency, total, endDate, description)
            }
            title={t('Confirm')}
          />
        </View>
      </View>
    </View>
  );
};

const AddTargetAmountView = ({targetId}) => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const today = date.toJSON().slice(0, 10);
  const nDate =
    today.slice(8, 10) + '/' + today.slice(5, 7) + '/' + today.slice(0, 4);

  const endDate = String(
    today.slice(0, 4) + '-' + today.slice(5, 7) + '-' + today.slice(8, 10),
  );

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

  const {colors} = useTheme();

  const [currency, setCurrency] = useState('VND');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [idTarget, setIdTarget] = useState('1');
  const [commonCurrency, setCommonCurrency] = useState(CommonCurrency);
  const clearInput = () => {
    setAmount('');
    setDate(new Date());
    setDescription('');
    setIdTarget('');
  };

  const confirmAddAmountTarget = (targetid, currency, amount, description) => {
    if (amount == null || amount == 0) {
      Alert.alert('Error', 'Amount cant be zero', [{text: 'Okay'}]);
    } else {
      addAmount(targetid, currency, amount, description);
      clearInput();
      Alert.alert('Successful', 'Successful extra amount target', [
        {text: 'Okay'},
      ]);
    }
  };

  return (
    <View style={[styles.content, {backgroundColor: colors.background}]}>
      <View>
        <Text style={[styles.title, {color: colors.value}]}>
          {t('Add Amount Target')}{' '}
        </Text>
      </View>
      <View style={styles.inputValue}>
        <TextInput
          style={[styles.input]}
          onChangeText={val => setAmount(val)}
          value={amount}
          placeholder="Amount"
          placeholderTextColor={colors.value}
          keyboardType="numeric"
        />
        <View style={styles.pickerView}>
          <Picker
            selectedValue={currency}
            style={[
              styles.picker,
              {color: colors.value, width: screenWidth - 240},
            ]}
            dropdownIconColor={colors.value}
            onValueChange={(itemValue, itemIndex) => setCurrency(itemValue)}
            mode="dropdown">
            {commonCurrency.map(item => (
              <Picker.Item
                key={item}
                style={{
                  backgroundColor: colors.background,
                  color: colors.value,
                  fontFamily: 'Ebrima',
                  fontSize: 17,
                }}
                label={item.code}
                value={item.code}
              />
            ))}
          </Picker>
        </View>
      </View>
      <View
        style={[
          styles.inputValue,
          {flexDirection: 'column', alignItems: 'flex-start'},
        ]}>
        <Text style={[styles.text, {color: colors.value}]}>
          {t('Target name: ')}
        </Text>
        <View style={[styles.pickerView]}>
          {targetId != '' ? (
            <Picker
              selectedValue={idTarget}
              style={[styles.picker, {color: colors.value, width: '100%'}]}
              dropdownIconColor={colors.value}
              onValueChange={(itemValue, itemIndex) => setIdTarget(itemValue)}
              mode="dropdown">
              {targetId.map(item => (
                <Picker.Item
                  key={item}
                  style={{
                    backgroundColor: colors.background,
                    color: colors.value,
                    fontFamily: 'Ebrima',
                    fontSize: 17,
                  }}
                  label={item.name}
                  value={item.id}
                />
              ))}
            </Picker>
          ) : (
            <Picker
              selectedValue={currency}
              style={[styles.picker, {color: colors.value, width: '100%'}]}
              dropdownIconColor={colors.value}
              onValueChange={(itemValue, itemIndex) => {}}
              mode="dropdown"></Picker>
          )}
        </View>
      </View>
      <View style={styles.inputValue}>
        <TextInput
          style={styles.inputNote}
          placeholderTextColor={colors.value}
          onChangeText={setDescription}
          value={description}
          placeholder={t('Description (Not required)')}
          keyboardType="default"
        />
      </View>
      <View>
        <View style={styles.btnConfirm}>
          <Button
            onPress={() =>
              confirmAddAmountTarget(idTarget, currency, amount, description)
            }
            title={t('Confirm')}
          />
        </View>
      </View>
    </View>
  );
};

const Target = ({navigation}) => {
  const {colors, colors2} = useTheme();
  const {t} = useTranslation();
  const [target_amount, setTarget_Amount] = useState(true);

  const [targetId, setTargetId] = useState([]);

  useEffect(() => {
    let cleanup = true;
    async function callApi() {
      if (cleanup) {
        let resuertarget = await getTarget();
        setTargetId(resuertarget);
        log;
      }
    }

    callApi();

    return () => {
      cleanup = false;
    };
  }, []);

  return (
    <View style={[styles.container, {backgroundColor: colors2.background}]}>
      <View style={styles.topTab}>
        <View style={{width: '47%'}}>
          <Button
            onPress={() => setTarget_Amount(true)}
            title={t('Add Target')}
          />
        </View>
        <View style={{width: '47%'}}>
          <Button
            onPress={() => setTarget_Amount(false)}
            title={t('Add target amount')}
          />
        </View>
      </View>
      {target_amount == true ? (
        <AddTargetView />
      ) : (
        <AddTargetAmountView targetId={targetId} />
      )}
    </View>
  );
};

export default Target;

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
    width: screenWidth - 240,
    marginLeft: 20,
    height: 40,
    justifyContent: 'center',
  },
  btnConfirm: {
    width: '100%',
  },
  topTab: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
});
