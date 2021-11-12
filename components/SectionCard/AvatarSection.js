import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Avatar} from 'react-native-paper';

import Icon from 'react-native-vector-icons/Ionicons';

function AvatarSection() {
  return (
    <View style={styles.container}>
      <View style={styles.avatarSection}>
        <View>
          <Avatar.Image
            style={styles.img}
            size={100}
            source={require('../../assets/avt.jpg')}
          />
          <TouchableOpacity style={styles.btn}>
            <Icon name="camera-outline" color={'#fff'} size={20} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default AvatarSection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24,
  },
  avatarSection: {
    position: 'relative',
  },
  img: {
    overflow: 'hidden',
    borderWidth: 5,
    borderColor: '#fff',
    backgroundColor: '#fff',
  },
  btn: {
    backgroundColor: '#6236ff',
    width: 32,
    height: 32,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
});
