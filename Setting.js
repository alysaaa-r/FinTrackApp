// File: Setting.js - The main Settings screen component
import React, { useState, useEffect } from 'react';
import { View, Text, Switch, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
// Imports logic for two of the inline settings
import { savePreference, loadPreference, PREF_KEYS } from './app-preferences'; 
// Imports components for navigation
import { AppearanceToggle } from './Appearance'; 
import { NotificationToggle } from './Notification'; 

const SettingScreen = ({ navigation }) => {
    // State for non-navigated preferences displayed directly on this screen
    const [currency, setCurrency] = useState('USD'); // Updated by Currency.js screen
    
    // Function to load all initial settings when the screen mounts
    useEffect(() => {
        const fetchSettings = async () => {
            const savedCurrency = await loadPreference(PREF_KEYS.CURRENCY) || 'USD';
            setCurrency(savedCurrency);
        };
        fetchSettings();
    }, []);

    // Helper component for a clickable menu item
    const MenuItem = ({ title, subtitle, target }) => (
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate(target)}>
            <View>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{subtitle}</Text>
            </View>
            <Text style={styles.arrow}>&gt;</Text>
        </TouchableOpacity>
    );

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.sectionHeader}>ACCOUNT</Text>
            
            {/* Connects to Personal.js */}
            <MenuItem 
                title="Personal Information" 
                subtitle="View and edit your profile" 
                target="Personal" 
            />
            
            {/* Connects to Subscription.js */}
            <MenuItem 
                title="Subscription" 
                subtitle="Manage your subscription plan" 
                target="Subscription" 
            />

            <Text style={styles.sectionHeader}>PREFERENCES</Text>
            
            {/* Connects to app-preferences.js (for the screen itself) */}
            <MenuItem 
                title="App Preferences" 
                subtitle="Customize your app experience" 
                target="AppPreferencesScreen" // Refers to the dedicated app-preferences screen
            />

            {/* Connects to Currency.js (for navigation) and uses its data (currency state) */}
            <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Currency')}>
                <View>
                    <Text style={styles.title}>Currency</Text>
                    <Text style={styles.subtitle}>Choose your preferred currency</Text>
                </View>
                <Text style={styles.currencyValue}>{currency} &gt;</Text>
            </TouchableOpacity>

            {/* Connects to Notification.js for the toggle state and logic */}
            <NotificationToggle />

            {/* Connects to Appearance.js for the toggle state and logic */}
            <AppearanceToggle /> 
        </ScrollView>
    );
};

export default SettingScreen; // This is the component used in the main navigation
// ... styles ...
