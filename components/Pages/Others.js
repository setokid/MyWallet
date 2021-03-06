import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useTheme} from 'react-native-paper';
import {useTranslation} from 'react-i18next';

import Icon2 from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/Ionicons';

const Others = ({navigation}) => {
  const {t} = useTranslation();
  const {colors, colors2} = useTheme();
  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <TouchableOpacity onPress={() => navigation.navigate('AboutScreen')}>
        <View style={styles.listItem}>
          <View style={styles.cube}>
            <Icon name="cube-outline" size={22} color={'#fff'} />
          </View>
          <View style={styles.item}>
            <Text style={{color: colors.value, fontSize: 17}}>
              {t('About Us')}
            </Text>
            <Icon2 style={{color: colors2.icon}} name="right" size={18} />
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ContactScreen')}>
        <View style={styles.listItem}>
          <View style={styles.cube}>
            <Icon name="cube-outline" size={22} color={'#fff'} />
          </View>
          <View style={styles.item}>
            <Text style={{color: colors.value, fontSize: 17}}>
              {t('Contact')}
            </Text>
            <Icon2 style={{color: colors2.icon}} name="right" size={18} />
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('FAQScreen')}>
        <View
          style={[
            styles.listItem,
            {borderBottomWidth: colors2.borderBottomWidth},
          ]}>
          <View style={styles.cube}>
            <Icon name="cube-outline" size={22} color={'#fff'} />
          </View>
          <View style={styles.item}>
            <Text style={{color: colors.value, fontSize: 17}}>{t('FAQ')}</Text>
            <Icon2 style={{color: colors2.icon}} name="right" size={18} />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Others;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginLeft: 16,
    marginRight: 16,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
    borderRadius: 10,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 11,
    paddingRight: 16,
    paddingBottom: 11,
    paddingLeft: 16,
    borderBottomColor: '#dcdce9',
    borderBottomWidth: 1,
    borderBottomRightRadius: 2,
  },
  cube: {
    width: 36,
    height: 36,
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    marginRight: 16,
    backgroundColor: '#1DCC70',
    borderRadius: 400,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,

    height: '100%',
  },
});
