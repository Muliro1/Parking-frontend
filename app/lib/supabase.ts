import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';
import * as SecureStore from 'expo-secure-store';
import * as aesjs from 'aes-js';
import 'react-native-get-random-values';
import { Database } from '../types/database.types';

const supabaseUrl = 'https://mxtsuukajupqgnldtyjq.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im14dHN1dWthanVwcWdubGR0eWpxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU5NTExOTMsImV4cCI6MjA1MTUyNzE5M30.dyl18BwbFwnOx543qwJMwpm3B8bDwgHdZc4OU5alxf8';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});

const SupabaseComponent: React.FC = () => {
  return null; // or any JSX you want to render
};

export default SupabaseComponent;
