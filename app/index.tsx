import React, {useState} from 'react';
import {ThemeProvider} from 'styled-components/native';
import {darkTheme, lightTheme} from '@/theme/theme';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigations from '@/app/navigations/TabNavigations';
import NavigationsLogin from "@/app/navigations/NavigationsLogin";

const Stack = createNativeStackNavigator();

const App: React.FC = () => {
    const [isDarkMode, setDarkMode] = useState(false);

    const toggleTheme = () => {
        setDarkMode(!isDarkMode);
    };

    return (
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
            <Stack.Navigator>
                <Stack.Screen
                    name='Login'
                    component={NavigationsLogin}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name='Autenticade'
                    options={{headerShown: false}}>
                    {() => <TabNavigations toggleTheme={toggleTheme}/>}
                </Stack.Screen>
            </Stack.Navigator>

        </ThemeProvider>
    );
};

export default App;
