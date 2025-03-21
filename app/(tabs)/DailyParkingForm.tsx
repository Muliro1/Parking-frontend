import React from 'react';
import { View, Text, TextInput, StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { Button, PaperProvider } from 'react-native-paper';
import { NavigationProp } from '@react-navigation/native';

type Props = {
  navigation: NavigationProp<any>;
};

const DailyParkingForm = ({ navigation }: Props) => {
  return (
    <PaperProvider>
            <ImageBackground
        source={{
          uri: 'https://images.pexels.com/photos/682933/pexels-photo-682933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        }}
        style={styles.backgroundImage}>
    <View style={styles.overlay} />
    <SafeAreaView style={styles.container}>
      <Text style={styles.label}>Vehicle Registration Number</Text>
      <TextInput style={styles.input} placeholder="Enter registration number" />
      <Text style={styles.label}>Parking Zone</Text>
      <TextInput style={styles.input} placeholder="Enter parking zone" />
      <Text style={styles.label}>Type of Vehicle</Text>
      <TextInput style={styles.input} placeholder="Enter type of vehicle" />
      <Button mode="contained" onPress={() => navigation.goBack()}>
        Submit
      </Button>
    </SafeAreaView>
    </ImageBackground>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: 'green'
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 16,
    borderRadius: 4,
  },
});

export default DailyParkingForm;
