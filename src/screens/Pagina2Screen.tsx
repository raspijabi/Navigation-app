
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'

export type RootStackParamList = {
    Pagina3Screen: undefined
}

export const Pagina2Screen = () => {


    const navigator = useNavigation<StackNavigationProp<RootStackParamList>>()

    useEffect(() => {
        navigator.setOptions({
            title: 'Hola mundo',
            headerBackTitle: 'Back'
        })
    }, [])


    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Pagina 2 screen</Text>
            <Button
                title='Ir página 3'
                onPress={() => navigator.navigate('Pagina3Screen')}
            />
        </View>
    )
}
