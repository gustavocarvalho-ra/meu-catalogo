import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from 'react-native';
import { CompositeScreenProps } from '@react-navigation/native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { logout } from '../store/authSlice';
import Button from '../components/Button';
import { theme } from '../styles/theme';
import { MainTabParamList, RootStackParamList } from '../types';

// Combina os dois tipos de navegação
type Props = CompositeScreenProps<
  BottomTabScreenProps<MainTabParamList, 'Configuracoes'>,
  NativeStackScreenProps<RootStackParamList>
>;

export default function Configuracoes({ navigation }: Props) {
  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();

  const handleLogout = (): void => {
    Alert.alert(
      'Sair da conta',
      'Você tem certeza que deseja sair da conta?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Sair',
          style: 'destructive',
          onPress: () => {
            dispatch(logout());
            navigation.replace('Login'); // ✅ agora funciona
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://i.pravatar.cc/150?img=12' }}
          style={styles.avatar}
        />
        <Text style={styles.name}>{user?.name ?? 'Usuário'}</Text>
        <Text style={styles.email}>{user?.email ?? 'email@exemplo.com'}</Text>
      </View>

      <View style={styles.body}>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>👤  Meus dados</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>🔔  Notificações</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>📄  Termos de uso</Text>
        </TouchableOpacity>

        <View style={styles.logoutButton}>
          <Button title="Sair da conta" type="secondary" onPress={handleLogout} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  header: {
    backgroundColor: theme.colors.white,
    alignItems: 'center',
    paddingVertical: theme.spacing.xl,
    borderBottomLeftRadius: theme.borderRadius.lg,
    borderBottomRightRadius: theme.borderRadius.lg,
    elevation: 2,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: theme.spacing.md,
  },
  name: {
    fontSize: theme.fontSize.xl,
    fontWeight: 'bold',
    color: theme.colors.text,
  },
  email: {
    fontSize: theme.fontSize.md,
    color: theme.colors.textLight,
    marginTop: 4,
  },
  body: {
    padding: theme.spacing.lg,
  },
  option: {
    backgroundColor: theme.colors.white,
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.sm,
    marginBottom: theme.spacing.sm,
  },
  optionText: {
    fontSize: theme.fontSize.md,
    color: theme.colors.text,
  },
  logoutButton: {
    marginTop: theme.spacing.lg,
  },
});