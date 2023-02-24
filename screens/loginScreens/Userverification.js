import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import SignupHeader from './SignupHeader'
import { COLORS } from '../../components/Colors'
import { userRoute } from '@react-navigation/native'
import Input from '../../components/Input'
import { TouchableOpacity } from 'react-native-gesture-handler'
import KeyboardWrapper from '../../components/keyboardWrapper'


const Userverification = ({ route, navigation }) => {

  return (
    <KeyboardWrapper>
      <View style={styles.container}>
        <SignupHeader
          title='You are'
          title1='Almost There'
        />
        <View style={styles.Secondview}>
          <Text style={styles.header}>Verify Your Account</Text>
          <Text style={styles.paragraph}>We have sent a verification code to {route.params.email} and to {route.params.number}?</Text>
          <View style={styles.fulldesign}>
            <Input style={styles.Box} />
            <Input style={styles.Box} />
            <Input style={styles.Box} />
            <Input style={styles.Box} />
          </View>
          <View style={styles.header1}>
            <Text style={styles.paragraph}>Didn't recieve code?</Text>
            <TouchableOpacity>
              <Text style={styles.paragraph1}>Resend</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardWrapper>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary
  },
  fulldesign: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',


  },
  Secondview: {
    flex: 1,
    backgroundColor: COLORS.white,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40
  },
  header: {
    marginLeft: 32,
    fontSize: 24,
    color: COLORS.primary,
    marginBottom: 8,
    marginTop: 96
  },
  header1: {
    alignItems: "center",
    justifyContent: 'center',
    marginTop: 4,
    flexDirection: 'row',
  },
  paragraph: {
    marginTop: 8,
    fontSize: 12,
    marginLeft: 32,
    color: COLORS.text
  },
  paragraph1: {
    marginTop: 8,
    fontSize: 18,
    marginLeft: 7,
    color: COLORS.text
  },
  Box: {
    width: 48,
    height: 48,
    borderRadius: 9,
    marginLeft: 4
  }
})
export default Userverification