import { Video } from 'expo-av';
import { Playback } from 'expo-av/build/AV';
import * as React from 'react';
import { Text, View } from 'react-native';
import { Episode } from '../../types';

import styles from './styles';

interface VideoPlayerProps {
    episode: Episode,
}

const VideoPlayer = (props: VideoPlayerProps) => {

    const { episode } = props;

    const [status, setStatus] = React.useState({})
    const video = React.useRef<Playback>(null);

    React.useEffect(() => {
        if (!video) {
            return;
        }
        (async () => {
            await video?.current?.unloadAsync();
            await video?.current?.loadAsync(
                { uri: episode.video },
                {},
                false
            );
        })();
    }, [episode]);

    /*const handleVideoRef = (component: Playback) => {
        const playbackObject = component;
 
        const source = {
            uri: episode.video
        }

        const initialStatus = {

        }

        playbackObject.loadAsync(source, initialStatus, false);
    }*/

    return (
        <Video
            ref={video}
            style={styles.video}
            source={{uri: episode.video}}
            posterSource={{uri: episode.poster}}
            posterStyle={{resizeMode: "cover"}}
            usePoster={true}
            useNativeControls
            resizeMode="contain"
            onPlaybackStatusUpdate={status => setStatus(() => status)}
        />
    );
};

export default VideoPlayer;
