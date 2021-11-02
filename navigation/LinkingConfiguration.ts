/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { HomeStackParamList } from '../types';

const linking: LinkingOptions<HomeStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      HomeScreen: {
        screens: {
          Home: {
            screens: {
              HomeScreen: 'one',
            },
          },
          Coming_Soon: {
            screens: {
              TabTwoScreen: 'two',
            },
          },
        },
      },
    },
  },
};

export default linking;
