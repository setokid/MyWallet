import React from 'react';
import {useTranslation} from 'react-i18next';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import {useTheme} from 'react-native-paper';

import AppPages from '../../components/Pages/AppPages';
import Authentication from '../../components/Pages/Authentication';
import Blog from '../../components/Pages/Blog';
import Language from '../../components/Pages/Language';
import Others from '../../components/Pages/Others';
import Theme from '../../components/Pages/Theme';

import {AuthContext} from '../Service/Context';

const Pages = () => {
  const {t} = useTranslation();
  const {colors2} = useTheme();
  return (
    <ScrollView nestedScrollEnabled={true} showsVerticalScrollIndicator={false}>
      <View style={[styles.container, {backgroundColor: colors2.background}]}>
        <View style={[styles.title]}>
          <Text style={{fontSize: 16, fontWeight: '500', color: colors2.title}}>
            {t('App Pages')}
          </Text>
        </View>
        <AppPages />
        <View style={styles.title}>
          <Text style={{fontSize: 16, fontWeight: '500', color: colors2.title}}>
            {t('Authentication')}
          </Text>
        </View>
        <Authentication />
        <View style={styles.title}>
          <Text style={{fontSize: 16, fontWeight: '500', color: colors2.title}}>
            {t('Blog')}
          </Text>
        </View>
        <Blog />
        <View style={styles.title}>
          <Text style={{fontSize: 16, fontWeight: '500', color: colors2.title}}>
            {t('Theme')}
          </Text>
        </View>
        <Theme />
        <View style={styles.title}>
          <Text style={{fontSize: 16, fontWeight: '500', color: colors2.title}}>
            {t('Language')}
          </Text>
        </View>
        <Language />
        <View style={styles.title}>
          <Text style={{fontSize: 16, fontWeight: '500', color: colors2.title}}>
            {t('Others')}
          </Text>
        </View>
        <Others />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ededf5',
    paddingBottom: 16,
  },
  title: {
    color: '#958d9e',
    paddingTop: 7,
    paddingRight: 16,
    paddingBottom: 16,
    paddingLeft: 16,
    marginTop: 8,
    fontWeight: '500',
  },
});

export default Pages;
