import React from 'react';
import { View, TextInput, StyleSheet, TextInputProps } from 'react-native';
import { colors } from '../themes';

interface CustomTextInputProps extends TextInputProps {
  placeholder: string;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({ placeholder, value, onChangeText }) => {
  return (
    <View>
      <TextInput
        style={[styles.text]}
        placeholder={placeholder}
         value={value}
         onChangeText={onChangeText}
       
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    fontWeight: '500', 
    paddingHorizontal: 15,
    color: colors.black
  },
});

export default CustomTextInput;
