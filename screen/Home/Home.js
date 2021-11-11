import React, {Component} from 'react';

import {ScrollView, StyleSheet} from 'react-native';
import {useTheme} from '@react-navigation/native';

import WalletCard from '../../components/SectionCard/WalletCard';
import StatsCard from '../../components/SectionCard/StatsCard';
import TransactionCard from '../../components/SectionCard/TransactionCard';
import SavingGoalsCard from '../../components/SectionCard/SavingGoalsCard';

console.disableYellowBox = true;

const Home = () => {
  const {colors2} = useTheme();
  return (
    <ScrollView
      style={[styles.container, {backgroundColor: colors2.background}]}
      nestedScrollEnabled={true}
      showsVerticalScrollIndicator={false}>
      <WalletCard />
      <StatsCard />
      <TransactionCard />
      <SavingGoalsCard />
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
