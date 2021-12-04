import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {ProgressBar, Colors} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import NumberFormat from 'react-number-format';

function SavingGoalsDetails({item}) {
  const progress = (item.current * 100) / item.total / 100;
  const percent = (progress * 100).toFixed(1);
  const {colors} = useTheme();

  const [date, setDate] = useState(item.date_end);

  const today = date.slice(0, 10);
  const nDate =
    today.slice(8, 10) + '/' + today.slice(5, 7) + '/' + today.slice(0, 4);
  return (
    <View>
      <View style={[styles.detailsCard, {backgroundColor: colors.background}]}>
        <View style={styles.savingGoalsDetails}>
          <View>
            <Text style={[styles.detail, {color: colors.value}]}>
              {item.description}
            </Text>
            <Text style={[styles.type, {color: colors.text}]}>{item.name}</Text>
          </View>
          <View style={styles.targetView}>
            <NumberFormat
              value={item.total}
              displayType={'text'}
              thousandSeparator={true}
              renderText={(value, props) => (
                <View>
                  <Text style={[styles.type, {color: colors.value}]} {...props}>
                    {value} {item.currency}
                  </Text>
                  <Text
                    style={[
                      styles.type,
                      {
                        color: colors.value,
                        textAlign: 'right',
                        fontSize: 10,
                      },
                    ]}>
                    End: {nDate}
                  </Text>
                </View>
              )}
            />
          </View>
        </View>
        <View style={styles.progress}>
          <ProgressBar
            style={styles.progressBar}
            progress={progress}
            color={'#6236FF'}
          />
          <Text style={[styles.percentText, {color: colors.value}]}>
            {percent} %
          </Text>
        </View>
      </View>
    </View>
  );
}

const SavingGoalsCard = ({navigation, usertarget}) => {
  const {t} = useTranslation();
  const {colors} = useTheme();

  return (
    <View style={styles.section}>
      <View style={styles.savingGoalsHeading}>
        <View style={styles.header}>
          <Text style={[styles.savingGoalsTitle, {color: colors.value}]}>
            {t('Saving Goals')}
          </Text>
          <TouchableOpacity
            activeOpacity="0.5"
            onPress={() => navigation.navigate('SavingGoalsScreen')}>
            <Text style={styles.viewAll}>{t('View All')}</Text>
          </TouchableOpacity>
        </View>
        {usertarget != null ? (
          <FlatList
            scrollEnabled={false}
            data={usertarget.slice(0, 3)}
            showsVerticalScrollIndicator={false}
            renderItem={({item, index}) => {
              return <SavingGoalsDetails item={item} key={index} />;
            }}
          />
        ) : (
          <View>
            <Text>Khong có data</Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default SavingGoalsCard;

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
  targetView: {
    flexDirection: 'column',
  },
});
