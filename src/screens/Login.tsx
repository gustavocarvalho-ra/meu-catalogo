import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Input from '../components/Input';
import Button from '../components/Button';
import { theme } from '../styles/theme';
import { useAppDispatch } from '../store/hooks';
import { login } from '../store/authSlice';
import { RootStackParamList } from '../types';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

interface FormErrors {
  username?: string;
  password?: string;
}

export default function Login({ navigation }: Props) {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errors, setErrors] = useState<FormErrors>({});
  const dispatch = useAppDispatch();

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!username.trim()) newErrors.username = 'Campo obrigatório';
    if (!password.trim()) newErrors.password = 'Campo obrigatório';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = (): void => {
    if (!validate()) return;

    if (username === 'admin' && password === '1234') {
      dispatch(
        login({ name: 'João da Silva', email: 'joaodasilva@gmail.com' })
      );
      navigation.replace('Main');
    } else {
      Alert.alert('Erro', 'Username ou senha inválidos');
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Bem-vindo de volta!</Text>
        <Text style={styles.headerSubtitle}>
          Insira seus dados para entrar na sua conta.
        </Text>
      </View>

      <View style={styles.card}>
        <Input
          label="Username"
          value={username}
          onChangeText={setUsername}
          placeholder="Digite seu username"
          error={errors.username}
          autoCapitalize="none"
        />
        <Input
          label="Senha"
          value={password}
          onChangeText={setPassword}
          placeholder="Digite sua senha"
          secureTextEntry
          error={errors.password}
        />
        <Button title="Entrar" onPress={handleLogin} />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary,
  },
  header: {
    paddingTop: 80,
    paddingHorizontal: theme.spacing.lg,
    paddingBottom: 40,
  },
  headerTitle: {
    fontSize: theme.fontSize.xxl,
    fontWeight: 'bold',
    color: theme.colors.white,
    marginBottom: theme.spacing.sm,
  },
  headerSubtitle: {
    fontSize: theme.fontSize.md,
    color: theme.colors.white,
    opacity: 0.9,
  },
  card: {
    flex: 1,
    backgroundColor: theme.colors.white,
    borderTopLeftRadius: theme.borderRadius.lg,
    borderTopRightRadius: theme.borderRadius.lg,
    padding: theme.spacing.lg,
  },
});