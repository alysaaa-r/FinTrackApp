// File: app-preferences.js - Handles reading and writing settings data
import AsyncStorage from '@react-native-async-storage/async-storage'; // Actual dependency needed

// Define keys for specific settings
const PREF_KEYS = {
    THEME: 'theme_mode',
    CURRENCY: 'default_currency',
    NOTIFICATIONS: 'notifications_enabled',
    USER_PROFILE: 'user_profile',
    APP_PREFS: 'app_customizations'
};

// Generic function to load a preference
export const loadPreference = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key);
        return value !== null ? JSON.parse(value) : null;
    } catch (e) {
        console.error(`Error loading preference ${key}:`, e);
        return null;
    }
};

// Generic function to save a preference
export const savePreference = async (key, value) => {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
        console.error(`Error saving preference ${key}:`, e);
    }
};
