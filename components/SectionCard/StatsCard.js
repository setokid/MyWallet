import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
// import {useTheme} from 'react-native-paper';
import {useTheme} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import NumberFormat from 'react-number-format';

const StatsCard = ({income, spending}) => {
  const {t} = useTranslation();
  const {colors} = useTheme();
  var incomeSum;
  {
    income != null
      ? (incomeSum = income
          .map(item => parseInt(item.Record.amount))
          .reduce((prev, curr) => prev + curr))
      : null;
  }
  var spendingSum;
  {
    spending != null
      ? (spendingSum = spending
          .map(item => parseInt(item.Record.amount))
          .reduce((prev, curr) => prev + curr))
      : null;
  }

  return (
    <View style={[styles.section]}>
      <View style={[styles.sectionCard]}>
        <View style={[styles.sectionCardChil]}>
          <View
            style={[
              styles.sectionCardContent,
              {backgroundColor: colors.background},
            ]}>
            <Text style={[styles.title, {color: colors.text}]}>
              {t('Income')}
            </Text>
            {income != null ? (
              <NumberFormat
                value={incomeSum}
                displayType={'text'}
                thousandSeparator={true}
                renderText={(value, props) => (
                  <Text style={[styles.values, {color: '#1DCC70'}]} {...props}>
                    {value} VND
                  </Text>
                )}
              />
            ) : (
              <Text>...</Text>
            )}
          </View>
        </View>
        <View style={styles.sectionCardChil}>
          <View
            style={[
              styles.sectionCardContent,
              {backgroundColor: colors.background},
            ]}>
            <Text style={[styles.title, {color: colors.text}]}>
              {t('Expenses')}
            </Text>
            {spending != null ? (
              <NumberFormat
                value={spendingSum}
                displayType={'text'}
                thousandSeparator={true}
                renderText={(value, props) => (
                  <Text style={[styles.values, {color: '#FF396F'}]} {...props}>
                    {value} VND
                  </Text>
                )}
              />
            ) : (
              <Text>...</Text>
            )}
          </View>
        </View>
      </View>
      {/* <View style={styles.sectionCard}>
        <View style={styles.sectionCardChil}>
          <View
            style={[
              styles.sectionCardContent,
              {backgroundColor: colors.background},
            ]}>
            <Text style={[styles.title, {color: colors.text}]}>
              {t('Total Bills')}
            </Text>
            <Text style={[styles.values, {color: colors.value}]}>
              1.000.000
            </Text>
          </View>
        </View>
        <View style={styles.sectionCardChil}>
          <View
            style={[
              styles.sectionCardContent,
              {backgroundColor: colors.background},
            ]}>
            <Text style={[styles.title, {color: colors.text}]}>
              {t('Savings')}
            </Text>
            <Text style={[styles.values, {color: colors.value}]}>
              1.000.000
            </Text>
          </View>
        </View>
      </View> */}
    </View>
  );
};

export default StatsCard;

const with_proportion = '50%';
const styles = StyleSheet.create({
  section: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  sectionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: -8,
    marginRight: -8,
    marginTop: 16,
  },
  sectionCardChil: {
    width: with_proportion,
    paddingRight: 8,
    paddingLeft: 8,
  },

  sectionCardContent: {
    paddingTop: 21,
    paddingRight: 24,
    paddingBottom: 21,
    paddingLeft: 24,
    alignItems: 'flex-start',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 2.62,

    elevation: 4,
    borderRadius: 10,
  },

  values: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  title: {
    color: '#958d9e',
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
  },
});
