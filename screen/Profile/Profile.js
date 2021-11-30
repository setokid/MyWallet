import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {useTranslation} from 'react-i18next';
import {useTheme} from 'react-native-paper';

import AvatarSection from '../../components/SectionCard/AvatarSection';
import Theme from '../../components/Pages/Theme';
import ProfileSettings from '../../components/Pages/ProfileSettings';
import Security from '../../components/Pages/Security';
import ChangeUserNameModal from '../../components/Modal/ChangeUserNameModal';
import {getUserData} from '../../components/Store/FetchAPI';

export default function Profile({navigation}) {
  const {t} = useTranslation();
  const {colors2} = useTheme();
  const [changeUserNameModal, setChangeUserNameModal] = useState(false);
  const [userData, setUserData] = useState([]);
  const openModal = input => {
    let type = input;
    if (type == 1) {
      setChangeUserNameModal(true);
    } else if (type == 2) {
    } else if (type == 3) {
    }
  };

  const closeModal = () => {
    setChangeUserNameModal(false);
  };

  useEffect(() => {
    let cleanup = true;
    async function callApi() {
      if (cleanup) {
        let resuserdata = await getUserData();
        setUserData(resuserdata);
      }
    }

    callApi();

    return () => {
      cleanup = false;
    };
  }, []);

  return (
    <ScrollView style={{backgroundColor: colors2.background}}>
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
      <Security />
      <ChangeUserNameModal
        data={userData}
        showModal={changeUserNameModal}
        closeModal={closeModal}
        navigation={navigation}
      />
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
