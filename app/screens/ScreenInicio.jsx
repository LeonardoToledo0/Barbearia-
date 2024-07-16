import React, {useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {useTheme} from 'styled-components/native';
import {Card, Switch, Title} from 'react-native-paper';
import {Ionicons} from '@expo/vector-icons';
import Carrossel from "@/components/Carrousel";

// Importing images correctly
const Barba = require('../../assets/images/20972.jpg');
const Cabelo = require('../../assets/images/20978.jpg');
const Barbearia = require('../../assets/images/hair-5428013_640.jpg');
const Tratamento = require('../../assets/images/11410.jpg')

const ScreenInicio = ({toggleTheme}) => {
    const theme = useTheme();
    const [isSwitchOn, setIsSwitchOn] = useState(false);

    const onToggleSwitch = () => {
        setIsSwitchOn(!isSwitchOn);
        toggleTheme();
    };

    return (
        <ScrollView style={{flex: 1, backgroundColor: theme.background}}>

            <View
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    backgroundColor: theme.primaryBackgroundButton,
                    height: 70,
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                    paddingHorizontal: 20,
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginBottom: 10,
                    zIndex: 999999

                }}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        flex: 1,
                        justifyContent: 'space-between',
                    }}
                >
                    <View style={{marginRight: 12}}>
                        <Text style={{color: theme.primaryTextButton, fontSize: 18, fontWeight: 'bold'}}>
                            Olá, Leonardo
                        </Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
                        <Ionicons name="chatbubble-outline" size={24} color={theme.primaryTextButton}/>
                        <Ionicons name="settings-outline" size={24} color={theme.primaryTextButton}/>
                        <Switch value={isSwitchOn} onValueChange={onToggleSwitch}
                                color={isSwitchOn ? theme.switchBackgroundActive : theme.switchBackgroundInactive}/>
                    </View>
                </View>
            </View>
            <Carrossel/>
            <View style={{padding: 5}}>
                <Card>
                    <Title style={{
                        color: '#f0f8ff',
                        fontSize: 18,
                        fontWeight: 'bold',
                        alignSelf: 'flex-end',
                        marginRight: 15,
                        zIndex: 999
                    }}>Tratamento
                        Capilar</Title>
                    <Card.Cover style={{borderRadius: 0, height: 200, marginTop: -40}} source={Tratamento}/>
                </Card>
            </View>

            <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between', marginBottom: 20}}>
                <View style={{flexDirection: 'column', width: '50%'}}>
                    <View style={{width: '100%', padding: 5}}>
                        <Card style={{backgroundColor: theme.background, borderRadius: 0}}>
                            <Title style={{
                                color: '#f0f8ff',
                                fontSize: 18,
                                fontWeight: 'bold',
                                zIndex: 999, marginLeft: 15
                            }}>Barba</Title>
                            <Card.Cover style={{borderRadius: 0, height: 200, marginTop: -35}}
                                        source={Barba}/>
                        </Card>
                    </View>
                    <View style={{width: '100%', padding: 5}}>
                        <Card style={{backgroundColor: theme.background, borderRadius: 0}}>
                            <Title style={{
                                color: '#f0f8ff',
                                fontSize: 18,
                                fontWeight: 'bold',
                                zIndex: 999, marginLeft: 15
                            }}>Cabelo</Title>
                            <Card.Cover style={{borderRadius: 0, height: 200, marginTop: -35}} source={Cabelo}/>
                        </Card>
                    </View>
                </View>
                <View style={{width: '50%'}}>
                    <View style={{width: '100%', padding: 5}}>

                        <Card style={{backgroundColor: theme.background, borderRadius: 0}}>
                            <Card.Cover style={{borderRadius: 0, height: 410}} source={Barbearia}/>
                            <Title style={{
                                color: '#f0f8ff',
                                fontSize: 18,
                                fontWeight: 'bold',
                                zIndex: 999,
                                marginTop: -35,
                                marginRight: 15,
                                alignSelf: 'flex-end'


                            }}>Produtos</Title>
                        </Card>
                    </View>

                </View>


            </View>
        </ScrollView>
    );
};

export default ScreenInicio;
