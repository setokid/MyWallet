import React, {useState, useEffect, useCallback} from 'react';
import {View, Text, ScrollView, StyleSheet, RefreshControl} from 'react-native';
import {useTranslation} from 'react-i18next';
import {useTheme} from 'react-native-paper';

import AvatarSection from '../../components/SectionCard/AvatarSection';
import Theme from '../../components/Pages/Theme';
import ProfileSettings from '../../components/Pages/ProfileSettings';
import Security from '../../components/Pages/Security';
import ChangeUserNameModal from '../../components/Modal/ChangeUserNameModal';
import ChangePassWordModal from '../../components/Modal/ChangePassWordModal';
import {getUserData} from '../../components/Store/FetchAPI';

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

export default function Profile({navigation}) {
  const {t} = useTranslation();
  const {colors2} = useTheme();
  const [changeUserNameModal, setChangeUserNameModal] = useState(false);
  const [changePassWordModal, setChangePassWordModal] = useState(false);
  const [userData, setUserData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const openModal = input => {
    let type = input;
    if (type == 1) {
      setChangeUserNameModal(true);
    } else if (type == 2) {
      setChangePassWordModal(true);
    } else if (type == 3) {
    }
  };

  const closeModal = () => {
    setChangeUserNameModal(false);
    setChangePassWordModal(false);
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  useEffect(() => {
    let cleanup = true;
    async function callApi() {
      if (cleanup) {
        let resuserdata = await getUserData();
        setUserData(resuserdata.data);
        console.log(resuserdata.data);
      }
    }

    callApi();

    return () => {
      cleanup = false;
    };
  }, [refreshing]);

  return (
    <ScrollView
      style={{backgroundColor: colors2.background}}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <ChangeUserNameModal
        data={userData}
        showModal={changeUserNameModal}
        closeModal={closeModal}
        navigation={navigation}
      />
      <ChangePassWoardModal
        data={userData}
        showModal={changePassWordModal}
        closeModal={closeModal}
        navigation={navigation}
      />
      <AvatarSection />
      <View style={[styles.title]}>
        <Text style={{fontSize: 16, fontWeight: '500', color: colors2.title}}>
          {t('App Pages')}
        </Text>
      </View>
      <Theme />
      <View style={[styles.title]}>
        <Text style={{fontSize: 16, fontWeight: '500', color: colors2.title}}>
          {t('Profile Setting')}
        </Text>
      </View>
      <ProfileSettings navigation={navigation} openModal={openModal} />
      <View style={[styles.title]}>
        <Text style={{fontSize: 16, fontWeight: '500', color: colors2.title}}>
          {t('Security')}
        </Text>
      </View>
      <Security navigation={navigation} openModal={openModal} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ededf5',
    paddingBottom: 16,
  },
  title: {
    color: '#958d9e',
    paddingTop: 7,
    paddingRight: 16,
    paddingBottom: 16,
    paddingLeft: 16,
    marginTop: 8,
    fontWeight: '500',
  },
});
