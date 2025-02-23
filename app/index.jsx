import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import Counter from './counter';
import Calculator from './calculator';
import bgImage from '../assets/images/bg.jpg'; // Corrected path

const Home = () => {
  return (
    <ImageBackground source={bgImage} style={styles.background}>
      <View style={styles.overlay}>
        <Counter />
        <Calculator />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // Ensures the image covers the whole screen
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)', // Darker overlay
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
