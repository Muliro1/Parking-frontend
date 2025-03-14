import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Redirect, Tabs } from 'expo-router';
import { ActivityIndicator, Pressable, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useAuth } from '../providers/auth-provider';
import { ToastProvider } from 'react-native-toast-notifications';
import AuthProvider from '../providers/auth-provider';
import QueryProvider from '../providers/query-provider';
import { StripeProvider } from '@stripe/stripe-react-native';
import NotificationProvider from '../providers/notification-provider';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';
import DailyParkingForm from './DailyParkingForm';
import ReservedParkingForm from './ReservedParkingForm';
import SeasonalParkingForm from './SeasonalParkingForm';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import { SafeAreaView } from 'react-native';

const Stack = createStackNavigator();

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();
  //const { session, mounting } = useAuth();
  //if (mounting) return <ActivityIndicator />;
  //if (!session) return <Redirect href='/auth' />;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
      }}>
        

        <Tabs.Screen
        name="index"
        options={{
          title: 'Pay Park ',
          headerShown: false,
          headerTintColor: 'green',
          tabBarIcon: ({ color }) => <TabBarIcon name="book" color={color} />,
          headerTitle: () => (
            <SafeAreaView style={{ alignItems: 'center' }}>
              <Text style={{ color: 'green', fontSize: 18 }}>Pay Park parking spots</Text>
            </SafeAreaView>
          ),
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
          
        }}
      />

<Tabs.Screen
        name="DailyParkingForm"
        options={{
          title: 'Daily',
          headerShown: true,
          headerTintColor: 'green',
          tabBarIcon: ({ color }) => <TabBarIcon name="book" color={color} />,
          headerTitle: () => (
            <SafeAreaView style={{ alignItems: 'center' }}>
              <Text style={{ color: 'green', fontSize: 18 }}>Daily parking spots</Text>
            </SafeAreaView>
          ),
          headerRight: () => (
            <Link href="/DailyParkingForm" asChild>
              <Pressable>
                {({ pressed }) => (
                    <FontAwesome
                      name="info-circle"
                      size={25}
                      color={Colors[colorScheme ?? 'light'].text}
                      style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                    />
                  )}
                </Pressable>
              </Link>
            ),
            
          }}
        />
        <Tabs.Screen
        name="ReservedParkingForm"
        options={{
          title: 'Reserved',
          headerShown: true,
          headerTintColor: 'green',
          tabBarIcon: ({ color }) => <TabBarIcon name="book" color={color} />,
          headerTitle: () => (
            <SafeAreaView style={{ alignItems: 'center' }}>
              <Text style={{ color: 'green', fontSize: 18 }}>Reserved parking spots</Text>
            </SafeAreaView>
          ),
          headerRight: () => (
            <Link href="/ReservedParkingForm" asChild>
              <Pressable>
                {({ pressed }) => (
                    <FontAwesome
                      name="info-circle"
                      size={25}
                      color={Colors[colorScheme ?? 'light'].text}
                      style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                    />
                  )}
                </Pressable>
              </Link>
            ),
            
          }}
        />
        <Tabs.Screen
        name="SeasonalParkingForm"
        options={{
          title: 'Seasonal',
          headerShown: true,
          headerTintColor: 'green',
          tabBarIcon: ({ color }) => <TabBarIcon name="book" color={color} />,
          headerTitle: () => (
            <SafeAreaView style={{ alignItems: 'center' }}>
              <Text style={{ color: 'green', fontSize: 18 }}>Seasonal parking spots</Text>
            </SafeAreaView>
          ),
          headerRight: () => (
            <Link href="/SeasonalParkingForm" asChild>
              <Pressable>
                {({ pressed }) => (
                    <FontAwesome
                      name="info-circle"
                      size={25}
                      color={Colors[colorScheme ?? 'light'].text}
                      style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                    />
                  )}
                </Pressable>
              </Link>
            ),
            
          }}
        />

      <Tabs.Screen
        name="auth"
        options={{
          title: 'Register',
          headerShown: false,
          headerTintColor: 'green',
          tabBarIcon: ({ color }) => <TabBarIcon name="book" color={color} />,
          headerRight: () => (
            <Link href="/auth/auth" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="book"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginLeft: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />

    </Tabs>
  </SafeAreaView>
  
  );
}
