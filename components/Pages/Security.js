import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useTheme} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import {AuthContext} from '../Store/Context';

import Icon2 from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/Ionicons';

const Security = ({openModal}) => {
  const {signOut} = React.useContext(AuthContext);
  const {t} = useTranslation();
  const {colors, colors2} = useTheme();
  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <TouchableOpacity onPress={() => openModal(2)}>
        <View style={styles.listItem}>
          <View style={styles.item}>
            <Text style={{color: colors.value, fontSize: 17}}>
              {t('Change Password')}
            </Text>
            <Icon2 style={{color: colors2.icon}} name="right" size={18} />
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => signOut()}>
        <View
          style={[
            styles.listItem,
            {borderBottomWidth: colors2.borderBottomWidth},
          ]}>
          <View style={styles.item}>
            <Text style={{color: colors.value, fontSize: 17}}>
              {t('Sign Out')}
            </Text>
            <Icon2 style={{color: colors2.icon}} name="right" size={18} />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Security;

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
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,

    height: '100%',
  },
});
