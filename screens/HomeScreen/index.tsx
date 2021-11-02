import * as React from 'react';


import { Image, FlatList } from "react-native";
import { View, Text } from '../../components/Themed';

import styles from './styles';
import categories from '../../assets/data/categories';
import HomeCategory from '../../components/HomeCategory';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* List of categories. */}
      <FlatList
        data={categories.items}
        renderItem={({item}) => <HomeCategory category={item}/>}
      />
    </View>
  );
}

export default HomeScreen;

