import React from 'react';
import {Text, View} from 'react-native';
import {useTheme} from "styled-components/native";

const ScreenGaleria = () => {
    const theme = useTheme();
    return (
        <View style={{flex: 1, backgroundColor: theme.background}}>
            <Text>Screen Galeria</Text>

        </View>
    );
};

export default ScreenGaleria;
