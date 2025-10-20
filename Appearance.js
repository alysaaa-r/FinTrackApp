// File: Appearance.js - A reusable component for the toggle
import React, { useState } from 'react';
import { View, Text, Switch } from 'react-native';
import { savePreference, PREF_KEYS } from './app-preferences'; 

export const AppearanceToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false); // Initial state based on loadPreference()

    const toggleSwitch = async () => {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);
        // CONNECTION: Saves the new theme mode persistently
        await savePreference(PREF_KEYS.THEME, newMode ? 'dark' : 'light'); 
    };

    return (
        <View style={styles.toggleItem}>
            <Text style={styles.title}>Appearance</Text>
            <Text style={styles.subtitle}>Switch between light & dark mode</Text>
            <Switch onValueChange={toggleSwitch} value={isDarkMode} />
        </View>
    );
};

// File: Notification.js - A reusable component for the toggle (similar structure)
import { savePreference, PREF_KEYS } from './app-preferences'; 

export const NotificationToggle = () => {
    const [isEnabled, setIsEnabled] = useState(true); 

    const toggleSwitch = async () => {
        const newState = !isEnabled;
        setIsEnabled(newState);
        // CONNECTION: Saves the new notification setting
        await savePreference(PREF_KEYS.NOTIFICATIONS, newState); 
    };

    return (
        <View style={styles.toggleItem}>
            <Text style={styles.title}>Notifications</Text>
            <Text style={styles.subtitle}>Enable or disable alerts</Text>
            <Switch onValueChange={toggleSwitch} value={isEnabled} />
        </View>
    );
};
// ... (The rest of the feature files like Personal.js, Subscription.js, and Currency.js would be dedicated screens/routes)
