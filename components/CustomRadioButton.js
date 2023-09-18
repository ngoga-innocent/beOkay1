import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { COLORS,height,width } from './Colors';
const CustomRadioButton = ({ label, selected, onSelect }) => {
  return (
    <TouchableOpacity onPress={onSelect} style={{marginLeft:width/40}}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Icon
          name={selected ? 'dot-circle-o' : 'circle-o'}
          size={height/40}
          color={selected ? COLORS.primary : COLORS.text}
        />
        <Text style={{ marginLeft: width/70 }}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomRadioButton;
