import { KeyboardAvoidingView, ScrollView, Keyboard, TouchableWithoutFeedback } from 'react-native'
import React from 'react'

const KeyboardWrapper = ({ children }) => {
    return (
        <KeyboardAvoidingView>
            <ScrollView>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    {children}
                </TouchableWithoutFeedback>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default KeyboardWrapper