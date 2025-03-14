import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, NavigationContainer, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { ToastProvider } from 'react-native-toast-notifications';
import AuthProvider from './providers/auth-provider';
import QueryProvider from './providers/query-provider';
import { StripeProvider } from '@stripe/stripe-react-native';
import NotificationProvider from './providers/notification-provider';
import { useColorScheme } from '@/components/useColorScheme';
import { SafeAreaView } from 'react-native-safe-area-context';
import DailyParkingForm from './(tabs)/DailyParkingForm';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const StackNav = createNativeStackNavigator();

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';
 
export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (<RootLayoutNav />)
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    
    <ToastProvider>
      <AuthProvider>
          <Stack>
            <Stack.Screen  name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
            <Stack.Screen name="auth/auth" options={{ headerShown: true, title:'Auth Screen', headerTintColor: 'green'}}/>
            <Stack.Screen name="(ParkingForms)" options={{ headerShown: true, title: 'Daily'}} />
          </Stack>
      </AuthProvider>
      </ToastProvider>
    
  );
}
 
