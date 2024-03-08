import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

const Bai3 = ({ label, placeholder, onChangeText, errorMessage }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        onChangeText={onChangeText}
        style={styles.input}
      />
      {errorMessage ? (
          <Text style={styles.error}>{errorMessage}</Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    marginBottom: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'lightgrey',
    paddingVertical: 8,
    paddingHorizontal: 12,
    fontSize: 16,
  },
  error: {
    color: 'red',
    fontSize: 14,
    marginLeft: 5,
  },
});

export default Bai3;
