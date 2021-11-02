import * as React from 'react';


import { Image, FlatList, Pressable } from "react-native";
import { Text, View } from '../../components/Themed';
import { useNavigation } from '@react-navigation/native';

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
    
    const navigation = useNavigation();

    const onMoviePress = (movie) => {
        navigation.navigate('MovieDetailsScreen', { id: movie.id });
    }
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{category.title}</Text>
            <FlatList
                data={category.movies}
                renderItem={({item}) => (
                    <Pressable
                        onPress={() => onMoviePress(item)}
                    >
                        <Image style={styles.image} source={{uri: item.poster}} />
                    </Pressable>
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
}

export default HomeCategory;

