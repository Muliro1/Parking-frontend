import { View, Text, StyleSheet, ImageBackground, SafeAreaView } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import * as eva from '@eva-design/eva';
import { default as theme } from '../custom-theme.json'; 
import { Provider as PaperProvider, Button } from 'react-native-paper';




const app = () => {
 return (
  <ImageBackground       source={{
    uri: 'https://images.pexels.com/photos/682933/pexels-photo-682933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  }}
  style={styles.backgroundImage}>
  <PaperProvider>
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}></Text>
      <Button mode="contained" onPress={() => console.log('Pressed')}>
            Press me
      </Button>
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
  text: {
    color: 'green',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  
})