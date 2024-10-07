// components/PrimaryButton.tsx

import React from 'react';
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from 'react-native';
import { colors } from '../themes';

interface PrimaryButtonProps extends TouchableOpacityProps {
  text: string;
  bg: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ text, bg,onPress  }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.primaryCont, { backgroundColor: bg }]}>
      <Text style={styles.primary}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  primaryCont: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
    paddingVertical: 14,
    borderRadius: 8,
    marginTop: 15,
  },
  primary: {
    color: colors.white,
    fontWeight: '500',
    fontSize: 16,
  },
});

export default PrimaryButton;
