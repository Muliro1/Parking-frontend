import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { Button, PaperProvider } from 'react-native-paper';
import { NavigationProp } from '@react-navigation/native';
import { supabase } from '../lib/supabase'; // Adjust the path as needed

type Props = {
  navigation: NavigationProp<any>;
};

const DailyParkingForm = ({ navigation }: Props) => {
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [parkingZone, setParkingZone] = useState('');
  const [vehicleType, setVehicleType] = useState('');

  const handleSubmit = async () => {
    const { data, error } = await supabase
      .from('Daily Reservations')
      .insert([
        { Plate_number: registrationNumber, Parking_zone: parkingZone, Vehicle_type: vehicleType },
      ]);

    if (error) {
      console.error('Error inserting data:', error);
    } else {
      console.log('Data inserted successfully:', data);
      navigation.goBack();
    }
  };

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
          <Text style={styles.label}>Vehicle Registration Number</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter registration number"
            value={registrationNumber}
            onChangeText={setRegistrationNumber}
          />
          <Text style={styles.label}>Parking Zone</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter parking zone"
            value={parkingZone}
            onChangeText={setParkingZone}
          />
          <Text style={styles.label}>Type of Vehicle</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter type of vehicle"
            value={vehicleType}
            onChangeText={setVehicleType}
          />
          <Button mode="contained" onPress={handleSubmit}>
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
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: 'green', // Change font color to green
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 16,
  },
  buttonContainer: {
    marginTop: 16,
  },
});

export default DailyParkingForm;