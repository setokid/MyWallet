import React, {useState, useEffect} from 'react';

import {
  ScrollView,
  StyleSheet,
  View,
  ActivityIndicator,
  Dimensions,
  VirtualizedList,
} from 'react-native';
import {useTheme} from '@react-navigation/native';

import WalletCard from '../../components/SectionCard/WalletCard';
import StatsCard from '../../components/SectionCard/StatsCard';
import TransactionCard from '../../components/SectionCard/TransactionCard';
import SavingGoalsCard from '../../components/SectionCard/SavingGoalsCard';
import IncomeModal from '../../components/Modal/IncomeModal';
import SpendingModal from '../../components/Modal/SpendingModal';
import NewWalletModal from '../../components/Modal/NewWalletModal';

import {
  getUserData,
  getTransaction,
  getTarget,
  getModal,
} from '../../components/Store/FetchAPI';

console.disableYellowBox = true;

const heightScreen = Dimensions.get('screen').height;

const Home = ({navigation}) => {
  const {colors2} = useTheme();
  const [incomeModal, setIncomeModal] = useState(false);
  const [spendingModal, setSpendingModal] = useState(false);
  const [newWalletModal, setNewWalletModal] = useState(false);
  const [userData, setUserData] = useState([]);
  const [userTransaction, setUserTransaction] = useState([]);
  const [userTarget, setUserTarget] = useState([]);
  const [modal, setModal] = useState([]);

  useEffect(() => {
    let cleanup = true;
    async function callApi() {
      if (cleanup) {
        let resuserdata = await getUserData();
        let resusertransaction = await getTransaction();
        let resuertarget = await getTarget();
        let resmodal = await getModal();
        setUserData(resuserdata);
        setUserTransaction(resusertransaction);
        setUserTarget(resuertarget);
        setModal(resmodal);
      }
    }

    callApi();

    return () => {
      cleanup = false;
    };
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
      showsVerticalScrollIndicator={false}>
      <WalletCard
        navigation={navigation}
        openModal={openModal}
        userData={userData}
      />
      <StatsCard userData1={userData} navigation={navigation} />
      <TransactionCard
        userTransaction={userTransaction}
        navigation={navigation}
      />
      <SavingGoalsCard usertarget={userTarget} navigation={navigation} />
      <IncomeModal
        data={modal}
        showModal={incomeModal}
        closeModal={closeModal}
        navigation={navigation}
      />
      <SpendingModal
        data={modal}
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
