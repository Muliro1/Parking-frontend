import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { NavigationProp } from '@react-navigation/native';

type Props = {
  navigation: NavigationProp<any>;
};

const DailyParkingForm = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Vehicle Registration Number</Text>
      <TextInput style={styles.input} placeholder="Enter registration number" />
      <Text style={styles.label}>Parking Zone</Text>
      <TextInput style={styles.input} placeholder="Enter parking zone" />
      <Text style={styles.label}>Type of Vehicle</Text>
      <TextInput style={styles.input} placeholder="Enter type of vehicle" />
      <Button mode="contained" onPress={() => navigation.goBack()}>
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

export default DailyParkingForm;
