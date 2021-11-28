import React, {useState, useEffect} from 'react';

import {ScrollView, StyleSheet, View, ActivityIndicator} from 'react-native';
import {useTheme} from '@react-navigation/native';

import WalletCard from '../../components/SectionCard/WalletCard';
import StatsCard from '../../components/SectionCard/StatsCard';
import TransactionCard from '../../components/SectionCard/TransactionCard';
import SavingGoalsCard from '../../components/SectionCard/SavingGoalsCard';
import IncomeModal from '../../components/Modal/IncomeModal';
import SpendingModal from '../../components/Modal/SpendingModal';
import NewWalletModal from '../../components/Modal/NewWalletModal';
import AsyncStorage from '@react-native-async-storage/async-storage';

console.disableYellowBox = true;

const Home = ({navigation}) => {
  const {colors2} = useTheme();
  const [incomeModal, setIncomeModal] = useState(false);
  const [spendingModal, setSpendingModal] = useState(false);
  const [newWalletModal, setNewWalletModal] = useState(false);
  const [userData, setUserData] = useState([]);
  console.log(userData);

  useEffect(() => {
    let cleanup = true;
    let isLoading = true;

    async function fetchAPI() {
      if (cleanup) {
        let userToken;
        userToken = null;
        try {
          userToken = await AsyncStorage.getItem('userToken');
          console.log('1', userToken);
          const ApiUrl = 'http://localhost:8585/userinfo/index?currency=VND';
          await fetch(ApiUrl, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: userToken,
            },
          })
            .then(res => {
              if (!res.ok) {
                throw res.status;
              } else {
                isLoading = false;
                return res.json();
              }
            })
            .then(resData => {
              setUserData(resData);
            })
            .catch(error => {
              console.log(error);
            });
        } catch (error) {
          console.log(error);
        }
      }
    }
    function loadDing() {
      if (isLoading) {
        return (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <ActivityIndicator size="large" />
          </View>
        );
      }
    }
    loadDing();
    fetchAPI();
    return () => {
      cleanup = false;
    };
  }, []);

  const openModal = input => {
    let type = input;
    if (type == 1) {
      setIncomeModal(true);
      console.log(incomeModal);
    } else if (type == 2) {
      setSpendingModal(true);
    } else if (type == 3) {
      setNewWalletModal(true);
    }
  };

  const closeModal = () => {
    setIncomeModal(false);
    setSpendingModal(false);
    setNewWalletModal(false);
  };
  return (
    <ScrollView
      style={[styles.container, {backgroundColor: colors2.background}]}
      nestedScrollEnabled={true}
      showsVerticalScrollIndicator={false}>
      <WalletCard
        navigation={navigation}
        openModal={openModal}
        data={userData}
      />
      <StatsCard data={userData} />
      <TransactionCard navigation={navigation} />
      <SavingGoalsCard navigation={navigation} />
      <IncomeModal
        showModal={incomeModal}
        closeModal={closeModal}
        navigation={navigation}
      />
      <SpendingModal
        showModal={spendingModal}
        closeModal={closeModal}
        navigation={navigation}
      />
      <NewWalletModal
        showModal={newWalletModal}
        closeModal={closeModal}
        navigation={navigation}
      />
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
