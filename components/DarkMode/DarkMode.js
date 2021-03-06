import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
} from 'react-native-paper';
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';

const CustomDefaultTheme = {
  ...NavigationDefaultTheme,
  ...PaperDefaultTheme,
  colors: {
    ...NavigationDefaultTheme.colors,
    ...PaperDefaultTheme.colors,
    background: '#ffffff',
    text: '#958d9e',
    value: '#333333',
    header: '#ffffff',
    statusbar: 'dark-content',
  },
  colors2: {
    title: '#958d9e',
    icon: '#A9ABAD',
    background: '#ededf5',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
  },
};

const CustomDarkTheme = {
  ...NavigationDarkTheme,
  ...PaperDarkTheme,
  colors: {
    ...NavigationDarkTheme.colors,
    ...PaperDarkTheme.colors,
    background: '#161129',
    text: '#8f82a5',
    value: '#fff',
    header: '#161129',
    statusbar: 'light-content',
  },
  colors2: {
    title: '#8f82a5',
    icon: '#69587f',
    borderBottomWidth: 0,
    background: '#030108',
    borderBottomColor: '#fff',
  },
};

export {CustomDarkTheme, CustomDefaultTheme};
