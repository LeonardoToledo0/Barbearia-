import React from 'react';
import {Text, View} from 'react-native';
import {useTheme} from 'styled-components/native';


const ScreenPerfil: React.FC = () => {
    const theme = useTheme();

    return (
        <><View style={{flex: 1, backgroundColor: theme.background}}>
            <Text style={{color: theme.primaryText}}>ScreenPerfil</Text>

        </View>

        </>
    );
};

export default ScreenPerfil;
