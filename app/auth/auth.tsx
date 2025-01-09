import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import EditScreenInfo from '@/components/EditScreenInfo';

const auth = () => {
  return (
    <View style = {styles.container}>
      <Text style = {styles.title}>auth </Text>
      <EditScreenInfo path="app/auth.jjtsx" />
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
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: '80%',
    },
  });