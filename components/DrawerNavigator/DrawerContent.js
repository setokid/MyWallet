import React, {useState} from 'react';
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

import {AuthContext} from '../Service/Context';
import {useTranslation} from 'react-i18next';

const LANGUAGES = [{code: 'en'}, {code: 'vn'}];

export function DrawerContent({navigation, props}) {
  const paperTheme = useTheme();

  const [isEnabledEn, setIsEnabledEn] = useState(true);
  const [isEnabledVn, setIsEnabledVn] = useState(false);

  const onOff = () => {
    if (isEnabledEn == isEnabledEn) {
      setIsEnabledEn(isEnabledEn => !isEnabledEn);
      setIsEnabledVn(isEnabledVn => !isEnabledVn);
    } else if (isEnabledVn == isEnabledVn) {
      setIsEnabledVn(isEnabledVn => !isEnabledVn);
      setIsEnabledEn(isEnabledEn => !isEnabledEn);
    }
  };

  const {signOut, toggleTheme} = React.useContext(AuthContext);

  const {t, i18n} = useTranslation();

  const setLanguage = code => {
    return i18n.changeLanguage(code);
  };
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={styles.userInfo}>
              <Avatar.Image
                source={require('../../assets/avt.jpg')}
                size={50}
              />
              <View style={styles.userInfoText}>
                <Title style={[styles.title]}>Dũng Trần</Title>
                <Caption style={styles.caption}>
                  dungtran232000@gmail.com
                </Caption>
              </View>
            </View>
          </View>
          <View style={styles.blanceRow}>
            <View>
              <Paragraph style={[styles.paragraph, styles.blanceCaption]}>
                {t('Total Blance')}
              </Paragraph>
              <Caption style={styles.moneyCaption}>100.000.000 đ</Caption>
            </View>
          </View>

          <Drawer.Section style={styles.bottomDrawerSection} title="Menu">
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="home-outline" color={color} size={size} />
              )}
              label={t('Home')}
              onPress={() => {
                navigation.navigate('Home');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="view-list-outline" color={color} size={size} />
              )}
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
              icon={({color, size}) => (
                <Icon name="account-check-outline" color={color} size={size} />
              )}
              label={t('Support')}
              onPress={() => {
                navigation.navigate('SupportScreen');
              }}
            />
          </Drawer.Section>
          <Drawer.Section title="Theme">
            <TouchableRipple
              onPress={() => {
                toggleTheme();
              }}>
              <View style={styles.preference}>
                <Text>Dark Mode</Text>
                <View pointerEvents="none">
                  <Switch value={paperTheme.dark} />
                </View>
              </View>
            </TouchableRipple>
          </Drawer.Section>
          <Drawer.Section title={t('Language')}>
            <TouchableRipple
              onPress={() => {
                setLanguage('en'), onOff();
              }}>
              <View style={styles.preference}>
                <Text>{t('English')}</Text>
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
                <Text>{t('Vietnamese')}</Text>
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
          icon={({color, size}) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Sign Out"
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
    marginLeft: 15,
    flexDirection: 'column',
  },
});
