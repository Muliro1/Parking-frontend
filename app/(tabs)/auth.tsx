import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import EditScreenInfo from '@/components/EditScreenInfo';

const auth = () => {
  return (
    <View style = {styles.container}>
      <Text style = {styles.title}>Auth</Text>
      <EditScreenInfo path="app/auth.tsx" />
    </View>
    
  )
}

export default auth

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'green',
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: '80%',
    },
    text: {
      color: 'green',
      fontSize: 42,
      fontWeight: 'bold',
      textAlign: 'center',
      backgroundColor: 'rgba(0,0,0,0.5)',
    }
  });
  