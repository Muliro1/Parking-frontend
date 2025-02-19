import { View, Text, StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import * as eva from '@eva-design/eva';
import { default as theme } from '../custom-theme.json';
import { Provider as PaperProvider, Button } from 'react-native-paper';

const App = () => {
  return (
    <PaperProvider>
      <ImageBackground
        source={{
          uri: 'https://images.pexels.com/photos/682933/pexels-photo-682933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        }}
        style={styles.backgroundImage}
      >
        <View style={styles.overlay} />
        <SafeAreaView style={styles.container}>
        <FontAwesome name="car" size={20} color="green" />
          <Text style={styles.text}>Pay Park</Text>
          <View style={styles.buttonContainer}>
          <Button mode="contained" style={styles.optionButton} onPress={() => {}}>
            Daily Parking
          </Button>
          <Button mode="contained" style={styles.optionButton} onPress={() => {}}>
            Seasonal Parking
          </Button>
          <Button mode="contained" style={styles.optionButton} onPress={() => {}}>
            Reserved Parking
          </Button>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </PaperProvider>
  );
};

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
    marginBottom: 20,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'space-around',
    width: '80%',
  },
  optionButton: {
    marginVertical: 10,
    width: '80%',
  },
});

export default App;