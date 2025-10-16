import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Alert } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; // For email, lock, etc.
import AntDesign from 'react-native-vector-icons/AntDesign'; // For Google and Apple logos

const SignUpPage = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {
    if (!email || !password || !confirmPassword) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }
    // Here you would integrate with your backend (e.g., Firebase, your API)
    console.log('Signing up with:', { email, password });
    Alert.alert('Success', 'Sign Up button pressed! (Implement actual sign up logic)');
    // navigation.navigate('Dashboard'); // Navigate to dashboard upon successful signup
  };

  const handleGoogleSignUp = () => {
    Alert.alert('Google Sign Up', 'Implement Google sign up logic here.');
  };

  const handleAppleSignUp = () => {
    Alert.alert('Apple Sign Up', 'Implement Apple sign up logic here.');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        {/* Placeholder for your FinTrack logo */}
        <MaterialIcons name="account-balance" size={40} color="#007AFF" /> 
        <Text style={styles.logoText}>FinTrack</Text>
      </View>

      <Text style={styles.welcomeText}>Create Your Account</Text>
      <Text style={styles.subtitle}>Join us to manage your finances</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email Address</Text>
        <View style={styles.inputWrapper}>
          <MaterialIcons name="mail-outline" size={20} color="#888" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="you@example.com"
            placeholderTextColor="#888"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <View style={styles.inputWrapper}>
          <MaterialIcons name="lock-outline" size={20} color="#888" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="••••••••"
            placeholderTextColor="#888"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Confirm Password</Text>
        <View style={styles.inputWrapper}>
          <MaterialIcons name="lock-outline" size={20} color="#888" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="••••••••"
            placeholderTextColor="#888"
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>Or continue with</Text>

      <View style={styles.socialButtonsContainer}>
        <TouchableOpacity style={styles.socialButton} onPress={handleGoogleSignUp}>
          <AntDesign name="google" size={20} color="white" style={styles.socialIcon} /> {/* Google logo from AntDesign */}
          <Text style={styles.socialButtonText}>Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton} onPress={handleAppleSignUp}>
          <AntDesign name="apple1" size={20} color="white" style={styles.socialIcon} /> {/* Apple logo from AntDesign */}
          <Text style={styles.socialButtonText}>Apple</Text>
        </TouchableOpacity>
      </View>

      {/* This link will try to navigate to 'LoginPage', which you haven't defined yet.
          For this example, let's just show an alert. */}
      <TouchableOpacity onPress={() => Alert.alert('Navigate', 'Go to Login Page (Implement navigation)')}>
        <Text style={styles.loginLink}>Already have an account? <Text style={{ color: '#007AFF', fontWeight: 'bold' }}>Log in</Text></Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1E', // Dark background color
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 50,
  },
  logoText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#B0B0B0',
    marginBottom: 30,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    color: '#B0B0B0',
    fontSize: 14,
    marginBottom: 8,
    marginLeft: 5,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3A3A3C', // Darker input background
    borderRadius: 10,
    paddingHorizontal: 15,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 50,
    color: 'white',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#007AFF', // Blue button
    width: '100%',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  orText: {
    color: '#B0B0B0',
    marginTop: 30,
    marginBottom: 20,
    fontSize: 16,
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  socialButton: {
    backgroundColor: '#3A3A3C',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingVertical: 15,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  socialIcon: {
    marginRight: 10,
  },
  socialButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginLink: {
    color: '#B0B0B0',
    fontSize: 16,
  },
});

export default SignUpPage;