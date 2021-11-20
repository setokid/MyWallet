import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {useTranslation} from 'react-i18next';
import Icon from 'react-native-vector-icons/Ionicons';
import DropDownItem from 'react-native-drop-down-item';
import {useTheme} from '@react-navigation/native';

const Send = ({navigation}) => {
  const {t} = useTranslation();
  const {colors, colors2} = useTheme();
  return (
    <ScrollView>
      <DropDownItem
        style={styles.dropDown}
        contentVisible={false}
        invisibleImage={{}}
        visibleImage={{}}
        header={
          <View style={styles.content}>
            <Icon name="restaurant-outline" size={25} color={colors.value} />
            <Text style={[styles.title, {color: colors.value}]}>
              {t('Food/Drink')}
            </Text>
          </View>
        }>
        <TouchableOpacity>
          <View
            style={[
              styles.dropDownContent,
              {borderBottomColor: colors2.borderBottomColor},
            ]}>
            <Icon name="briefcase-outline" size={25} color={colors.value} />
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
            <Icon name="construct-outline" size={25} color={colors.value} />
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
            <Icon name="cart-outline" size={25} color={colors.value} />
            <Text style={[styles.title, {color: colors.value}]}>
              {t('Shopping')}
            </Text>
          </View>
        }>
        <TouchableOpacity>
          <View
            style={[
              styles.dropDownContent,
              {borderBottomColor: colors2.borderBottomColor},
            ]}>
            <Icon name="md-receipt-outline" size={25} color={colors.value} />
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
            <Icon name="construct-outline" size={25} color={colors.value} />
            <Text style={[styles.title, {color: colors.value}]}>
              {t('Personal savings money')}
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
            <Icon name="car-sport-outline" size={25} color={colors.value} />
            <Text style={[styles.title, {color: colors.value}]}>
              {t('Transport')}
            </Text>
          </View>
        }>
        <TouchableOpacity>
          <View
            style={[
              styles.dropDownContent,
              {borderBottomColor: colors2.borderBottomColor},
            ]}>
            <Icon name="md-receipt-outline" size={25} color={colors.value} />
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
            <Icon name="construct-outline" size={25} color={colors.value} />
            <Text style={[styles.title, {color: colors.value}]}>
              {t('Personal savings money')}
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
            <Icon name="ios-people-outline" size={25} color={colors.value} />
            <Text style={[styles.title, {color: colors.value}]}>
              {t('Family')}
            </Text>
          </View>
        }>
        <TouchableOpacity>
          <View
            style={[
              styles.dropDownContent,
              {borderBottomColor: colors2.borderBottomColor},
            ]}>
            <Icon name="md-receipt-outline" size={25} color={colors.value} />
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
            <Icon name="construct-outline" size={25} color={colors.value} />
            <Text style={[styles.title, {color: colors.value}]}>
              {t('Personal savings money')}
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
            <Icon name="md-heart-outline" size={25} color={colors.value} />
            <Text style={[styles.title, {color: colors.value}]}>
              {t('Health/Sports')}
            </Text>
          </View>
        }>
        <TouchableOpacity>
          <View
            style={[
              styles.dropDownContent,
              {borderBottomColor: colors2.borderBottomColor},
            ]}>
            <Icon name="md-receipt-outline" size={25} color={colors.value} />
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
            <Icon name="construct-outline" size={25} color={colors.value} />
            <Text style={[styles.title, {color: colors.value}]}>
              {t('Personal savings money')}
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
            <Icon name="ios-paw-outline" size={25} color={colors.value} />
            <Text style={[styles.title, {color: colors.value}]}>
              {t('Pet')}
            </Text>
          </View>
        }>
        <TouchableOpacity>
          <View
            style={[
              styles.dropDownContent,
              {borderBottomColor: colors2.borderBottomColor},
            ]}>
            <Icon name="md-receipt-outline" size={25} color={colors.value} />
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
            <Icon name="construct-outline" size={25} color={colors.value} />
            <Text style={[styles.title, {color: colors.value}]}>
              {t('Personal savings money')}
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
            <Icon name="airplane-outline" size={25} color={colors.value} />
            <Text style={[styles.title, {color: colors.value}]}>
              {t('Travel')}
            </Text>
          </View>
        }>
        <TouchableOpacity>
          <View
            style={[
              styles.dropDownContent,
              {borderBottomColor: colors2.borderBottomColor},
            ]}>
            <Icon name="md-receipt-outline" size={25} color={colors.value} />
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
            <Icon name="construct-outline" size={25} color={colors.value} />
            <Text style={[styles.title, {color: colors.value}]}>
              {t('Personal savings money')}
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
            <Icon name="md-receipt-outline" size={25} color={colors.value} />
            <Text style={[styles.title, {color: colors.value}]}>
              {t('Others (Cost)')}
            </Text>
          </View>
        }>
        <TouchableOpacity>
          <View
            style={[
              styles.dropDownContent,
              {borderBottomColor: colors2.borderBottomColor},
            ]}>
            <Icon name="md-receipt-outline" size={25} color={colors.value} />
            <Text style={[styles.title, {color: colors.value}]}>
              {t('Others (Cost)')}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={[
              styles.dropDownContent,
              {borderBottomColor: colors2.borderBottomColor},
            ]}>
            <Icon name="construct-outline" size={25} color={colors.value} />
            <Text style={[styles.title, {color: colors.value}]}>
              {t('Personal savings money')}
            </Text>
          </View>
        </TouchableOpacity>
      </DropDownItem>
    </ScrollView>
  );
};

export default Send;

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
