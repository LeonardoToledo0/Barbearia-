import React from 'react';
import {StyleSheet, View} from 'react-native';
import Swiper from 'react-native-swiper';
import {Card} from 'react-native-paper';

// Importe as imagens diretamente com require
const banner1 = require('../assets/images/banner1.png');
const banner2 = require('../assets/images/banner2.png');

const Carrossel = () => {
    const data = [
        {id: 1, url: banner1},
        {id: 2, url: banner2}
    ];

    return (
        <Swiper height={350}>
            {data.map(item => (
                <View key={item.id} style={styles.slide}>
                    <Card elevation={5} style={styles.card}>
                        <Card.Cover source={item.url}/>
                    </Card>
                </View>
            ))}
        </Swiper>
    );
}

const styles = StyleSheet.create({
    slide: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    card: {
        marginTop: 100,
        backgroundColor: 'transparent',
        width: '98%',
        aspectRatio: 16 / 9,
        borderRadius: 0,

    }
});

export default Carrossel;

