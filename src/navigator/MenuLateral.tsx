import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { Image, Text, useWindowDimensions, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SettingsScreen } from '../screens/SettingsScreen';
import { styles } from '../theme/appTheme';
import { Tabs } from './Tabs';

const Drawer = createDrawerNavigator()

export const MenuLateral = () => {

    const { width } = useWindowDimensions()

    return (
        <Drawer.Navigator
            screenOptions={{
                drawerPosition: 'left',
                headerShown: false,
                drawerType: (width >= 768 ? 'permanent' : 'front'),

            }}
            drawerContent={(props) => <MenuInterno{...props} />}
        >
            {/* <View><Text>Hola</Text></View> */}
            <Drawer.Screen name="Tabs" component={Tabs} />
            <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
        </Drawer.Navigator>
    );
}

const MenuInterno = ({navigation}: DrawerContentComponentProps) => {


    return (
        <DrawerContentScrollView>
            {/* Parte del avatar */}
            <View
                style={styles.avatarContainer}
            >
                <Image
                    source={{
                        uri: 'https://reactjs.org/logo-og.png'
                    }}
                    style= {styles.avatar}
                />
            </View>


            {/* Opciones de menú */}
            <View style={styles.menuContainer}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Tabs')}
                    style={styles.menuBoton}
                >
                    <Text style={styles.menuTexto}>Navegación stack</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('SettingsScreen')}
                    style={styles.menuBoton}
                >
                    <Text style={styles.menuTexto}>Ajustes</Text>
                </TouchableOpacity>
            </View>


        </DrawerContentScrollView>
    )
}