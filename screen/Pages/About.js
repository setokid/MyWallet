import React from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Button,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import {useTheme} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';

import Icon from 'react-native-vector-icons/Ionicons';

const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;

const images = [
  'https://source.unsplash.com/1024x768/?nature',
  'https://source.unsplash.com/1024x768/?water',
  'https://source.unsplash.com/1024x768/?girl',
  'https://source.unsplash.com/1024x768/?tree',
];

const About = ({navigation}) => {
  const {t} = useTranslation();
  const {colors2, colors} = useTheme();
  return (
    <ScrollView>
      <View style={[styles.container, {backgroundColor: colors2.background}]}>
        <View style={styles.imageSlider}>
          <SliderBox
            images={images}
            sliderBoxHeight={screenHeight / 4}
            onCurrentImagePressed={index =>
              console.warn(`image ${index} pressed`)
            }
            parentWidth={screenWidth}
          />
        </View>
        <View
          style={[styles.contentView, {backgroundColor: colors.background}]}>
          <View>
            <Text style={[styles.title, {color: colors.value}]}>
              {t('About us')}
            </Text>
            <Text style={[styles.content, {color: colors.text}]}>
              {t('Content')}
            </Text>
          </View>
        </View>
        <View
          style={[styles.contentView, {backgroundColor: colors.background}]}>
          <View>
            <Text style={[styles.title, {color: colors.value}]}>
              {t('About our products')}
            </Text>
            <Text style={[styles.content, {color: colors.text}]}>
              {t('Content')}
            </Text>
          </View>
        </View>
        <View
          style={[styles.contentView, {backgroundColor: colors.background}]}>
          <View>
            <Text style={[styles.title, {color: colors.value}]}>
              {t('Have a Question?')}
            </Text>
            <Text style={[styles.content, {color: colors.text}]}>
              {t(
                'Feel free to contact us with any problems. We will get back to you as soon as possible.',
              )}
            </Text>
            <TouchableOpacity
              style={styles.btnConfirm}
              onPress={() => navigation.navigate('ContactScreen')}>
              <Icon name="mail-open-outline" size={25} color={'#fff'} />
              <Text style={{color: '#fff', padding: 5}}>{t('Contact')}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentView: {
    padding: 20,
    margin: 16,
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
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    paddingBottom: 5,
  },
  content: {paddingBottom: 10},
  btnConfirm: {
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6236FF',
    width: '50%',
    padding: 5,
  },
});
