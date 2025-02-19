import { View, Text, StyleSheet, ImageBackground, SafeAreaView } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import * as eva from '@eva-design/eva';
import { default as theme } from '../custom-theme.json'; 
import { Provider as PaperProvider, Button } from 'react-native-paper';
import { TouchableOpacity } from 'react-native';





const app = () => {
 return (
  <ImageBackground       source={{
    uri: 'https://images.pexels.com/photos/682933/pexels-photo-682933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  }}
  style={styles.backgroundImage}>
  <PaperProvider>
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}></Text>
      <View style={styles.container}>
        <View style={styles.overlay} />
        <Text style={styles.text}>Choose Your Parking Option</Text>
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.optionText}>Daily Parking</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.optionText}>Seasonal Parking</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.optionText}>Reserved Parking</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  </PaperProvider>
  </ImageBackground>
  )
}

export default app

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '50%',
    height: '50%',
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  text: {
    color: 'green',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  optionButton: {
    backgroundColor: 'rgba(255,255,255,0.8)',
    padding: 15,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
    borderRadius: 10,
  },
  optionText: {
    fontSize: 24,
    color: 'black',
  },
  
})