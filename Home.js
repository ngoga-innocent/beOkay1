import { StatusBar } from 'expo-status-bar';
import {React,useState,useEffect} from 'react'
import { StyleSheet,View,Text,SafeAreaView } from 'react-native';
import { OnboadingScreen } from './screens/';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Homescreen from './screens/Homescreen';
import AsyncStorage from '@react-native-async-storage/async-storage';




export default function Home() {
  const [isAppFirstLaunched,setisAppFirstLaunched]=useState(null);
  useEffect(()=>{
    const LoadData=async()=>{
      const appData= await AsyncStorage.getItem('isAppFirstLaunched');
        if (appData == null ){
         setisAppFirstLaunched(true)
    }
    else{
      setisAppFirstLaunched(false)
    }
    }
    LoadData();
   
},[])
  const stack=createStackNavigator()
  return (
   isAppFirstLaunched !=null &&  (
    <NavigationContainer>
      <stack.Navigator screenOptions={{ headerShown:false }}>
        {isAppFirstLaunched && (<stack.Screen name='Onboadingscreen' component={OnboadingScreen}/> )}
        
         <stack.Screen name='Homescreen' component={Homescreen}/>
         
      </stack.Navigator>
     
     
 </NavigationContainer>
  
   )

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
