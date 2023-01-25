import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Platform, Text } from 'react-native'
import { Tab1Screen } from '../screens/Tab1Screen'
import { Tab2Screen } from '../screens/Tab2Screen'
import { Tab3Screen } from '../screens/Tab3Screen'
import { colors } from '../theme/appTheme'
import { StackNavigator } from './StackNavigator'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { TopTapNavigator } from './TopTapNavigator'

export const Tabs = () => {
    return Platform.OS === 'ios'
        ? <TabsIOS />
        : <TabsAndroid />
}


const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
    return (
        <BottomTabAndroid.Navigator
            sceneAnimationEnabled={true}
            barStyle={{
                backgroundColor: colors.primary
            }}
            screenOptions={({ route }) => ({
                tabBarActiveTintColor: colors.primary,
                tabBarStyle: {
                    borderTopColor: colors.primary,
                    elevation: 0,
                    borderTopWidth: 0,
                },
                tabBarLabelStyle: {
                    fontSize: 15,
                    fontWeight: 'bold'
                },
                tabBarIcon: (props) => {
                    let iconName: string = ''

                    switch (route.name) {
                        case 'Tab1Screen':
                            iconName = 'T1'
                            break
                        case 'TopTapNavigator':
                            iconName = 'TP'
                            break
                        case 'StackNavigator':
                            iconName = 'ST'
                            break
                    }
                    return <Text style={{ color: props.color }}>{iconName}</Text>
                }
            })}
        >
            <BottomTabAndroid.Screen name="Tab1Screen" options={{ title: 'Tab1' }} component={Tab1Screen} />
            <BottomTabAndroid.Screen name="TopTapNavigator" options={{ title: 'TopTap' }} component={TopTapNavigator} />
            <BottomTabAndroid.Screen name="StackNavigator" options={{ title: 'Stack' }} component={StackNavigator} />
        </BottomTabAndroid.Navigator>
    );
}

const BottomTabIOS = createBottomTabNavigator()

const TabsIOS = () => {
    return (
        <BottomTabIOS.Navigator
            screenOptions={({ route }) => ({
                tabBarActiveTintColor: colors.primary,
                tabBarStyle: {
                    borderTopColor: colors.primary,
                    elevation: 0,
                    borderTopWidth: 0,
                },
                tabBarLabelStyle: {
                    fontSize: 15,
                    fontWeight: 'bold'
                },
                tabBarIcon: (props) => {
                    let iconName: string = ''

                    switch (route.name) {
                        case 'Tab1Screen':
                            iconName = 'T1'
                            break
                        case 'TopTapNavigator':
                            iconName = 'TP'
                            break
                        case 'StackNavigator':
                            iconName = 'ST'
                            break
                    }
                    return <Text style={{ color: props.color }}>{iconName}</Text>
                }
            })}
        >
            {/* <Tab.Screen name="Tab1Screen" options={{ title: 'Tab1', tabBarIcon: (props) => <Text style={{ color: props.color }}>T1</Text> }} component={Tab1Screen} /> */}
            <BottomTabIOS.Screen name="Tab1Screen" options={{ title: 'Tab1' }} component={Tab1Screen} />
            <BottomTabIOS.Screen name="TopTapNavigator" options={{ title: 'TopTap' }} component={TopTapNavigator} />
            <BottomTabIOS.Screen name="StackNavigator" options={{ title: 'Stack' }} component={StackNavigator} />
        </BottomTabIOS.Navigator>
    )
}