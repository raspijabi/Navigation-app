import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import Icon from 'react-native-vector-icons/Ionicons'


export const Tab1Screen = () => {

    useEffect(() => {
        console.log('Table1screen effect')
    }, [])

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Iconos</Text>

            <Icon name="airplane-outline" size={30} color="#900" />
            <Icon name="analytics-outline" size={30} color="#900" />

        </View>
    )
}
