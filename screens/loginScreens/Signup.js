import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { React, useState } from 'react'
import { COLORS } from '../../components/Colors'
import SignupHeader from './SignupHeader'
import Input from '../../components/Input'
import Button from '../../components/Button'
import KeyboardWrapper from '../../components/keyboardWrapper'
import Icon from 'react-native-vector-icons/Ionicons'
import useNavigation from '@react-navigation/native'


const Signup = ({ navigation }) => {

  const [fullName, setFullName] = useState('');
  const [Email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const [checkmail, setCheckMail] = useState(false);
  const [secureText, setSecureText] = useState(true)
  const FullName = (e) => {
    setFullName(e)
  }
  const email = (text) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    setEmail(text)
    if (reg.test(text)) {
      setCheckMail(false)
    } else {
      setCheckMail(true)
    }
  }
  const Number = (e) => {
    setNumber(e)
  }
  const Password = (e) => {
    setPassword(e)

  }
  const secureTextfun = () => {
    setSecureText(false)
  }
  const Signupbtn = () => {


    if (fullName == '') {
      alert('please fill your Full names')
      return false
    }
    else if (email == '') {
      alert('please fill email')
      return false
    }
    else if (number == '') {
      alert('please fill phone number')
      return false
    }
    else if (password == '') {
      alert('password must be greater 8 digit ')
      return false
    }
    else {
      return true
    }

  }
  const call_api = () => {
    // if (Signupbtn()) {
    //   navigation.navigate('Userverification')
    // }
    // else {
    //   alert('there is errors in your inputs')
    // }
    navigation.navigate('Userverification', {
      email: Email,
      number: number,
      fullName: fullName,

    })
  }
  return (
    <KeyboardWrapper>
      <View style={styles.container}>
        <SignupHeader
          title='You are'
          title1='Almost There'
          paragraph='Lorem ipsum dolor amet consecteur.Gravida sit fermentum ac'
        />
        <View style={styles.SecondView}>
          <View style={styles.inner}>
            <Text style={styles.Signup}>SIGNUP</Text>
            <View style={styles.haveacc}>
              <Text style={styles.login}>Already have an account? </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Login')} ><Text style={styles.loginbtn}>LOGIN</Text></TouchableOpacity>

            </View>
          </View>
          <Input name='person' placeholder='Enter Full Name'
            onChangeText={FullName} value={fullName}

          />
          {checkmail ? <Input name='mail' placeholder='Email'
            onChangeText={(text) => email(text)} value={Email}
            style={{ borderColor: 'red' }}

          /> : <Input name='mail' placeholder='Email'
            onChangeText={(text) => email(text)} value={Email}


          />}


          <Input name='call' placeholder='Phone Number'
            onChangeText={Number} value={number}
            keyboardType='numeric'

          />
          <Input name='lock-closed' placeholder='password'
            onChangeText={Password} value={password}
            secureTextEntry={secureText}
            name2='eye'
            style1={{ marginRight: 5 }}
            onPress={secureTextfun}

          />

          <Button text='Signup' textcolor={COLORS.white} style={styles.Button} onPress={call_api} />
          <View style={styles.usembl}>
            <TouchableOpacity><Icon name='toggle-sharp' color={COLORS.primary} size={40} marginLeft={10} /></TouchableOpacity>
            <Text style={styles.usembl1}> Use Mobile security to Login</Text>
          </View>
        </View>


      </View>
    </KeyboardWrapper>
  )
}

export default Signup

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,

  },
  SecondView: {
    flex: 1,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  inner: {
    marginLeft: 32
  },
  Signup: {

    color: '#000000',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 3
  },
  text: {
    color: COLORS.text
  },
  login: {
    color: '#E4E4E4',

  },
  loginbtn: {
    color: COLORS.primary,

  },
  haveacc: {
    flexDirection: 'row'
  },
  Button: {
    backgroundColor: COLORS.primary,
    height: 40,
    marginTop: 16,
    alignSelf: 'center'
  },
  usembl: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 17,
    backgroundColor: 'white',
    flexDirection: 'row'

  },
  usembl1: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 2,
    fontSize: 17,





  }
})