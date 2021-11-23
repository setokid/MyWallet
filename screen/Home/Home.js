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
  const [depModal, setDepModal] = useState(false);
  const [withModal, setWithModal] = useState(false);

  const openModal = input => {
    let type = input;
    if (type == 1) {
      setDepModal(true);
      console.log(depModal);
    } else if (type == 2) {
      setWithModal(true);
    }
  };

  const closeModal = () => {
    setDepModal(false);
    setWithModal(false);
  };
  return (
    <ScrollView
      style={[styles.container, {backgroundColor: colors2.background}]}
      nestedScrollEnabled={true}
      showsVerticalScrollIndicator={false}>
      <WalletCard navigation={navigation} openModal={openModal} />
      <StatsCard />
      <TransactionCard />
      <SavingGoalsCard />
      <IncomeModal
        showModal={depModal}
        closeModal={closeModal}
        navigation={navigation}
      />
      <SpendingModal
        showModal={withModal}
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
