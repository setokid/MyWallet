import React, {useState, useEffect} from 'react';

import {ScrollView, StyleSheet, useIsFocused} from 'react-native';
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

  useEffect(() => {
    let isApiSubscribed = true;
    async function fetchAPI() {
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
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
              isApiSubscribed = false;
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

    if (isApiSubscribed) {
      fetchAPI();
    }
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
      <WalletCard navigation={navigation} openModal={openModal} />
      <StatsCard />
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
