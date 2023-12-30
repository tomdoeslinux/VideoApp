import React, {useState} from 'react';
import {Button, Text, useWindowDimensions, View} from 'react-native';
import Video from 'react-native-video'

function App() {
    const { width, height } = useWindowDimensions()

    const isPortrait = height > width

    const videos = [require('./videos/manhattan.mp4'), require('./videos/flower-valley.mp4')]

    const [currentVideo, setCurrentVideo] = useState(videos[1])

    if (isPortrait) {
        return <Text style={{ color: 'red' }}>Please change orientation to landscape</Text>
    }

    return (
        <View style={{
            position: 'relative',
            width: '100%',
            height: '100%'
        }}>
            <Video style={{ width: '100%', height: '100%' }} resizeMode='cover' source={currentVideo} playInBackground={true} />

            <View style={{
                gap: 10,
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                marginTop: 'auto',
                bottom: 0,
                marginBottom: 32
            }}>
                <Button title="EST"  />
                <Button title="RUS" />
                <Button title="ENG" />
            </View>
        </View>
    )
}


export default App;
