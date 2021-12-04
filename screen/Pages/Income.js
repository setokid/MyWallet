import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Button,
  Dimensions,
  Alert,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import DateTimePicker from '@react-native-community/datetimepicker';
import IncomeModal from '../../components/Modal/IncomeModal';

import {useTheme} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {Picker} from '@react-native-picker/picker';
import {addIncome} from '../../components/Store/FetchAPI';
import CommonCurrency from '../../components/Store/CommonCurrency';

const screenWidth = Dimensions.get('screen').width;

const Income = ({route, navigation}) => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [currency, setCurrency] = useState('VND');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [commonCurrency, setCommonCurrency] = useState(CommonCurrency);

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

  const {type, id} = route.params;

  const [spendingModal, setSpendingModal] = useState(false);

  const openModal = () => {
    setSpendingModal(true);
  };

  const closeModal = () => {
    setSpendingModal(false);
  };

  const clearInput = () => {
    setAmount('');
    setCurrency('');
    setDescription('');
    setCurrency('VND');
  };

  const confirm = (currency, amount, description, id) => {
    if (amount == null || amount == 0) {
      Alert.alert('Error', 'Amount cant be zero ', [{text: 'Okay'}]);
    } else {
      addIncome(id, currency, amount, description);
      Alert.alert('Success', 'Additional income', [{text: 'Okay'}]);
      clearInput();
    }
  };

  return (
    <View style={[styles.container, {backgroundColor: colors2.background}]}>
      <View style={[styles.content, {backgroundColor: colors.background}]}>
        <IncomeModal
          showModal={spendingModal}
          closeModal={closeModal}
          navigation={navigation}
        />
        <View>
          <Text style={[styles.title, {color: colors.value}]}>
            {t('Income')}
          </Text>
        </View>
        <View style={styles.inputValue}>
          <TextInput
            style={[styles.input]}
            value={amount}
            placeholder="Amount"
            placeholderTextColor={colors.value}
            keyboardType="numeric"
            onChangeText={val => setAmount(val)}
          />
          <View style={[styles.pickerView]}>
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
        <View>
          <TouchableOpacity
            style={styles.modalView}
            onPress={() => openModal()}>
            <Icon name="align-justify" color={colors.value} size={30} />
            <Text style={[styles.title, {color: colors.value, marginLeft: 10}]}>
              {type != '' ? `${t(type)}` : 'Choose type of Income'}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.from}>
          <View style={styles.walletView}>
            <Icon name="bank" size={30} color={colors.value} />
            <View style={styles.pickerView}>
              <Picker
                selectedValue={'Ví'}
                style={[styles.picker, {color: colors.value}]}
                dropdownIconColor={colors.value}
                onValueChange={(itemValue, itemIndex) => setCurrency(itemValue)}
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
          </View>
        </View>
        <View style={styles.dateTimePicker}>
          <Icon name="calendar" size={30} color={colors.value} />
          <View>
            <View style={styles.btndateTimePicker}>
              <TouchableOpacity onPress={showDatepicker}>
                <Text style={{color: colors.value}}>{String(nDate)}</Text>
              </TouchableOpacity>
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
          <Icon name="paint-brush" color={colors.value} size={30} />
          <TextInput
            style={styles.inputNote}
            placeholderTextColor={colors.value}
            onChangeText={val => setDescription(val)}
            value={description}
            placeholder={t('Note (Not required)')}
            keyboardType="default"
          />
        </View>
        <View>
          <View style={styles.btnConfirm}>
            <Button
              onPress={() => confirm(currency, amount, description, id)}
              title={t('Confirm')}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Income;

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
    marginLeft: 10,
    padding: 0,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    width: screenWidth - 120,
  },
  currency: {
    color: '#000',
  },

  from: {
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
    width: screenWidth - 100,
  },
  valueView: {
    paddingLeft: 15,
  },
  dateTimePicker: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btndateTimePicker: {
    width: screenWidth - 130,
    marginLeft: 20,
    height: 40,
    justifyContent: 'center',
  },
  btnConfirm: {
    width: '100%',
  },
  walletView: {
    flexDirection: 'row',
  },
  modalView: {
    flexDirection: 'row',
    paddingBottom: 5,
    paddingTop: 5,
  },
});
