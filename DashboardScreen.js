import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Dashboard from "./screens/DashboardScreen";

export default function App() {
  const [selectedTab, setSelectedTab] = useState("Dashboard");

  return (
    <View style={{ flex: 1 }}>
      {selectedTab === "Dashboard" && <Dashboard />}
      <View style={styles.bottomNav}>
        {[
          { name: "Dashboard", icon: "grid-outline" },
          { name: "Expenses", icon: "receipt-outline" },
          { name: "Budget", icon: "pie-chart-outline" },
          { name: "Settings", icon: "settings-outline" },
        ].map((tab) => (
          <TouchableOpacity key={tab.name} onPress={() => setSelectedTab(tab.name)} style={styles.navItem}>
            <Ionicons
              name={tab.icon}
              size={22}
              color={selectedTab === tab.name ? "#2EAAFF" : "#aaa"}
            />
            <Text style={[styles.navText, selectedTab === tab.name && { color: "#2EAAFF" }]}>
              {tab.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 12,
    backgroundColor: "#0F1E2D",
    borderTopWidth: 1,
    borderTopColor: "#1E2F3F",
  },
  navItem: { alignItems: "center" },
  navText: { color: "#aaa", fontSize: 12, marginTop: 4 },
});