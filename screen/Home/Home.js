import React, {useState} from 'react';

import {ScrollView, StyleSheet} from 'react-native';
import {useTheme} from '@react-navigation/native';

import WalletCard from '../../components/SectionCard/WalletCard';
import StatsCard from '../../components/SectionCard/StatsCard';
import TransactionCard from '../../components/SectionCard/TransactionCard';
import SavingGoalsCard from '../../components/SectionCard/SavingGoalsCard';
import DepositModal from '../../components/Modal/DepositModal';
import WithdrawModal from '../../components/Modal/WithdrawModal';

console.disableYellowBox = true;

const Home = ({navigation}) => {
  const {colors2} = useTheme();
  const [depModal, setDepModal] = useState(false);
  const [withModal, setWithModal] = useState(false);
  const [sendModal, setSendModal] = useState(false);

  const openModal = input => {
    let type = input;
    console.log(type);
    if (type == 1) {
      setDepModal(true);
    } else if (type == 2) {
      setWithModal(true);
    } else if (type == 3) {
      setSendModal(true);
    }
  };

  const closeModal = () => {
    setDepModal(false);
    setWithModal(false);
    setSendModal(false);
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
      <DepositModal showModal={depModal} closeModal={closeModal} />
      <WithdrawModal showModal={withModal} closeModal={closeModal} />
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
