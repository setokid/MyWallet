import React, {useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Button,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {List} from 'react-native-paper';

import Icon from 'react-native-vector-icons/Ionicons';

const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;

const FAQ = ({navigation}) => {
  const {t} = useTranslation();
  const {colors2, colors} = useTheme();
  const [expanded, setExpanded] = useState(true);

  const handlePress = () => setExpanded(!expanded);
  return (
    <ScrollView style={{backgroundColor: colors2.background}}>
      <View style={[styles.container]}>
        <View style={[styles.faqView, {backgroundColor: colors.background}]}>
          <Image
            source={require('../../assets/pngaaa.com-1570103.png')}
            style={styles.img}
          />
          <Text style={[styles.title, {color: colors.value}]}>
            {t('Frequently Asked Questions')}
          </Text>
        </View>
        <View
          style={[
            styles.faqView,
            {
              backgroundColor: colors.background,
            },
          ]}>
          <List.Section title="" style={styles.accordion}>
            <List.Accordion
              title={t('What is MyWallet?')}
              titleStyle={[
                styles.accordionTitle,
                {
                  color: colors.value,
                },
              ]}
              style={{
                padding: 0,
              }}
              onPress={handlePress}>
              <Text style={[styles.accordionContent, {color: colors.text}]}>
                {t('MyWallet is financial management app for mobile devices.')}
              </Text>
            </List.Accordion>
            <List.Accordion
              title={t('What is MyWallet?')}
              titleStyle={[
                styles.accordionTitle,
                {
                  color: colors.value,
                },
              ]}
              style={{
                padding: 0,
              }}
              onPress={handlePress}>
              <Text style={[styles.accordionContent, {color: colors.text}]}>
                {t('MyWallet is financial management app for mobile devices.')}
              </Text>
            </List.Accordion>
            <List.Accordion
              title={t('What is MyWallet?')}
              titleStyle={[
                styles.accordionTitle,
                {
                  color: colors.value,
                },
              ]}
              style={{
                padding: 0,
              }}
              onPress={handlePress}>
              <Text style={[styles.accordionContent, {color: colors.text}]}>
                {t('MyWallet is financial management app for mobile devices.')}
              </Text>
            </List.Accordion>
            <List.Accordion
              title={t('What is MyWallet?')}
              titleStyle={[
                styles.accordionTitle,
                {
                  color: colors.value,
                },
              ]}
              style={{
                padding: 0,
              }}
              onPress={handlePress}>
              <Text style={[styles.accordionContent, {color: colors.text}]}>
                {t('MyWallet is financial management app for mobile devices.')}
              </Text>
            </List.Accordion>
          </List.Section>
        </View>
        <View
          style={[
            styles.faqView,
            {
              backgroundColor: colors.background,
            },
          ]}>
          <List.Section title="" style={styles.accordion}>
            <List.Accordion
              title={t('How can i contact you?')}
              titleStyle={[
                styles.accordionTitle,
                {
                  color: colors.value,
                },
              ]}
              style={{
                padding: 0,
              }}
              onPress={handlePress}>
              <Text style={[styles.accordionContent, {color: colors.text}]}>
                {t('You can contact us on ')}{' '}
                <Text
                  style={{color: '#6236FF'}}
                  onPress={() => navigation.navigate('SupportScreen')}>
                  MyWallet support tab.
                </Text>
              </Text>
            </List.Accordion>
            <List.Accordion
              title={t('What is MyWallet?')}
              titleStyle={[
                styles.accordionTitle,
                {
                  color: colors.value,
                },
              ]}
              style={{
                padding: 0,
              }}
              onPress={handlePress}>
              <Text style={[styles.accordionContent, {color: colors.text}]}>
                {t('MyWallet is financial management app for mobile devices.')}
              </Text>
            </List.Accordion>
          </List.Section>
        </View>
        <View
          style={[
            styles.faqView,
            {
              backgroundColor: '#6236FF',
            },
          ]}>
          <View style={styles.titleView}>
            <Text style={styles.title}>{t('Still have question?')}</Text>
            <Text style={[styles.title2, {color: colors.text}]}>
              {t('Feel free to contact us')}
            </Text>
          </View>
          <TouchableOpacity
            style={styles.btnConfirm}
            onPress={() => navigation.navigate('ContactScreen')}>
            <Icon name="mail-open-outline" size={25} color={'#fff'} />
            <Text style={{color: '#fff', padding: 5}}>{t('Contact')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default FAQ;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  faqView: {
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    borderRadius: 10,
    elevation: 4,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    height: 200,
    width: 200,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
  },
  accordionTitle: {
    fontWeight: '400',
    fontSize: 15,
    padding: 5,
  },
  accordionContent: {
    paddingRight: 40,
    paddingLeft: 16,
  },
  accordion: {
    width: screenWidth - 41,
    marginTop: -10,
  },
  titleView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
    padding: 5,
  },
  title2: {
    fontSize: 15,
    padding: 5,
    fontWeight: '400',
  },
  btnConfirm: {
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333',
    width: '50%',
    padding: 5,
    marginTop: 20,
  },
});
