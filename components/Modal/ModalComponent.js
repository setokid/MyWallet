import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  ScrollView,
  Button,
} from 'react-native';
import {useTranslation} from 'react-i18next';
import Icon from 'react-native-vector-icons/Ionicons';
import DropDownItem from 'react-native-drop-down-item';
import {useTheme} from '@react-navigation/native';

export default function ModalComponent(props) {
  const {t} = useTranslation();
  const {colors, colors2} = useTheme();
  return (
    <Modal
      animationType="slide"
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
            <ScrollView>
              <DropDownItem
                style={styles.dropDown}
                contentVisible={false}
                invisibleImage={{}}
                visibleImage={{}}
                header={
                  <View style={styles.content}>
                    <Icon name="cash-outline" size={25} color={colors.value} />
                    <Text style={[styles.title, {color: colors.value}]}>
                      {t('Income')}
                    </Text>
                  </View>
                }>
                <TouchableOpacity>
                  <View
                    style={[
                      styles.dropDownContent,
                      {borderBottomColor: colors2.borderBottomColor},
                    ]}>
                    <Icon
                      name="briefcase-outline"
                      size={25}
                      color={colors.value}
                    />
                    <Text style={[styles.title, {color: colors.value}]}>
                      {t('Salary')}
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View
                    style={[
                      styles.dropDownContent,
                      {borderBottomColor: colors2.borderBottomColor},
                    ]}>
                    <Icon
                      name="construct-outline"
                      size={25}
                      color={colors.value}
                    />
                    <Text
                      style={[
                        styles.title,
                        {
                          color: colors.value,
                        },
                      ]}>
                      {t('Money from errands')}
                    </Text>
                  </View>
                </TouchableOpacity>
              </DropDownItem>
              <DropDownItem
                style={styles.dropDown}
                contentVisible={false}
                invisibleImage={{}}
                visibleImage={{}}
                header={
                  <View style={styles.content}>
                    <Icon
                      name="md-receipt-outline"
                      size={25}
                      color={colors.value}
                    />
                    <Text style={[styles.title, {color: colors.value}]}>
                      {t('Others')}
                    </Text>
                  </View>
                }>
                <TouchableOpacity>
                  <View
                    style={[
                      styles.dropDownContent,
                      {borderBottomColor: colors2.borderBottomColor},
                    ]}>
                    <Icon
                      name="md-receipt-outline"
                      size={25}
                      color={colors.value}
                    />
                    <Text style={[styles.title, {color: colors.value}]}>
                      {t('Others (Income)')}
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View
                    style={[
                      styles.dropDownContent,
                      {borderBottomColor: colors2.borderBottomColor},
                    ]}>
                    <Icon
                      name="construct-outline"
                      size={25}
                      color={colors.value}
                    />
                    <Text style={[styles.title, {color: colors.value}]}>
                      {t('Personal savings money')}
                    </Text>
                  </View>
                </TouchableOpacity>
              </DropDownItem>
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
    margin: 20,
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
    width: '100%',
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
    height: 'auto',
    justifyContent: 'center',
    width: '90%',
    alignItems: 'flex-start',
    alignContent: 'center',
    borderRadius: 10,
    marginTop: -40,
    padding: 15,
  },
  content: {flexDirection: 'row'},
  dropDownContent: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    padding: 5,
  },
  title: {
    paddingLeft: 5,
    fontWeight: '500',
    fontSize: 20,
    width: '100%',
  },
  btn: {
    width: '50%',
    paddingTop: 10,
    borderRadius: 20,
  },
});
