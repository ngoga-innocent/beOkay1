import { KeyboardAvoidingView, ScrollView, Keyboard, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { COLORS } from './Colors'

const KeyboardWrapper = ({ children }) => {
    return (
        <KeyboardAvoidingView style={styles.container}>
            <ScrollView>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    {children}
                </TouchableWithoutFeedback>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white
    }
})

export default KeyboardWrapper