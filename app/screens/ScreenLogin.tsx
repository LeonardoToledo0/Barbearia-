import React from "react";
import {Image, Text, TextInput, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {Divider, TouchableRipple} from "react-native-paper";
import {useTheme} from "styled-components/native";
import {FontAwesome5} from '@expo/vector-icons';


const ScreenLogin: React.FC = () => {
    const theme = useTheme();
    const navigation = useNavigation();

    const goToRegister = () => {
        navigation.navigate('Register');
    };
    const goToInicio = () => {
        navigation.navigate('Autenticade');
    };


    return (
        <View style={{flex: 1, backgroundColor: theme.background, justifyContent: 'center', alignItems: 'center'}}>
            <Image style={{width: 300, height: 300, marginTop: -50}} source={theme.logo}/>
            <Text style={{color: theme.primaryText, fontSize: 24, fontWeight: 'bold'}}>Login</Text>
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
            <TouchableRipple onPress={goToInicio} style={{
                padding: 14,
                width: '80%',
                borderRadius: 8,
                marginTop: 30,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: theme.primaryBackgroundButton
            }}><Text style={{color: theme.primaryTextButton, fontSize: 16}}>Entrar</Text></TouchableRipple>
            <Divider style={{width: '70%', marginTop: 70, height: 2}}/>
            <TouchableRipple onPress={goToRegister}>

                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 20,
                    gap: 5
                }}>
                    <Text style={{color: theme.primaryText, fontSize: 16}}>
                        Ir para o registro
                    </Text>
                    <FontAwesome5
                        name="arrow-circle-right"
                        size={24}
                        color={theme.primaryBackgroundButton}
                        style={{marginLeft: 5}}
                    />
                </View>
            </TouchableRipple>
        </View>
    );
};

export default ScreenLogin;
