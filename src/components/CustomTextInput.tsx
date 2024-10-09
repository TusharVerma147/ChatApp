import React from 'react';
import { View, TextInput, StyleSheet, TextInputProps } from 'react-native';
import { colors } from '../themes';

interface CustomTextInputProps extends TextInputProps {
  placeholder: string;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({ placeholder, value, onChangeText }) => {
  return (
   
      <TextInput
        style={[styles.text]}
        placeholder={placeholder}
         value={value}
         onChangeText={onChangeText}
       
      />
   
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    fontWeight: '500', 
    paddingHorizontal: 15,
    paddingVertical:14,
    color: colors.black,
    flex:1,
    // backgroundColor:'red'
  },
});

export default CustomTextInput;
