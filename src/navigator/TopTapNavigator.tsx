import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { Text } from 'react-native-paper'
import { AlbumScreen } from '../screens/AlbumScreen'
import { ChatScreen } from '../screens/ChatScreen'
import { ContactsScreen } from '../screens/ContactsScreen'
import { colors } from '../theme/appTheme'

const Tab = createMaterialTopTabNavigator()

export const TopTapNavigator = () => {
  return (
    <Tab.Navigator
        sceneContainerStyle={{
            backgroundColor: 'white'
        }}
        screenOptions= {({route}) => ({
            tabBarPressColor: colors.primary,
            tabBarShowIcon: true,
            tabBarIndicatorStyle: {
                backgroundColor: colors.primary
            },
            tabBarStyle:{
                borderTopWidth: 0,
                shadowColor: 'transparent',
            },
            tabBarIcon: (props) => {
                let iconName: string = ''

                switch (route.name) {
                    case 'Chat':
                        iconName = 'CH'
                        break
                    case 'Contacts':
                        iconName = 'CO'
                        break
                    case 'Album':
                        iconName = 'AL'
                        break
                }
                return <Text style={{ color: props.color }}>{iconName}</Text>
            }
        })}
    >
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Contacts" component={ContactsScreen} />
      <Tab.Screen name="Album" component={AlbumScreen} />
    </Tab.Navigator>
  )
}