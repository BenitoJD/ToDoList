import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';
import { useNavigation } from '@react-navigation/native';

const PINAuthenticationScreen = () => {
  const navigation = useNavigation();

  const authenticateWithPIN = async () => {
    try {
      const result = await LocalAuthentication.authenticateAsync({
        promptMessage: 'Authenticate with PIN',
      });

      if (result.success) {
        // PIN authentication successful
        console.log('Authentication successful');
        navigation.navigate('ToDoList');
      } else {
        // PIN authentication failed or canceled
        console.error('Authentication failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Press the button to authenticate with PIN</Text>
      <Button title="Authenticate" onPress={authenticateWithPIN} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PINAuthenticationScreen;
