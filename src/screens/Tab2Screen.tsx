import React, { useEffect } from 'react'
import { Text, View } from 'react-native'

export const Tab2Screen = () => {

  useEffect(()=> {
    console.log('Table2screen effect')
  }, [])
  return (
    <View>
        <Text>Tab 2 Scren</Text>
    </View>
  )
}
