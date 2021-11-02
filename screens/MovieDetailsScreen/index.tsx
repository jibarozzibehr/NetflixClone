import React, { useState } from "react";
import { Image, Pressable, FlatList } from "react-native";
import { View, Text } from '../../components/Themed';
import EpisodeItem from './../../components/EpisodeItem'

import styles from "./styles";

import movie from "../../assets/data/movie";

import { MaterialIcons, Entypo, AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";

const firstSeason = movie.seasons.items[0];
const firstEpisode = firstSeason.episodes.items[0];

const MovieDetailsScreen = () => {

    const [currentSeason, setCurrentSeason] = useState(firstSeason);

    const seasonNames = movie.seasons.items.map(season => season.name);

    return (
        <View>
            <Image
                source={{uri: firstEpisode.poster}}
                style={styles.image}
            />


            

            <FlatList
                data={currentSeason.episodes.items}
                renderItem= {({item}) => <EpisodeItem episode={item} />}
                style={{marginBottom: 100}}
                ListHeaderComponent={(
                    <View style={{padding: 12}}>
                        <Text style={styles.title}>{movie.title}</Text>

                        <View style={{flexDirection: "row"}}>
                            <Text style={styles.match}>98% match</Text>
                            <Text style={styles.year}>{movie.year}</Text>

                            <View style={styles.ageContainer}>
                                <Text style={styles.age}>12+</Text>
                            </View>
                            <Text style={styles.year}>{movie.numberOfSeasons} Seasons</Text>
                            <MaterialIcons name="hd" size={24} color="white" />
                        </View>

                        {/* Play button */}
                        <Pressable
                            onPress={() => { console.warn("Play")}}
                            style={styles.playButton}
                        >
                            <Text style={styles.playButtonText}>
                                <Entypo name="controller-play" size={16} color="black" />
                                Play
                            </Text>
                        </Pressable>

                        {/* Download button */}
                        <Pressable
                            onPress={() => { console.warn("Download")}}
                            style={styles.downloadButton}
                        >
                            <Text style={styles.downloadButtonText}>
                                <AntDesign name="download" size={16} color="white" style={{marginRight: 5}}/>
                                Download
                            </Text>
                        </Pressable>

                        <Text style={{marginVertical: 10}}>{movie.plot}</Text>
                        <Text style={styles.year}>Cast: {movie.cast}</Text>
                        <Text style={styles.year}>Creator: {movie.creator}</Text>

                        {/* Row with icon buttons */}
                        <View style={{flexDirection: "row", marginTop: 20}}>
                            <View style={{alignItems: "center", marginHorizontal: 20}}>
                                <AntDesign name="plus" size={24} color="white" />
                                <Text style={{color: "darkgrey", marginTop: 5}}>My List</Text>
                            </View>

                            <View style={{alignItems: "center", marginHorizontal: 20}}>
                                <Feather name="thumbs-up" size={24} color="white" />
                                <Text style={{color: "darkgrey", marginTop: 5}}>Rate</Text>
                            </View>

                            <View style={{alignItems: "center", marginHorizontal: 20}}>
                                <Ionicons name="share-social" size={24} color="white" />
                                <Text style={{color: "darkgrey", marginTop: 5}}>Share</Text>
                            </View>
                        </View>

                        <Picker
                            style={{marginTop: 20, width: 100, color: "white", backgroundColor: "black", borderStyle: "solid", borderColor: "black"}}
                            selectedValue={currentSeason.name}
                            onValueChange={(itemValue, itemIndex) => {
                                setCurrentSeason(movie.seasons.items[itemIndex]);
                            }}
                            dropdownIconColor="white"
                        >
                            {seasonNames.map(seasonName => (
                                <Picker.Item label={seasonName} value={seasonName} key={seasonName} />
                            ))}
                        </Picker>

                    </View>
                )}
            />

        </View>
    )
}

export default MovieDetailsScreen;