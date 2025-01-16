import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome from '@expo/vector-icons/FontAwesome';




const app = () => {
 return (
    <View style={styles.container}>
      <Text style={styles.text}></Text>
    </View>
    
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
  button: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
})