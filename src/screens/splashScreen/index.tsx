import React, { useEffect } from 'react';
import { View, Image } from 'react-native';
import styles from './styles';
import Icons from '../../assets';

const SplashScreen = ({ navigation }) => {
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.replace('BottomTab');
    }, 2000);

    return () => clearTimeout(timeout);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image style={styles.landingpage} source={Icons.landingpage} />
      <Image style={styles.white} source={Icons.white} />
    </View>
  );
};

export default SplashScreen;
