import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ImageBackground, Alert, TouchableOpacity, SafeAreaView } from 'react-native';
import { supabase } from '../lib/supabase'
import { Provider as PaperProvider, Button } from 'react-native-paper';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    Alert.alert('Success', 'you have logged out');
  };

  return (
    <ImageBackground       source={{
      uri: 'https://images.pexels.com/photos/682933/pexels-photo-682933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    }}
    style={styles.backgroundImage}>
      <SafeAreaView style={styles.container}>
    <PaperProvider>

      <TouchableOpacity style={styles.button} onPress={handleSignOut}>
        <Text style={styles.buttonText}>Sign Out</Text>
      </TouchableOpacity>
    </PaperProvider>
    </SafeAreaView>
    </ImageBackground>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
    color: 'green',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 8,
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
});

export default LoginForm;
