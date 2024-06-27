import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  ActivityIndicator
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoadingIndicator from '../LoadingIndicator';

const Login = (props) => {
  const { navigation } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loader, setLoader] = useState(false);

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };
  
/**
 * The handleLogin function validates the email and password, saves the user's email in AsyncStorage,
 * and navigates to the SpendingDashboard screen after a delay.
 * @returns The `handleLogin` function returns either after displaying an alert for invalid email or
 * password, or after setting the user's email in AsyncStorage and navigating to the
 * "SpendingDashboard" screen.
 */

  const handleLogin = async () => {
    if (!validateEmail(email)) {
      Alert.alert('Invalid Email', 'Please enter a valid email address');
      return;
    }
    if (password !== 'SOM@React@1') {
      Alert.alert('Invalid Password', 'The password you entered is incorrect');
      return;
    }

    try {
      setLoader(true);
      await AsyncStorage.setItem('userEmail', email);
      setTimeout(() => {
        setLoader(false);
        navigation.navigate("SpendingDashboard")
      }, 10000)
    } catch (error) {
      console.error('Failed to save email', error);
      setLoader(false);
    }
  };

  return (
    <>
      {!loader ?
        <View style={styles.container}>
          <Text style={styles.title}>Login</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <Button title="Login" onPress={handleLogin} />
        </View>
        : (
          <LoadingIndicator />
        )}
    </>
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
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
  },
});

export default Login;
