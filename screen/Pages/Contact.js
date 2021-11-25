import React, {useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';

import Icon from 'react-native-vector-icons/FontAwesome';

const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;

const Contact = () => {
  const {t} = useTranslation();
  const {colors2, colors} = useTheme();
  const [text, onChangeText] = useState(null);
  return (
    <ScrollView style={{backgroundColor: colors2.background}}>
      <View style={[styles.container]}>
        <View style={[styles.viewCard, {backgroundColor: colors.background}]}>
          <View style={styles.contactForm}>
            <View style={styles.titleView}>
              <Text style={styles.title}>{t('Get in Touch')}</Text>
              <Text style={[styles.title2, {color: colors.text}]}>
                {t('Fill the form to contact us')}
              </Text>
            </View>
            <View>
              <TextInput
                style={[styles.inputName]}
                onChangeText={onChangeText}
                value={text}
                placeholder={t('Your name')}
                placeholderTextColor={colors.text}
                keyboardType="default"
                multiline={true}
              />
              <TextInput
                style={[styles.inputEmail]}
                onChangeText={onChangeText}
                value={text}
                placeholder={t('E-mail')}
                placeholderTextColor={colors.text}
                keyboardType="default"
                multiline={true}
              />
              <TextInput
                style={[styles.inputMessage]}
                onChangeText={onChangeText}
                value={text}
                placeholder={t('Message')}
                placeholderTextColor={colors.text}
                keyboardType="default"
                multiline={true}
              />
              <TouchableOpacity style={styles.btnSend}>
                <Text style={{fontWeight: '500', color: '#fff'}}>
                  {t('Submit')}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={[styles.viewCard, {backgroundColor: colors.background}]}>
          <View style={styles.titleView}>
            <Text style={styles.title}>{t('Our Address')}</Text>
            <Text style={[styles.title2, {color: colors.text}]}>
              {t('Lạc Hồng University')}
            </Text>
          </View>
        </View>
        <View style={[styles.viewCard, {backgroundColor: colors.background}]}>
          <View style={styles.titleView}>
            <Text style={styles.title}>{t('Social Profiles')}</Text>
          </View>
          <View style={styles.iconSocial}>
            <TouchableOpacity>
              <Icon
                style={{padding: 5}}
                name="facebook-square"
                size={35}
                color={'#39579b'}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon
                style={{padding: 5}}
                name="twitter-square"
                size={35}
                color={'#049ff6'}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon
                style={{padding: 5}}
                name="instagram"
                size={35}
                color={'#df237b'}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon
                style={{padding: 5}}
                name="twitch"
                size={35}
                color={'#923cff'}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon
                style={{padding: 5}}
                name="github-square"
                size={35}
                color={colors.value}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Contact;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  viewCard: {
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
  },
  titleView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#6236ff',
    fontSize: 20,
    fontWeight: '700',
    padding: 5,
  },
  title2: {
    fontSize: 15,
    padding: 5,
  },
  inputName: {
    borderBottomColor: '#DCDCE9',
    borderBottomWidth: 1,
    marginTop: 10,
    marginBottom: 10,
  },
  inputEmail: {
    borderBottomColor: '#DCDCE9',
    borderBottomWidth: 1,
    marginTop: 10,
    marginBottom: 10,
  },
  inputMessage: {
    borderBottomColor: '#DCDCE9',
    borderBottomWidth: 1,
    marginTop: 10,
    marginBottom: 20,
    height: 100,
    textAlignVertical: 'top',
  },
  btnSend: {
    backgroundColor: '#6236FF',
    height: 52,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  iconSocial: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
