import { View, Text,StyleSheet, SafeAreaView,StatusBar } from 'react-native'
import React from 'react'

const Homescreen = () => {
  return (
    <View style={styles.container}>
        <StatusBar backgroundColor='#93BD68'/>
      <Text>Homescreen</Text>
    </View>
  )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#93BD68'
    }
})

export default Homescreen