import React from 'react';
import { View, TextInput, StyleSheet, TextInputProps } from 'react-native';

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
    fontWeight: '500', // Use numeric value for weight in RN
    paddingHorizontal: 15,
    color: '#000', // Ensure text is visible with proper color
  },
});

export default CustomTextInput;
