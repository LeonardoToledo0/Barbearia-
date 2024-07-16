import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import ScreenLogin from "@/app/screens/ScreenLogin";
import ScreenCreate from "@/app/screens/ScreenCreate";
import {useTheme} from "styled-components/native";

const Stack = createNativeStackNavigator();

const NavigationsLogin = () => {
    const theme = useTheme();
    return (
        <Stack.Navigator
            screenOptions={{headerTintColor: theme.tabBarActiveTintColor}}>
            
            <Stack.Screen name='Auth' component={ScreenLogin}
                          options={{headerShown: false, title: ''}}
            />
            <Stack.Screen name='Register' component={ScreenCreate}
                          options={{title: ''}}
            />
        </Stack.Navigator>
    );
};

export default NavigationsLogin;
