import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useTheme} from '@react-navigation/native';

import Transactions from '../../Transactions';

function TransactionDetails(props) {
  // console.log(props.item);
  const {colors} = useTheme();
  return (
    <View>
      <View style={[styles.detailsCard, {backgroundColor: colors.background}]}>
        <View style={styles.transactionsDetail}>
          <View>
            <Text style={[styles.detail, {color: colors.value}]}>
              {props.item.detail}
            </Text>
            <Text style={[styles.type, {color: colors.text}]}>
              {props.item.type}
            </Text>
          </View>
        </View>
        <View>
          <Text>{props.item.value}</Text>
        </View>
      </View>
    </View>
  );
}

const TransactionCard = () => {
  const [transaction] = useState(Transactions);
  const {colors} = useTheme();
  return (
    <View style={styles.section}>
      <View style={styles.transactionHeading}>
        <View style={styles.header}>
          <Text style={[styles.transactionTitle, {color: colors.value}]}>
            Transaction
          </Text>
          <TouchableOpacity activeOpacity="0.5">
            <Text style={styles.viewAll}>View All</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.transactions}>
          {/* <FlatList
            data={transaction}
            showsVerticalScrollIndicator={false}
            renderItem={({item, index}) => {
              return <TransactionDetails item={item} key={index} />;
            }}
          /> */}
          {transaction.slice(0, 3).map((item, index) => {
            return <TransactionDetails item={item} key={index} />;
          })}
        </View>
      </View>
    </View>
  );
};

export default TransactionCard;

const styles = StyleSheet.create({
  section: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  transactionHeading: {
    flex: 1,
    paddingTop: 32,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  transactionTitle: {
    margin: 0,
    fontSize: 24,
    color: '#27173E',
    fontWeight: '700',
  },
  viewAll: {
    color: '#6236ff',
    fontSize: 16,
    fontWeight: '500',
  },

  detailsCard: {
    flex: 1,
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
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 20,
    paddingRight: 24,
    paddingBottom: 20,
    paddingLeft: 24,
    flexDirection: 'row',
  },
  transactionsDetail: {
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  detail: {fontWeight: '500', color: '#27173E', fontSize: 16},
  type: {fontWeight: '500', color: '#958d9e', fontSize: 11},
});
