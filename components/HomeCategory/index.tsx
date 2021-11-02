import * as React from 'react';


import { Image, FlatList } from "react-native";
import { Text, View } from '../../components/Themed';

import styles from './styles';

//What we exactly expect in this component.
interface HomeCategoryProps {
    category: {
        id: string,
        title: string,
        movies: {
            id: string,
            poster: string
        }[]
    }
}

const HomeCategory = (props: HomeCategoryProps) => {
    const { category } = props;
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{category.title}</Text>
            <FlatList
                data={category.movies}
                renderItem={({item}) => (
                <Image style={styles.image} source={{uri: item.poster}} />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
}

export default HomeCategory;

