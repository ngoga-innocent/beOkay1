import AsyncStorage from "@react-native-async-storage/async-storage";
export async function CheckLogin(){
    const loggedin=await AsyncStorage.getItem('token')
    if (loggedin !==null){
        return {
            token:loggedin,
            logged:true
        }
    }
    else{
        return {
            token:null,
            logged:false
        }
    }
}