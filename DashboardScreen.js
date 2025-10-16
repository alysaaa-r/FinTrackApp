import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function DashboardScreen() {
  const [selectedTab, setSelectedTab] = useState('Food');

  const categories = [
    { name: 'Food', spent: 750, limit: 1000 },
    { name: 'Transport', spent: 500, limit: 1000 },
    { name: 'Entertainment', spent: 250, limit: 1000 },
    { name: 'Utilities', spent: 900, limit: 1000 },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://randomuser.me/api/portraits/women/44.jpg' }}
          style={styles.profileImage}
        />
        <Text style={styles.title}>Dashboard</Text>
      </View>

      {/* Total Balance */}
      <View style={styles.balanceSection}>
        <Text style={styles.balanceLabel}>Total Balance</Text>
        <Text style={styles.balanceValue}>$12,345.67</Text>
      </View>

      {/* Expenses Card */}
      <View style={styles.expensesCard}>
        <Text style={styles.expensesTitle}>Expenses</Text>
        <Text style={styles.expensesValue}>$2,345</Text>
        <Text style={styles.expensesSubtext}>This Month ↓ 12%</Text>

        {/* Tabs */}
        <View style={styles.tabs}>
          {['Food', 'Transport', 'Fun', 'Utilities'].map(tab => (
            <TouchableOpacity key={tab} onPress={() => setSelectedTab(tab)}>
              <Text style={[styles.tabText, selectedTab === tab && styles.tabActive]}>
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Budget Summary */}
      <Text style={styles.summaryTitle}>Budget Summary</Text>
      <View style={styles.budgetSection}>
        {categories.map(cat => {
          const progress = (cat.spent / cat.limit) * 100;
          return (
            <View key={cat.name} style={styles.budgetItem}>
              <Text style={styles.budgetLabel}>{cat.name}</Text>
              <Text style={styles.budgetAmount}>${cat.spent} / ${cat.limit}</Text>
              <View style={styles.progressBarBackground}>
                <View style={[styles.progressBarFill, { width: `${progress}%` }]} />
              </View>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0F16',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  profileImage: {
    width: 45,
    height: 45,
    borderRadius: 25,
    marginRight: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  balanceSection: {
    alignItems: 'center',
    marginBottom: 30,
  },
  balanceLabel: {
    fontSize: 14,
    color: '#aaa',
  },
  balanceValue: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#fff',
  },
  expensesCard: {
    backgroundColor: '#13202C',
    padding: 20,
    borderRadius: 15,
    marginBottom: 30,
  },
  expensesTitle: {
    fontSize: 16,
    color: '#bbb',
  },
  expensesValue: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
  },
  expensesSubtext: {
    fontSize: 12,
    color: '#ff4d4d',
    marginBottom: 15,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tabText: {
    color: '#777',
    fontSize: 14,
  },
  tabActive: {
    color: '#00BFFF',
    fontWeight: 'bold',
  },
  summaryTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  budgetSection: {
    marginBottom: 50,
  },
  budgetItem: {
    marginBottom: 15,
  },
  budgetLabel: {
    fontSize: 14,
    color: '#aaa',
  },
  budgetAmount: {
    fontSize: 12,
    color: '#888',
  },
  progressBarBackground: {
    width: '100%',
    height: 6,
    backgroundColor: '#1E2A38',
    borderRadius: 5,
    marginTop: 5,
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#00BFFF',
    borderRadius: 5,
  },
});