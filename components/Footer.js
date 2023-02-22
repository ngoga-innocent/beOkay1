import { View, Text,StyleSheet,useWindowDimensions } from 'react-native'
import React from 'react'
import { useState } from 'react'
import slide from '../slide'


const Footer = () => {
    const [currentindex,setCurrentIndex]=useState(0);
    const {height}=useWindowDimensions()
  return (
    <View style={{ 
        height:height*0.25,
        justifyContent:'space-between',
        marginTop:20
         }}>
      <View style={{ 
        justifyContent:'center',
        flexDirection:'row',
        marginTop:15 
        }}>
            {slide.map((_,index)=>(<View key={index}style={[ styles.indicator,currentindex==index &&{
                width:25,
                backgroundColor:'#93BD68'
            } ]}/>))}

      </View>
    </View>
  )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        },
    indicator:{
         backgroundColor:'#BCBCBC',
         height:10,
         width:10,
         marginHorizontal:10,
         borderRadius:10

        }
})
export default Footer