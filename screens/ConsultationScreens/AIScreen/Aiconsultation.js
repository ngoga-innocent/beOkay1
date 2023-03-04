import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import { React, useState } from 'react'
import { COLORS } from '../../../components/Colors'
import RadioForm from 'react-native-simple-radio-button'
import Input from '../../../components/Input'
import Slider from '@react-native-community/slider'
import KeyboardWrapper from '../../../components/keyboardWrapper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Button from '../../../components/Button'


const Aiconsultation = () => {
    const [value, setValue] = useState(0)
    const [range, setRange] = useState('32%')
    const [accept, setAccept] = useState(false)
    const item = [
        { label: 'Yes', value: 0 },
        { label: 'No', value: 1 }
    ];

    const Agree = () => {
        if (accept) {
            setAccept(false)
        }
        else {
            setAccept(true)
        }
    }
    return (
        <KeyboardWrapper>
            <ScrollView>
                <View style={{ backgroundColor: COLORS.green, height: 161, margin: 8, padding: 4 }}>
                    <Text style={{ fontSize: 17, fontWeight: 'bold', maxWidth: '47%', marginVertical: 17 }}>Your Going to take consultation with AI</Text>
                    <View style={{ height: 70, backgroundColor: '#21C074', borderWidth: 1, borderRadius: 12, justifyContent: 'center' }}>
                        <Text style={{ color: COLORS.white, fontSize: 16 }}>Automated AI provide accurate solution 98% Based on the information and illness details you provide.</Text>
                    </View>
                </View>
                <View style={{ margin: 12 }}>
                    <Text style={{ marginVertical: 6 }}>Did You consult with Doctor?</Text>
                    <RadioForm

                        radio_props={item}
                        initial={0}
                        onPress={(value) => setValue(value)}
                        formHorizontal={true}
                        animation
                        buttonColor={COLORS.paragraph}
                        selectedButtonColor={COLORS.primary}
                        buttonWrapStyle={{ margin: 10 }}

                    />
                    <View style={{ marginVertical: 5 }}>
                        <Text>Describe your Illness</Text>
                        <TextInput multiline numberOfLines={6} style={{
                            backgroundColor: COLORS.paragraph, border: 1, borderRadius: 12,
                            textAlignVertical: 'top',

                        }} />
                    </View>
                    <View>
                        <Text>Previous Illness</Text>
                        <Input name2='search' style={{ backgroundColor: COLORS.paragraph }} placeholder="Type of illness" />
                    </View>
                    <View style={{ marginTop: 5 }}>
                        <Text>Estimated Body Temperature</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <Slider
                                style={{ width: 300, height: 60 }}
                                minimumValue={0}
                                maximumValue={1}
                                minimumTrackTintColor={COLORS.primary}
                                maximumTrackTintColor={COLORS.primary}
                                thumbTintColor={COLORS.primary}
                                value={.32}
                                onValueChange={value => setRange(parseInt(value * 100 + '%'))}
                            />
                            <TouchableOpacity style={{ backgroundColor: COLORS.paragraph, padding: 12, borderRadius: 8, marginRight: 15 }}><Text>{range} °C</Text></TouchableOpacity>
                        </View>
                    </View>
                    <Text>Are You pregnant?</Text>
                    <RadioForm

                        radio_props={item}
                        initial={0}
                        onPress={(value) => setValue(value)}
                        formHorizontal={true}
                        animation
                        buttonColor={COLORS.paragraph}
                        selectedButtonColor={COLORS.primary}

                    />
                    <View style={{ marginTop: 5 }}>

                        <View style={{ flexDirection: 'row-reverse', alignItems: 'center', justifyContent: 'center', marginRight: 5 }}>
                            <Slider
                                style={{ width: 300, height: 60 }}
                                minimumValue={0}
                                maximumValue={0.3}
                                minimumTrackTintColor={COLORS.primary}
                                maximumTrackTintColor={COLORS.primary}
                                thumbTintColor={COLORS.primary}
                                value={.03}
                                onValueChange={value => setRange(parseInt(value * 100 + '%'))}
                            />
                            <TouchableOpacity style={{ backgroundColor: COLORS.paragraph, padding: 12, borderRadius: 8, marginLeft: 15 }}><Text>{range} days</Text></TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        <Text>Any Medication Taken Before</Text>
                        <Input name2='search' style={{ backgroundColor: COLORS.paragraph }} placeholder="Medication" />
                    </View>
                    <View>
                        <Text>What symptom is Bothering you most?</Text>
                        <Input name2='search' style={{ backgroundColor: COLORS.paragraph }} placeholder="Type of illness" />
                    </View>
                    <View>
                        <Text style={{ maxWidth: 190 }}>Is there any specific diagnosis you are windering about?</Text>
                        <Input name2='search' style={{ backgroundColor: COLORS.paragraph }} placeholder="Type of illness" />
                    </View>
                    <View style={{ marginTop: 5 }}>
                        <Text>Pain Duration</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <Slider
                                style={{ width: 300, height: 60 }}
                                minimumValue={0}
                                maximumValue={0.3}
                                minimumTrackTintColor={COLORS.primary}
                                maximumTrackTintColor={COLORS.primary}
                                thumbTintColor={COLORS.primary}
                                value={.03}
                                onValueChange={value => setRange(parseInt(value * 100 + '%'))}
                            />
                            <TouchableOpacity style={{ backgroundColor: COLORS.paragraph, padding: 12, borderRadius: 8, marginRight: 15 }}><Text>{range} days</Text></TouchableOpacity>
                        </View>
                    </View>
                    <TouchableOpacity onPress={(accept) => Agree(accept)} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        {accept ? <View>
                            <Icon name='toggle-switch' size={45} color={COLORS.primary} />

                        </View> : <View>
                            <Icon name='toggle-switch-off' size={45} color={COLORS.primary} />

                        </View>}

                        <Text>I agree that all information are trustWorthy</Text>
                    </TouchableOpacity>
                    {accept ? <Button text='Submit' style={{ backgroundColor: COLORS.primary, height: 45, width: '100%', marginBottom: 30 }} /> :
                        <Button text='Submit' style={{ backgroundColor: COLORS.paragraph, height: 45, width: '100%', marginBottom: 30 }} />}

                </View>
            </ScrollView>
        </KeyboardWrapper>
    )
}

export default Aiconsultation