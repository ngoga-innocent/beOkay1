import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import SignupHeader from './SignupHeader'
import { COLORS } from '../../components/Colors'
import { userRoute } from '@react-navigation/native'


const Userverification = ({ route, navigation }) => {

  return (
    <View style={styles.container}>
      <SignupHeader
        title='You are'
        title1='Almost There'
      />
      <View style={styles.Secondview}>
        <Text style={styles.header}>Verify Your Account</Text>
        <Text>We have sent a verification code to {route.params.email} and to {route.params.number}?</Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary
  },
  Secondview: {
    flex: 1,
    backgroundColor: COLORS.white,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40
  },
  header: {
    marginLeft: 32,
    fontSize: 40
  }
})
export default Userverification