import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import AppPages from '../../components/Pages/AppPages';

const Pages = () => {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={{fontSize: 16, fontWeight: '500'}}>App Pages</Text>
      </View>
      <AppPages />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ededf5',
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
