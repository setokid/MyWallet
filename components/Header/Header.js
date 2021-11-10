import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  StatusBar,
} from 'react-native';
import {ThemeConsumer, useTheme} from 'react-native-elements';

export default function Header() {
  const {colors} = useTheme();
  const theme = useTheme();
  return (
    <SafeAreaView style={styles.safearena}>
      <ScrollView style={styles.scrollview}>
        <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />
        <View style={styles.view}>
          <Text style={styles.text}>My Wallet</Text>
          <ImageBackground
            source={require('../../assets/avt.jpg')}
            imageStyle={{borderRadius: 25}}
            style={styles.image}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safearena: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  image: {
    width: 35,
    height: 35,
  },
  text: {
    fontSize: 16,
    fontFamily: 'Roboto-Medium',
  },
  view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    backgroundColor: 'gray',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    height: 200,
  },
  scrollview: {paddingBottom: 80},
});
