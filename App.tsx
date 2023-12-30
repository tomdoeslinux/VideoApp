import React from 'react';
import {Button, Pressable, Text, useWindowDimensions, View} from 'react-native';

function App() {
    const { width, height } = useWindowDimensions()

    const isPortrait = height > width

    if (isPortrait) {
        return <Text style={{ color: 'red' }}>Please change orientation to landscape</Text>
    }

    return (
        <View style={{
            gap: 10,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: 'auto',
            marginBottom: 32
        }}>
            <Button title="EST"  />
            <Button title="RUS" />
            <Button title="ENG" />
        </View>
    )
}


export default App;
