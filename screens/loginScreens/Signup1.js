import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../../components/Button';
import { COLORS } from '../../components/Colors';


const Signup1 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome </Text>
      <Text style={styles.header1}>On Be Okay</Text>
      <Text style={styles.paragraph}>Lorem ipsum dolor amet consecteur.Gravida sit fermentum ac</Text>
      <Text style={styles.Signup}>SIGNUP</Text>
      <Button icon='logo-google' text=' with Google' style={styles.button} color='red' />
      <Button icon='logo-apple' text=' with Apple' style={styles.button} />
      <Button icon='mail' text=' with Email' style={styles.button} onPress={() => navigation.navigate('Signup')} />
      <View style={styles.haveacc}>
        <Text style={styles.login}>Already have an account? </Text>
        <TouchableOpacity ><Text style={styles.loginbtn}>LOGIN</Text></TouchableOpacity>

      </View>
      <View style={[styles.usembl, styles.lgn]}>
        <TouchableOpacity><Icon name='toggle-sharp' color='white' size={40} marginLeft={10} /></TouchableOpacity>
        <Text style={styles.usembl1}> Use Mobile security to Login</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',

    backgroundColor: COLORS.primary
  },
  lgn: {
    flexDirection: 'row'
  },
  header: {
    fontSize: 24,
    color: COLORS.white,
    marginTop: 103,
    marginLeft: 32,
    fontWeight: 'bold',
    flexDirection: 'column'

  },
  header1: {
    fontSize: 24,
    color: COLORS.white,

    marginLeft: 32,
    fontWeight: 'bold',
    flexDirection: 'column'

  },
  paragraph: {
    color: COLORS.white,
    fontSize: 17,
    marginLeft: 32,
    marginTop: 20,
    maxWidth: 280,
    marginBottom: 70
  },
  button: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginBottom: 16
  },
  Signup: {
    marginLeft: 32,
    color: COLORS.white,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 50
  },
  login: {
    color: '#E4E4E4',
    marginLeft: 32
  },
  loginbtn: {
    color: COLORS.white,
    marginLeft: 5
  },
  haveacc: {
    flexDirection: 'row'
  },
  usembl: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 32,
    fontSize: 17,
    color: COLORS.white,
    marginVertical: 10,
    padding: 4

  },
  usembl1: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 2,
    fontSize: 17,
    color: COLORS.white,
    marginVertical: 10,
    padding: 4

  }
})

export default Signup1