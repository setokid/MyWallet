import React, {useState, useEffect} from 'react';

import {ScrollView, StyleSheet, useIsFocused} from 'react-native';
import {useTheme} from '@react-navigation/native';

import WalletCard from '../../components/SectionCard/WalletCard';
import StatsCard from '../../components/SectionCard/StatsCard';
import TransactionCard from '../../components/SectionCard/TransactionCard';
import SavingGoalsCard from '../../components/SectionCard/SavingGoalsCard';
import IncomeModal from '../../components/Modal/IncomeModal';
import SpendingModal from '../../components/Modal/SpendingModal';

console.disableYellowBox = true;

const Home = ({navigation}) => {
  const {colors2} = useTheme();
  const [incomeModal, setIncomeModal] = useState(false);
  const [spendingModal, setSpendingModal] = useState(false);

  const openModal = input => {
    let type = input;
    if (type == 1) {
      setIncomeModal(true);
      console.log(incomeModal);
    } else if (type == 2) {
      setSpendingModal(true);
    }
  };

  const closeModal = () => {
    setIncomeModal(false);
    setSpendingModal(false);
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
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
