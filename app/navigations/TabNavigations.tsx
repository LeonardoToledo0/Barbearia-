import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Ionicons} from '@expo/vector-icons';
import {useTheme} from 'styled-components/native';
import ScreenInicio from '@/app/screens/ScreenInicio';
import ScreenGaleria from '@/app/screens/ScreenGaleria';
import ScreenAgenda from '@/app/screens/ScreenAgenda';
import ScreenPerfil from '@/app/screens/ScreenPerfil';

const Tab = createBottomTabNavigator();

interface TabNavigationsProps {
    toggleTheme: () => void;
}

const TabNavigations: React.FC<TabNavigationsProps> = ({toggleTheme}) => {
    const theme = useTheme();

    return (
        <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;

                    if (route.name === 'Inicio') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'Galeria') {
                        iconName = focused ? 'images' : 'images-outline';
                    } else if (route.name === 'Agenda') {
                        iconName = focused ? 'calendar' : 'calendar-outline';
                    } else if (route.name === 'Perfil') {
                        iconName = focused ? 'person' : 'person-outline';
                    }

                    return (
                        <Ionicons
                            name={
                                iconName as
                                    | 'home'
                                    | 'home-outline'
                                    | 'images'
                                    | 'images-outline'
                                    | 'calendar'
                                    | 'calendar-outline'
                                    | 'person'
                                    | 'person-outline'
                            }
                            size={size}
                            color={color}
                            style={{fontSize: 30}}
                        />
                    );
                },
                tabBarActiveTintColor: theme.tabBarActiveTintColor,
                tabBarInactiveTintColor: theme.tabBarInactiveTintColor,
                tabBarStyle: {
                    backgroundColor: theme.backgroundCard,
                },
            })}
        >
            <Tab.Screen
                name="Inicio"
                options={{
                    tabBarLabel: 'Inicio',
                    headerShown: false,
                }}
            >
                {() => <ScreenInicio toggleTheme={toggleTheme}/>}
            </Tab.Screen>
            <Tab.Screen
                name="Galeria"
                component={ScreenGaleria}
                options={{
                    tabBarLabel: 'Galeria',
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Agenda"
                component={ScreenAgenda}
                options={{
                    tabBarLabel: 'Agenda',
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Perfil"
                component={ScreenPerfil}
                options={{
                    tabBarLabel: 'Perfil',
                    headerShown: false,
                }}
            />

        </Tab.Navigator>
    );
};

export default TabNavigations;
