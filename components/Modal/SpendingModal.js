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
const windowHeight = Dimensions.get('window').height;

const SpendingModalView = ({item, handlePress, navigation, closeModal}) => {
  const {t} = useTranslation();
  const {colors, colors2} = useTheme();

  return (
    <View>
      <List.Accordion
        title={t(item.name)}
        titleStyle={[styles.title, {color: colors.value}]}
        left={props => <Icon name={item.icon} size={25} color={colors.value} />}
        onPress={handlePress}>
        {item.typeOfSpendingList.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => {
              navigation.navigate('SpendingScreen', {
                type: item.name,
                id: item.id,
              });
              closeModal();
            }}>
            <View
              style={[
                styles.dropDownContent,
                {borderBottomColor: colors2.borderBottomColor},
              ]}>
              <Icon name={item.icon} size={25} color={colors.value} />
              <Text style={[styles.title, {color: colors.value}]}>
                {t(item.name)}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </List.Accordion>
    </View>
  );
};

export default function SpendingModal({
  data,
  closeModal,
  showModal,
  navigation,
}) {
  const {t} = useTranslation();
  const {colors, colors2} = useTheme();

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
              {data != null ? (
                <View>
                  <List.Section title="">
                    {data.map((item, index) => (
                      <SpendingModalView
                        item={item}
                        key={index}
                        navigation={navigation}
                        closeModal={closeModal}
                      />
                    ))}
                  </List.Section>
                </View>
              ) : (
                <View></View>
              )}
            </ScrollView>
          </View>
          <View style={styles.btn}>
            <Button
              onPress={() => closeModal()}
              title={t('CLOSE')}
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
    maxHeight: windowHeight,
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
    maxHeight: windowHeight - 130,
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
