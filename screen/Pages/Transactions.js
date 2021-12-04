import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  RefreshControl,
  Dimensions,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {getTransaction} from '../../components/Store/FetchAPI';
import NumberFormat from 'react-number-format';

const TransactionView = ({item}) => {
  const {t} = useTranslation();
  const {colors} = useTheme();

  const [date, setDate] = useState(item.dateOfCreated);

  const today = date.slice(0, 10);
  const nDate =
    today.slice(8, 10) + '/' + today.slice(5, 7) + '/' + today.slice(0, 4);

  return (
    <View>
      <View style={[styles.detailsCard, {backgroundColor: colors.background}]}>
        <View style={styles.transactionsDetail}>
          <View>
            <Text style={[styles.detail, {color: colors.value}]}>
              {item.description}
            </Text>
            <Text style={[styles.type, {color: colors.text}]}>
              {item.nameType}
            </Text>
          </View>
        </View>
        <View>
          {item.spend_or_income == true ? (
            <NumberFormat
              value={item.amount}
              displayType={'text'}
              thousandSeparator={true}
              renderText={(value, props) => (
                <View>
                  <Text
                    style={[{flexWrap: 'wrap', color: '#1DCC70'}]}
                    {...props}>
                    + {value} {item.currency}
                  </Text>
                  <Text
                    style={[
                      styles.type,
                      {
                        color: colors.value,
                        textAlign: 'right',
                        fontSize: 10,
                        marginTop: 3,
                      },
                    ]}>
                    {nDate}
                  </Text>
                </View>
              )}
            />
          ) : (
            <NumberFormat
              value={item.amount}
              displayType={'text'}
              thousandSeparator={true}
              renderText={(value, props) => (
                <View>
                  <Text
                    style={[{flexWrap: 'wrap', color: '#FF396F'}]}
                    {...props}>
                    - {value} {item.currency}
                  </Text>
                  <Text
                    style={[
                      styles.type,
                      {
                        color: colors.value,
                        textAlign: 'right',
                        fontSize: 10,
                        marginTop: 3,
                      },
                    ]}>
                    {nDate}
                  </Text>
                </View>
              )}
            />
          )}
        </View>
      </View>
    </View>
  );
};

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

const screenheight = Dimensions.get('window').height;

const Transaction = () => {
  const [userTransaction, setUserTransaction] = useState([]);

  const {t} = useTranslation();

  const {colors, colors2} = useTheme();

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  useEffect(() => {
    let cleanup = true;
    async function callApi() {
      if (cleanup) {
        let resusertransaction = await getTransaction();
        setUserTransaction(resusertransaction);
      }
    }

    callApi();

    return () => {
      cleanup = false;
    };
  }, [refreshing]);

  return (
    <ScrollView
      style={{height: screenheight}}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <View style={[styles.section, {backgroundColor: colors2.background}]}>
        <View style={styles.transactionHeading}>
          <View style={styles.header}>
            <Text style={[styles.transactionTitle, {color: colors.value}]}>
              {t('Transaction')}
            </Text>
          </View>
          <View style={styles.transactions}>
            <FlatList
              data={userTransaction}
              showsVerticalScrollIndicator={false}
              renderItem={({item, index}) => {
                return <TransactionView item={item} key={index} />;
              }}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Transaction;

const styles = StyleSheet.create({
  section: {
    paddingLeft: 16,
    paddingRight: 16,
    height: 'auto',
  },
  transactionHeading: {
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
