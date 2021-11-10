import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {color} from 'react-native-reanimated';

const WalletCard = () => {
  const {colors} = useTheme();
  return (
    <View style={[styles.section, {paddingTop: 16}]}>
      <View
        style={[
          styles.walletCardSection,
          {backgroundColor: colors.background},
        ]}>
        <View style={styles.blance}>
          <View style={styles.blanceLeft}>
            <Text style={[styles.blanceTitle, {color: colors.value}]}>
              Total Balance
            </Text>
            <Text
              style={[
                styles.blanceValue,
                {flexWrap: 'wrap', color: colors.value},
              ]}>
              100.000.000 đ
            </Text>
          </View>
          <View>
            <TouchableOpacity style={styles.addButton} activeOpacity={0.5}>
              <Image source={require('../../assets/icon/plus.png')} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.blanceFooter}>
          <View style={styles.footerButton}>
            <TouchableOpacity style={styles.withdraw} activeOpacity={0.5}>
              <Image source={require('../../assets/icon/down-arrow.png')} />
            </TouchableOpacity>
            <Text style={{color: colors.value}}>Withdraw</Text>
          </View>
          <View style={styles.footerButton}>
            <TouchableOpacity style={styles.send} activeOpacity={0.5}>
              <Image source={require('../../assets/icon/right-arrow.png')} />
            </TouchableOpacity>
            <Text style={{color: colors.value}}>Send</Text>
          </View>
          <View style={styles.footerButton}>
            <TouchableOpacity style={styles.deposit} activeOpacity={0.5}>
              <Image source={require('../../assets/icon/up-arrow.png')} />
            </TouchableOpacity>
            <Text style={{color: colors.value}}>Deposit</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default WalletCard;

const with_proportion = '50%';
const styles = StyleSheet.create({
  section: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  walletCardSection: {
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
    padding: 20,
  },

  blance: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 100,
    flexWrap: 'wrap',
  },

  blanceLeft: {
    flexDirection: 'column',
    flex: 1,
  },
  addButton: {
    backgroundColor: '6236ff',
    height: 64,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  blanceValue: {
    color: '#27173E',
    fontSize: 30,
    fontWeight: 'bold',
  },
  blanceTitle: {
    color: '#27173E',
    fontSize: 20,
  },
  blanceFooter: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingTop: 20,
    borderTopColor: '#DCDCE9',
    borderTopWidth: 1,
  },
  withdraw: {
    backgroundColor: '#FF396F',
    width: 64,
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginBottom: 10,
  },
  send: {
    backgroundColor: '#6236FF',
    width: 64,
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginBottom: 10,
  },
  deposit: {
    backgroundColor: '#1DCC70',
    width: 64,
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginBottom: 10,
  },
  footerButton: {
    alignItems: 'center',
  },
});
