import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function DashboardScreen() {
  const income = 12000;
  const expenses = 8500;
  const balance = income - expenses;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Dashboard</Text>

      <View style={styles.summaryBox}>
        <Text style={styles.label}>Total Income</Text>
        <Text style={[styles.amount, { color: 'green' }]}>₱{income.toLocaleString()}</Text>
      </View>

      <View style={styles.summaryBox}>
        <Text style={styles.label}>Total Expenses</Text>
        <Text style={[styles.amount, { color: 'red' }]}>₱{expenses.toLocaleString()}</Text>
      </View>

      <View style={styles.summaryBox}>
        <Text style={styles.label}>Remaining Balance</Text>
        <Text style={[styles.amount, { color: balance >= 0 ? 'green' : 'red' }]}>
          ₱{balance.toLocaleString()}
        </Text>
      </View>

      <View style={styles.analytics}>
        <Text style={styles.analyticsTitle}>Quick Insights</Text>
        <Text style={styles.tip}>
          💡 You spent {Math.round((expenses / income) * 100)}% of your income this month.
        </Text>
        <Text style={styles.tip}>
          📈 Try to save at least ₱{Math.round(income * 0.2)} next month.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f7f9fb',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  summaryBox: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 15,
    marginVertical: 8,
    elevation: 3,
  },
  label: {
    fontSize: 16,
    color: '#555',
  },
  amount: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  analytics: {
    marginTop: 25,
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    elevation: 3,
  },
  analyticsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  tip: {
    fontSize: 15,
    marginBottom: 6,
  },
});
