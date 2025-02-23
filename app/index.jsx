import React from 'react';
import { ScrollView, View, StyleSheet, ImageBackground, KeyboardAvoidingView, Platform } from 'react-native';
import Counter from './counter';
import Calculator from './calculator';
import bgImage from '../assets/images/bg.jpg'; // Corrected path

const Home = () => {
  return (
    <ScrollView 
      style={styles.mainScroll}
      showsVerticalScrollIndicator={false}
      bounces={true}
      overScrollMode="never"
    >
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <ImageBackground source={bgImage} style={styles.background}>
          <View style={styles.overlay}>
            <Counter />
            <Calculator />
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainScroll: {
    flex: 1,
    backgroundColor: '#000', // or whatever your background color is
  },
  container: {
    minHeight: '100%',
  },
  background: {
    flex: 1,
    minHeight: '100%',
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
