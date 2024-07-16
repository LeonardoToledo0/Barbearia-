import React from "react";
import {Text, View} from "react-native";
import {useTheme} from "styled-components/native";

const ScreenAgenda = () => {
    const theme = useTheme();
    return (
        <View style={{flex: 1, backgroundColor: theme.background}}>
            <Text>ScreenAgenda</Text>
        </View>

    )

}
export default ScreenAgenda;