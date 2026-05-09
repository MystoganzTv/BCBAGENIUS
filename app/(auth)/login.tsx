import { LinearGradient } from 'expo-linear-gradient';
import { Link, router } from 'expo-router';
import React, { useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Colors } from '@/constants/colors';
import { BorderRadius, FontSize, FontWeight, Spacing } from '@/constants/layout';
import { useAuth } from '@/hooks/useAuth';

export default function LoginScreen() {
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading]   = useState(false);
  const { signIn } = useAuth();

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Campos requeridos', 'Por favor ingresa tu correo y contraseña.');
      return;
    }
    setLoading(true);
    const { error } = await signIn(email.trim(), password);
    setLoading(false);

    if (error) {
      Alert.alert('Error al iniciar sesión', error);
    } else {
      router.replace('/(tabs)');
    }
  };

  return (
    <LinearGradient colors={[Colors.primary, Colors.primaryDark]} style={styles.gradient}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <ScrollView contentContainerStyle={styles.scroll} keyboardShouldPersistTaps="handled">
          {/* Logo / Header */}
          <View style={styles.header}>
            <View style={styles.logoContainer}>
              <Text style={styles.logoText}>BCBA</Text>
              <Text style={styles.logoAccent}>Genius</Text>
            </View>
            <Text style={styles.subtitle}>Tu camino al BCBA & BCaBA</Text>
          </View>

          {/* Formulario */}
          <Card style={styles.card}>
            <Text style={styles.title}>Iniciar sesión</Text>

            <View style={styles.field}>
              <Text style={styles.label}>Correo electrónico</Text>
              <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                placeholder="tu@correo.com"
                placeholderTextColor={Colors.textTertiary}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>

            <View style={styles.field}>
              <Text style={styles.label}>Contraseña</Text>
              <TextInput
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                placeholder="••••••••"
                placeholderTextColor={Colors.textTertiary}
                secureTextEntry
              />
            </View>

            <Button
              title="Entrar"
              onPress={handleLogin}
              loading={loading}
              fullWidth
              style={styles.button}
            />

            <View style={styles.footer}>
              <Text style={styles.footerText}>¿No tienes cuenta? </Text>
              <Link href="/(auth)/register" asChild>
                <TouchableOpacity>
                  <Text style={styles.footerLink}>Regístrate</Text>
                </TouchableOpacity>
              </Link>
            </View>
          </Card>
        </ScrollView>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient:        { flex: 1 },
  container:       { flex: 1 },
  scroll:          { flexGrow: 1, justifyContent: 'center', padding: Spacing.lg },
  header:          { alignItems: 'center', marginBottom: Spacing.xl },
  logoContainer:   { flexDirection: 'row', alignItems: 'baseline' },
  logoText:        { fontSize: 42, fontWeight: FontWeight.bold, color: Colors.textInverse },
  logoAccent:      { fontSize: 42, fontWeight: FontWeight.bold, color: '#A5B4FC' },
  subtitle:        { marginTop: Spacing.xs, color: '#C7D2FE', fontSize: FontSize.md },
  card:            { borderRadius: BorderRadius.xl },
  title:           { fontSize: FontSize.xxl, fontWeight: FontWeight.bold, color: Colors.textPrimary, marginBottom: Spacing.lg },
  field:           { marginBottom: Spacing.md },
  label:           { fontSize: FontSize.sm, fontWeight: FontWeight.medium, color: Colors.textSecondary, marginBottom: Spacing.xs },
  input:           {
    height: 48,
    borderWidth: 1.5,
    borderColor: Colors.border,
    borderRadius: BorderRadius.md,
    paddingHorizontal: Spacing.md,
    fontSize: FontSize.md,
    color: Colors.textPrimary,
    backgroundColor: Colors.surfaceAlt,
  },
  button:          { marginTop: Spacing.md },
  footer:          { flexDirection: 'row', justifyContent: 'center', marginTop: Spacing.lg },
  footerText:      { color: Colors.textSecondary, fontSize: FontSize.sm },
  footerLink:      { color: Colors.primary, fontSize: FontSize.sm, fontWeight: FontWeight.semibold },
});
