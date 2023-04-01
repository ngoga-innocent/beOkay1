import React from 'react'
import { Text, View } from 'react-native'
import { COLORS } from '../../components/Colors'
import Fontisto from 'react-native-vector-icons/Fontisto'
import FontAwesome from 'react-native-vector-icons/FontAwesome5'

const ConsultationResults= ()=>{
    return (
        <View style={{flex:1,marginLeft:20}}>
            <Text style={{fontSize:20,backgroundColor:COLORS.green,padding:5,marginTop:7,fontWeight:'bold'}}>Dr. Emile Results</Text>
            <View style={{backgroundColor:COLORS.white,paddingHorizontal:10,marginTop:35}}>
                <Text style={{fontWeight:'400',fontSize:16}}>Illnes Details</Text>
                <View style={{marginHorizontal:20,marginTop:25}}>
                    <Text style={{fontSize:16,fontWeight:'600',marginBottom:10}}>Fabry Disease</Text>
                    <Text style={{letterSpacing:2,lineHeight:20,fontWeight:'400'}}>Fabry disease is a rare genetic disease that is passed down through your family.
                        it affects organs all around your body,including your heart,brain 
                        and kidney, and can cause them to get less blood than they need.
                        Over time,this can cause chronic kidney disease or kidney failure</Text>
                </View>
                <View style={{marginTop:30}}>
                    <Text style={{fontSize:16,fontWeight:'600',lineHeight:20,letterSpacing:2}}>Recommendation</Text>
                    <Text style={{ fontWeight:'400',fontSize:12,marginTop:12,marginBottom:8}}>You need to consult with doctor at least in 3 days</Text>
                    <View style={{flexDirection:'row',padding:7}}>
                        <Fontisto name='doctor' size={20} color={COLORS.primary}/>
                        <Text style={{color:COLORS.primary,marginLeft:15,fontWeight:'600'}}>Find our doctors</Text>
                    </View>
                    <View style={{marginTop:25}}>
                        <Text style={{fontWeight:'600',fontSize:16,lineHeight:20,color:'#757575'}}>First Aid Medication</Text>
                        <Text style={{color:'#757575',fontSize:12,marginTop:5,lineHeight:20}}>We provide the medication that may help you incase you did take your consultaion with doctor.</Text>
                        <View>
                          <FontAwesome name='pills'/>
                        </View>
                    </View>
                </View>
            </View>
        </View>
        
    )
    
}

export default ConsultationResults