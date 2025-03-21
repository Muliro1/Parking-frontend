import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { NavigationProp } from '@react-navigation/native';
import { supabase } from '../lib/supabase';

type Props = {
  navigation: NavigationProp<any>;
};

const ReservedParkingForm = ({ navigation }: Props) => {
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [parkingZone, setParkingZone] = useState('');
  const [vehicleType, setVehicleType] = useState('');

  const handleSubmit = async () => {
    const { data, error } = await supabase
      .from('reserved_parking')
      .insert([
        { registration_number: registrationNumber, parking_zone: parkingZone, vehicle_type: vehicleType },
      ]);

    if (error) {
      console.error('Error inserting data:', error);
    } else {
      console.log('Data inserted successfully:', data);
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 16,
    borderRadius: 4,
  },
});

export default ReservedParkingForm;