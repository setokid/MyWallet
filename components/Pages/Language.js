import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Switch, TouchableRipple, useTheme} from 'react-native-paper';

import Icon from 'react-native-vector-icons/Ionicons';

import {AuthContext} from '../Context/Context';

const Language = () => {
  const {colors, colors2} = useTheme();
  const {signOut, toggleLanguage} = React.useContext(AuthContext);
  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <TouchableRipple
        onPress={() => {
          toggleLanguage();
        }}>
        <View style={styles.listItem}>
          <View style={styles.cube}>
            <Icon name="cube-outline" size={22} color={'#fff'} />
          </View>
          <View style={styles.item}>
            <Text style={{color: colors.value, fontSize: 17}}>English</Text>
            <Switch
              value={{}}
              trackColor={{false: '#767577', true: '#6236FF'}}
              thumbColor={'#6236FF'}
            />
          </View>
        </View>
      </TouchableRipple>
      <TouchableRipple
        onPress={() => {
          toggleLanguage();
        }}>
        <View
          style={[
            styles.listItem,
            {borderBottomWidth: colors2.borderBottomWidth},
          ]}>
          <View style={styles.cube}>
            <Icon name="cube-outline" size={22} color={'#fff'} />
          </View>
          <View style={styles.item}>
            <Text style={{color: colors.value, fontSize: 17}}>Vietnamese</Text>
            <Switch
              value={{}}
              trackColor={{false: '#767577', true: '#6236FF'}}
              thumbColor={'#6236FF'}
            />
          </View>
        </View>
      </TouchableRipple>
    </View>
  );
};

export default Language;

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
    backgroundColor: '#222',
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
