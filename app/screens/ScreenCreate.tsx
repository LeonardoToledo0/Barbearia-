import React from "react";
import {Image, Text, TextInput, View} from "react-native";
import {useTheme} from "styled-components/native";
import {TouchableRipple} from "react-native-paper";

const ScreenCreate = () => {
    const theme = useTheme();
    return (
        <View style={{flex: 1, backgroundColor: theme.background, justifyContent: 'center', alignItems: 'center'}}>
            <Image style={{width: 300, height: 300, marginTop: -100}} source={theme.logo}/>
            <Text style={{color: theme.primaryText, fontSize: 24, fontWeight: 'bold'}}>Registrar</Text>
            <View style={{
                width: '80%',
                borderBottomWidth: 2,
                borderBottomColor: theme.primaryBackgroundButton,
                margin: 10
            }}>
                <TextInput style={{height: 50, width: '100%', color: theme.primaryText, padding: 0}}
                           placeholder='Digite o telefone'
                           placeholderTextColor='gray'/>
            </View>
            <View style={{
                width: '80%',
                borderBottomWidth: 2,
                borderBottomColor: theme.primaryBackgroundButton,
                margin: 10
            }}>
                <TextInput style={{height: 50, width: '100%', color: theme.primaryText, padding: 0}}
                           placeholder='Digite a senha'
                           placeholderTextColor='gray'/>
            </View>
            <TouchableRipple style={{
                padding: 14,
                width: '80%',
                borderRadius: 8,
                marginTop: 30,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: theme.primaryBackgroundButton
            }}><Text style={{color: theme.primaryTextButton, fontSize: 16}}>Registrar</Text></TouchableRipple>


        </View>

    )

}
export default ScreenCreate;