import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {ProgressBar, Colors} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import SavingGoalsData from '../../SavingGoalsData';

function SavingGoalsView(props) {
  const progress = (props.item.current * 100) / props.item.target / 100;
  const percent = (progress * 100).toFixed(1);
  const {colors} = useTheme();
  return (
    <View>
      <View style={[styles.detailsCard, {backgroundColor: colors.background}]}>
        <View style={styles.savingGoalsDetails}>
          <View>
            <Text style={[styles.detail, {color: colors.value}]}>
              {props.item.detail}
            </Text>
            <Text style={[styles.type, {color: colors.text}]}>
              {props.item.type}
            </Text>
          </View>
          <View>
            <Text style={[styles.type, {color: colors.value}]}>
              {props.item.target}
            </Text>
          </View>
        </View>
        <View style={styles.progress}>
          <ProgressBar
            style={styles.progressBar}
            progress={progress}
            color={'#6236FF'}
          />
          <Text style={[styles.percentText, {color: colors.value}]}>
            {percent}%
          </Text>
        </View>
      </View>
    </View>
  );
}

const screenHeight = Dimensions.get('screen').height;

const SavingGoals = ({navigation}) => {
  const {t} = useTranslation();
  const [savingGoals] = useState(SavingGoalsData);
  const {colors, colors2} = useTheme();
  return (
    <ScrollView style={{backgroundColor: colors2.background}}>
      <View style={[styles.section, {backgroundColor: colors2.background}]}>
        <View style={styles.savingGoalsHeading}>
          <View style={styles.header}>
            <Text style={[styles.savingGoalsTitle, {color: colors.value}]}>
              {t('Saving Goals')}
            </Text>
          </View>
          <View>
            {/* <FlatList
            data={savingGoals}
            showsVerticalScrollIndicator={false}
            renderItem={({item, index}) => {
              return <SavingGoalsDetails item={item} key={index} />;
            }}
          /> */}
            {savingGoals.map((item, index) => {
              return <SavingGoalsView item={item} key={index} />;
            })}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default SavingGoals;

const styles = StyleSheet.create({
  section: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  savingGoalsHeading: {
    flex: 1,
    paddingTop: 32,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  savingGoalsTitle: {
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
    paddingTop: 20,
    paddingRight: 24,
    paddingBottom: 20,
    paddingLeft: 24,
    flex: 1,
  },
  savingGoalsDetails: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  detail: {fontWeight: '500', color: '#27173E', fontSize: 16},
  type: {fontWeight: '500', color: '#958d9e', fontSize: 11},
  progress: {
    position: 'relative',
  },
  percentText: {
    position: 'absolute',
    marginLeft: '45%',
    fontWeight: '700',
  },
  progressBar: {
    height: 20,
    borderRadius: 10,
  },
});
