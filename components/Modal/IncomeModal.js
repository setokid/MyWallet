import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  ScrollView,
  Button,
  Dimensions,
} from 'react-native';
import {useTranslation} from 'react-i18next';
import Icon from 'react-native-vector-icons/Ionicons';
import {useTheme} from '@react-navigation/native';
import {List} from 'react-native-paper';

const screenWidth = Dimensions.get('screen').width;
const windowWidth = Dimensions.get('window').width;

export default function IncomeModal(props, {navigation}) {
  const {t} = useTranslation();
  const {colors, colors2} = useTheme();
  const [expanded, setExpanded] = useState(true);

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
              {t('SELECT CATEGORY')}
            </Text>
          </View>
          <View
            style={[
              styles.modalViewSelect,
              {backgroundColor: colors.background},
            ]}>
            <ScrollView
              contentContainerStyle={{width: windowWidth - 100}}
              contentInset={{top: 0, left: 0, bottom: 0, right: 0}}>
              <List.Section title="">
                <List.Accordion
                  title={t('Income')}
                  titleStyle={[styles.title, {color: colors.value}]}
                  left={props => (
                    <Icon
                      name="md-wallet-sharp"
                      size={25}
                      color={colors.value}
                    />
                  )}
                  onPress={handlePress}>
                  <TouchableOpacity
                    onPress={() => {
                      props.navigation.navigate('IncomeScreen', {
                        type: 'Salary',
                      });
                      props.closeModal();
                    }}>
                    <View
                      style={[
                        styles.dropDownContent,
                        {borderBottomColor: colors2.borderBottomColor},
                      ]}>
                      <Icon
                        name="ios-briefcase-sharp"
                        size={25}
                        color={colors.value}
                      />
                      <Text style={[styles.title, {color: colors.value}]}>
                        {t('Salary')}
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      props.navigation.navigate('IncomeScreen', {
                        type: 'Money From Errands',
                      });
                      props.closeModal();
                    }}>
                    <View
                      style={[
                        styles.dropDownContent,
                        {borderBottomColor: colors2.borderBottomColor},
                      ]}>
                      <Icon
                        name="md-construct-sharp"
                        size={25}
                        color={colors.value}
                      />
                      <Text style={[styles.title, {color: colors.value}]}>
                        {t('Money From Errands')}
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      props.navigation.navigate('IncomeScreen', {
                        type: 'Subsidy',
                      });
                      props.closeModal();
                    }}>
                    <View
                      style={[
                        styles.dropDownContent,
                        {borderBottomColor: colors2.borderBottomColor},
                      ]}>
                      <Icon name="cash" size={25} color={colors.value} />
                      <Text style={[styles.title, {color: colors.value}]}>
                        {t('Subsidy')}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </List.Accordion>
                <List.Accordion
                  title={t('Others (Income)')}
                  titleStyle={[styles.title, {color: colors.value}]}
                  left={props => (
                    <Icon name="receipt-sharp" size={25} color={colors.value} />
                  )}
                  onPress={handlePress}>
                  <TouchableOpacity
                    onPress={() => {
                      props.navigation.navigate('IncomeScreen', {
                        type: 'Other (Income)',
                      });
                      props.closeModal();
                    }}>
                    <View
                      style={[
                        styles.dropDownContent,
                        {borderBottomColor: colors2.borderBottomColor},
                      ]}>
                      <Icon
                        name="receipt-sharp"
                        size={25}
                        color={colors.value}
                      />
                      <Text style={[styles.title, {color: colors.value}]}>
                        {t('Others (Income)')}
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      props.navigation.navigate('IncomeScreen', {
                        type: 'Personal Savings',
                      });
                      props.closeModal();
                    }}>
                    <View
                      style={[
                        styles.dropDownContent,
                        {borderBottomColor: colors2.borderBottomColor},
                      ]}>
                      <Icon name="card" size={25} color={colors.value} />
                      <Text style={[styles.title, {color: colors.value}]}>
                        {t('Personal Savings')}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </List.Accordion>
              </List.Section>
            </ScrollView>
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
    justifyContent: 'center',
    width: windowWidth - 75,
    alignItems: 'flex-start',
    alignContent: 'center',
    borderRadius: 10,
    marginTop: -40,
    padding: 15,
  },
  dropDownContent: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    padding: 5,
    marginLeft: -30,
    marginRight: 40,
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
});