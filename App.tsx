import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Text, View } from 'react-native'
import { StackNavigator } from './src/navigator/StackNavigator'
import { MenuLateralBasico } from './src/navigator/MenuLateralBasico'
import { MenuLateral } from './src/navigator/MenuLateral'
import { Tabs } from './src/navigator/Tabs'
import { AuthProvider } from './src/context/AuthContext'

export const App = () => {
    return (
        <NavigationContainer>
            <MenuLateral/>
            {/* <Tabs /> */}
            {/* <StackNavigator /> */}
        </NavigationContainer>
    )
}

export const AppState = ({children}: any) => {
    return(
        <AuthProvider>
            {children}
        </AuthProvider>
    )
}