import React, { useEffect } from 'react'
import { Text, View } from 'react-native'

export const Tab3Screen = () => {

  useEffect(()=> {
    console.log('Table3screen effect')
  }, [])
  return (
    <View>
        <Text>Tab 3 Scren</Text>
    </View>
  )
}
