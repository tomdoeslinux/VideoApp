import React, {useRef, useState} from 'react';
import {Button, Text, useWindowDimensions, View} from 'react-native';
import Video from 'react-native-video'

function App() {
    const { width, height } = useWindowDimensions()

    const player = useRef<Video>(null)
    const isPortrait = height > width

    const videos = [require('./videos/flower-valley.mp4'), require('./videos/manhattan.mp4'), require('./videos/tiger.mp4')]

    const [currentVideo, setCurrentVideo] = useState(videos[0])
    const [paused, setPaused] = useState(true)

    if (isPortrait) {
        return <Text style={{ color: 'red' }}>Please change orientation to landscape</Text>
    }

    function changeVideo(newVideo: any) {
        setCurrentVideo(newVideo)
        setPaused(false)
    }

    return (
        <View style={{
            position: 'relative',
            width: '100%',
            height: '100%'
        }}>
            <Video
                style={{ width: '100%', height: '100%' }}
                resizeMode='cover'
                source={currentVideo}
                ref={player}
                paused={paused}
                onLoad={() => {
                    if (paused) {
                        player.current?.seek(0)
                    }
                }}
                onEnd={() => {
                    setPaused(true)
                    player.current?.seek(0)
                }}
            />

            {paused && (
                <View style={{
                    gap: 10,
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    marginTop: 'auto',
                    bottom: 0,
                    marginBottom: 32
                }}>
                    <Button title="EST" onPress={() => changeVideo(videos[0])} />
                    <Button title="RUS" onPress={() => changeVideo(videos[1])}  />
                    <Button title="ENG" onPress={() => changeVideo(videos[2])}  />
                </View>
            )}
        </View>
    )
}


export default App;
