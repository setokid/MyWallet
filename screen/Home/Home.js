import React, {useState, useEffect, useCallback} from 'react';

import {
  ScrollView,
  StyleSheet,
  RefreshControl,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import {useTheme} from '@react-navigation/native';

import WalletCard from '../../components/SectionCard/WalletCard';
import StatsCard from '../../components/SectionCard/StatsCard';
import TransactionCard from '../../components/SectionCard/TransactionCard';
import SavingGoalsCard from '../../components/SectionCard/SavingGoalsCard';
import IncomeModal from '../../components/Modal/IncomeModal';
import SpendingModal from '../../components/Modal/SpendingModal';
import NewWalletModal from '../../components/Modal/NewWalletModal';
import IncomeModalData from '../../components/Store/IncomeModalData';
import SpendingModalData from '../../components/Store/SpendingModalData';

import {
  getUserData,
  getTransaction,
  getTarget,
  getIncomeTransaction,
  getSpenTransaction,
} from '../../components/Store/FetchAPI';

console.disableYellowBox = true;

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

const Home = ({navigation}) => {
  const {colors2} = useTheme();
  const [incomeModal, setIncomeModal] = useState(false);
  const [spendingModal, setSpendingModal] = useState(false);
  const [newWalletModal, setNewWalletModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState([]);
  const [userTransaction, setUserTransaction] = useState();
  const [userTarget, setUserTarget] = useState();
  const [refreshing, setRefreshing] = useState(false);
  const [userIncomeTran, setUserIncomeTran] = useState();
  const [userSpenTran, setUserSpenTran] = useState();
  const {colors} = useTheme();

  useEffect(() => {
    let cleanup = true;
    async function callApi() {
      if (cleanup) {
        let resUserData = await getUserData();
        let resUserTransaction = await getTransaction();
        let resUserTarget = await getTarget();
        let resUserIncomeTransaction = await getIncomeTransaction();
        let resUserSpenTransaction = await getSpenTransaction();
        setUserData(resUserData.data);
        setUserTransaction(resUserTransaction);
        setUserTarget(resUserTarget);
        setUserIncomeTran(resUserIncomeTransaction);
        setUserSpenTran(resUserSpenTransaction);
        setIsLoading(false);
      }
    }
    callApi();
    return () => {
      cleanup = false;
    };
  }, [refreshing]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const openModal = input => {
    let type = input;
    if (type == 1) {
      setIncomeModal(true);
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
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <StatusBar
        backgroundColor={colors.background}
        barStyle={colors.statusbar}
      />
      <WalletCard
        navigation={navigation}
        openModal={openModal}
        userData={userData}
      />
      <StatsCard
        navigation={navigation}
        income={userIncomeTran}
        spending={userSpenTran}
      />
      <TransactionCard
        userTransaction={userTransaction}
        navigation={navigation}
      />
      <SavingGoalsCard usertarget={userTarget} navigation={navigation} />
      <IncomeModal
        data={IncomeModalData}
        showModal={incomeModal}
        closeModal={closeModal}
        navigation={navigation}
      />
      <SpendingModal
        data={SpendingModalData}
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
