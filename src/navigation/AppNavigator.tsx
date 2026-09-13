import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Login from '../screens/Login';
import Home from '../screens/Home';
import ProductDetails from '../screens/ProductDetails';
import Configuracoes from '../screens/Configuracoes';
import { theme } from '../styles/theme';
import { MainTabParamList, RootStackParamList } from '../types';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<MainTabParamList>();

function MainTabs(): React.JSX.Element {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const iconName =
            route.name === 'Inicio' ? 'home-outline' : 'settings-outline';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.textLight,
        headerShown: false,
      })}
    >
      <Tab.Screen
        name="Inicio"
        component={Home}
        options={{ title: 'Início' }}
      />
      <Tab.Screen
        name="Configuracoes"
        component={Configuracoes}
        options={{ title: 'Configurações' }}
      />
    </Tab.Navigator>
  );
}

export default function AppNavigator(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Main" component={MainTabs} />
        <Stack.Screen
          name="ProductDetails"
          component={ProductDetails}
          options={{ headerShown: true, title: 'Detalhes do Produto' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}