// Login.js
import React, { useState } from 'react';
import { View, StyleSheet, Alert, TouchableOpacity, ScrollView } from 'react-native';
import { Input, Button, Text } from '@rneui/themed';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig'; // make sure this file exists and is configured

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Missing Info', 'Please enter both email and password.');
      return;
    }

    try {
      setLoading(true);
      
      await signInWithEmailAndPassword(auth, email, password);
      Alert.alert('Welcome Back!', 'You have successfully logged in.');
      navigation.navigate('Dashboard');
    } catch (error) {
      let errorMessage = 'Login failed. Please check your credentials.';

      if (error.code === 'auth/invalid-email') {
        errorMessage = 'Invalid email format.';
      } else if (error.code === 'auth/user-not-found') {
        errorMessage = 'No account found with that email.';
      } else if (error.code === 'auth/wrong-password') {
        errorMessage = 'Incorrect password.';
      }

      Alert.alert('Error', errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text h3 style={styles.header}>Welcome Back</Text>
      <Text style={styles.subText}>Log in to track your finances</Text>

      <Input
        placeholder="Email Address"
        leftIcon={{ type: 'feather', name: 'mail' }}
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      <Input
        placeholder="Password"
        leftIcon={{ type: 'feather', name: 'lock' }}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Button
        title="Login"
        onPress={handleLogin}
        loading={loading}
        buttonStyle={styles.button}
      />

      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.link}>Forgot Password?</Text>
      </TouchableOpacity>

      <Text style={styles.footerText}>
        Don’t have an account?{' '}
        <Text style={styles.link} onPress={() => navigation.navigate('SignUp')}>
          Sign Up
        </Text>
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f6f9fc',
    padding: 25,
    justifyContent: 'center',
  },
  header: {
    textAlign: 'center',
    color: '#2d3436',
    marginBottom: 10,
  },
  subText: {
    textAlign: 'center',
    marginBottom: 25,
    color: '#636e72',
  },
  button: {
    backgroundColor: '#1e88e5',
    borderRadius: 10,
    paddingVertical: 12,
    marginTop: 10,
  },
  link: {
    color: '#1e88e5',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 15,
  },
  footerText: {
    marginTop: 20,
    textAlign: 'center',
    color: '#2c3e50',
  },
});
