import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Linking,
  Dimensions,
} from "react-native";

const { width, height } = Dimensions.get("window");

export default function Welcome() {
  return (
    <ImageBackground
      source={require("../assets/welbg.jpg")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <View style={styles.contentBox}>
          <Text style={styles.title}>Welcome to FinTrack</Text>
          <Text style={styles.subtitle}>
            Take control of your finances with our intuitive expense tracking
            and personalized budget planning tools.
          </Text>

          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginText}>Log In</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.signupButton}>
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
    width: width,
    height: height,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.55)",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 25,
  },
  contentBox: {
    width: "100%",
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 12,
  },
  subtitle: {
    color: "#E0E0E0",
    fontSize: 16,
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 40,
    paddingHorizontal: 10,
  },
  loginButton: {
    backgroundColor: "#00A6FF",
    width: "100%",
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: "center",
    marginBottom: 15,
    elevation: 3,
  },
  loginText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  signupButton: {
    borderWidth: 1.5,
    borderColor: "#00A6FF",
    width: "100%",
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: "center",
    marginBottom: 40,
  },
  signupText: {
    color: "#00A6FF",
    fontSize: 18,
    fontWeight: "600",
  },
  footer: {
    color: "#ccc",
    fontSize: 13,
    textAlign: "center",
    lineHeight: 20,
    width: "90%",
  },
  link: {
    color: "#00A6FF",
  },
});
