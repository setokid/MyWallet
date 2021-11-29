import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {
  useTheme,
  Switch,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
} from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {AuthContext} from '../Store/Context';
import {useTranslation} from 'react-i18next';
import {getUserData} from '../Store/FetchAPI';

import AsyncStorage from '@react-native-async-storage/async-storage';
import NumberFormat from 'react-number-format';

export function DrawerContent({navigation, props}) {
  const paperTheme = useTheme();
  const {colors, colors2} = useTheme();

  const [isEnabledEn, setIsEnabledEn] = useState(true);
  const [isEnabledVn, setIsEnabledVn] = useState(false);
  const [userData, setUserData] = useState([]);

  const onOff = () => {
    if (isEnabledEn == isEnabledEn) {
      setIsEnabledEn(isEnabledEn => !isEnabledEn);
      setIsEnabledVn(isEnabledVn => !isEnabledVn);
    } else if (isEnabledVn == isEnabledVn) {
      setIsEnabledVn(isEnabledVn => !isEnabledVn);
      setIsEnabledEn(isEnabledEn => !isEnabledEn);
    }
  };
  useEffect(() => {
    let cleanup = true;
    async function callApi() {
      if (cleanup) {
        let resdata = await getUserData();
        setUserData(resdata);
      }
    }

    callApi();

    return () => {
      cleanup = false;
    };
  }, []);

  const {signOut, toggleTheme} = React.useContext(AuthContext);

  const {t, i18n} = useTranslation();

  const setLanguage = code => {
    return i18n.changeLanguage(code);
  };
  return (
    <View style={{flex: 1, backgroundColor: colors.background}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={styles.userInfo}>
              <Avatar.Image
                source={require('../../assets/avt.jpg')}
                size={50}
              />
              <View style={styles.userInfoText}>
                <Title style={[styles.title, {color: colors.value}]}>
                  {userData.fullName != null ? userData.fullName : 'UserName'}
                </Title>
                <Caption style={[styles.caption, {flexShrink: 1}]}>
                  {userData.email}
                </Caption>
              </View>
            </View>
          </View>
          <View style={styles.blanceRow}>
            <View>
              <Paragraph style={[styles.paragraph, styles.blanceCaption]}>
                {t('Total Blance')}
              </Paragraph>
              <Caption style={styles.moneyCaption}>
                <NumberFormat
                  value={userData.balance}
                  displayType={'text'}
                  thousandSeparator={true}
                  renderText={(value, props) => (
                    <Text {...props}>
                      {value} {userData.currency}
                    </Text>
                  )}
                />
              </Caption>
            </View>
          </View>

          <Drawer.Section
            style={[styles.bottomDrawerSection, {color: colors.text}]}
            title="Menu">
            <DrawerItem
              labelStyle={{color: colors.value}}
              icon={({color, size}) => (
                <View style={styles.icon}>
                  <Icon name="home-outline" color={'#fff'} size={size} />
                </View>
              )}
              label={t('Home')}
              onPress={() => {
                navigation.navigate('Home');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <View style={styles.icon}>
                  <Icon name="view-list-outline" color={'#fff'} size={size} />
                </View>
              )}
              labelStyle={{color: colors.value}}
              label={t('Pages')}
              onPress={() => {
                navigation.navigate('Pages');
              }}
            />
            {/* <DrawerItem
              icon={({color, size}) => (
                <Icon
                  name="account-settings-outline"
                  color={color}
                  size={size}
                />
              )}
              label={t('Profile')}
              onPress={() => {
                navigation.navigate('Profile');
              }}
            /> */}
            <DrawerItem
              labelStyle={{color: colors.value}}
              icon={({color, size}) => (
                <View style={styles.icon}>
                  <Icon
                    name="account-check-outline"
                    color={'#fff'}
                    size={size}
                  />
                </View>
              )}
              label={t('Support')}
              onPress={() => {
                navigation.navigate('SupportScreen');
              }}
            />
          </Drawer.Section>
          <Drawer.Section title="Theme" style={{color: colors.text}}>
            <TouchableRipple
              onPress={() => {
                toggleTheme();
              }}>
              <View style={styles.preference}>
                <Text style={{color: colors.value}}>Dark Mode</Text>
                <View pointerEvents="none">
                  <Switch
                    value={paperTheme.dark}
                    trackColor={{false: '#767577', true: '#6236FF'}}
                    thumbColor={'#6236FF'}
                  />
                </View>
              </View>
            </TouchableRipple>
          </Drawer.Section>
          <Drawer.Section title={t('Language')} style={{color: colors.text}}>
            <TouchableRipple
              onPress={() => {
                setLanguage('en'), onOff();
              }}>
              <View style={styles.preference}>
                <Text style={{color: colors.value}}>{t('English')}</Text>
                <View pointerEvents="none">
                  <Switch
                    value={isEnabledEn}
                    trackColor={{false: '#767577', true: '#6236FF'}}
                    thumbColor={'#6236FF'}
                  />
                </View>
              </View>
            </TouchableRipple>
            <TouchableRipple
              onPress={() => {
                setLanguage('vn'), onOff();
              }}>
              <View style={styles.preference}>
                <Text style={{color: colors.value}}>{t('Vietnamese')}</Text>
                <View pointerEvents="none">
                  <Switch
                    value={isEnabledVn}
                    trackColor={{false: '#767577', true: '#6236FF'}}
                    thumbColor={'#6236FF'}
                  />
                </View>
              </View>
            </TouchableRipple>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <Drawer.Item
          labelStyle={{color: colors.value}}
          icon={({color, size}) => (
            <View style={styles.icon}>
              <Icon name="exit-to-app" color={'#fff'} size={size} />
            </View>
          )}
          label={t('Sign Out')}
          onPress={() => {
            signOut();
          }}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
    color: '#333333',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    color: '#333333',
  },
  blanceCaption: {
    fontSize: 20,
    lineHeight: 20,
    color: 'gray',
  },
  moneyCaption: {
    fontSize: 25,
    lineHeight: 25,
    color: '#fff',
    paddingTop: 7,
  },
  blanceRow: {
    padding: 20,
    marginTop: 20,
    flexDirection: 'column',
    alignItems: 'flex-start',
    backgroundColor: '#6236FF',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  userInfo: {
    flexDirection: 'row',
    marginTop: 15,
  },
  userInfoText: {
    paddingLeft: 15,
    flexDirection: 'column',
    width: 'auto',
  },
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6236FF',
    width: 36,
    height: 36,
    borderRadius: 100,
  },
});
