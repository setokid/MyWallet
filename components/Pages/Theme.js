import React from 'react';

import {View, Text, StyleSheet} from 'react-native';
import {useTheme, Switch, TouchableRipple} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import {AuthContext} from '../Store/Context';

import Icon from 'react-native-vector-icons/Ionicons';

const Theme = () => {
  const {colors, colors2} = useTheme();
  const paperTheme = useTheme();
  const {toggleTheme} = React.useContext(AuthContext);
  const {t} = useTranslation();
  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <TouchableRipple
        onPress={() => {
          toggleTheme();
        }}>
        <View
          style={[
            styles.listItem,
            {borderBottomWidth: colors2.borderBottomWidth},
          ]}>
          <View style={styles.cube}>
            <Icon name="md-moon-outline" size={22} color={'#fff'} />
          </View>
          <View style={styles.item}>
            <Text style={{color: colors.value, fontSize: 17}}>
              {t('Dark Mode')}
            </Text>
            <Switch
              value={paperTheme.dark}
              trackColor={{false: '#767577', true: '#6236FF'}}
              thumbColor={'#6236FF'}
            />
          </View>
        </View>
      </TouchableRipple>
    </View>
  );
};

export default Theme;

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
    backgroundColor: '#6236FF',
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
