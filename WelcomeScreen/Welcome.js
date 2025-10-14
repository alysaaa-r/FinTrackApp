import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Linking,
} from "react-native";

export default function Welcome({ navigation }) {
  return (
    <ImageBackground
      source={require("../assets/signup.png")} // your image here
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.title}>Welcome to FinTrack</Text>
          <Text style={styles.subtitle}>
            Take control of your finances with our intuitive expense tracking
            and personalized budget planning tools.
          </Text>

          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => navigation.navigate("Login")} // optional for future screens
          >
            <Text style={styles.loginText}>Log In</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.signupButton}
            onPress={() => navigation.navigate("SignUp")} // optional for future screens
          >
            <Text style={styles.signupText}>Sign Up</Text>
          </TouchableOpacity>

          <Text style={styles.footer}>
            By continuing, you agree to our{" "}
            <Text
              style={styles.link}
              onPress={() => Linking.openURL("https://yourapp.com/terms")}
            >
              Terms of Service
            </Text>{" "}
            and{" "}
            <Text
              style={styles.link}
              onPress={() => Linking.openURL("https://yourapp.com/privacy")}
            >
              Privacy Policy
            </Text>.
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "85%",
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    color: "#ccc",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 40,
  },
  loginButton: {
    backgroundColor: "#00A6FF",
    width: "100%",
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: "center",
    marginBottom: 15,
  },
  loginText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  signupButton: {
    borderWidth: 1,
    borderColor: "#1E90FF",
    width: "100%",
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: "center",
    marginBottom: 40,
  },
  signupText: {
    color: "#1E90FF",
    fontSize: 18,
    fontWeight: "600",
  },
  footer: {
    color: "#aaa",
    fontSize: 14,
    textAlign: "center",
    width: "90%",
  },
  link: {
    color: "#00A6FF",
  },
});
