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
import { CertType } from '@/lib/types';

export default function RegisterScreen() {
  const [fullName, setFullName]   = useState('');
  const [email, setEmail]         = useState('');
  const [password, setPassword]   = useState('');
  const [certTarget, setCertTarget] = useState<CertType>('BCBA');
  const [loading, setLoading]     = useState(false);
  const { signUp } = useAuth();

  const handleRegister = async () => {
    if (!fullName || !email || !password) {
      Alert.alert('Campos requeridos', 'Por favor completa todos los campos.');
      return;
    }
    if (password.length < 6) {
      Alert.alert('Contraseña débil', 'La contraseña debe tener al menos 6 caracteres.');
      return;
    }
    setLoading(true);
    const { error } = await signUp(email.trim(), password, fullName.trim());
    setLoading(false);

    if (error) {
      Alert.alert('Error al registrarse', error);
    } else {
      Alert.alert(
        '¡Registro exitoso!',
        'Revisa tu correo para confirmar tu cuenta.',
        [{ text: 'Entendido', onPress: () => router.replace('/(auth)/login') }]
      );
    }
  };

  return (
    <LinearGradient colors={[Colors.primary, Colors.primaryDark]} style={styles.gradient}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <ScrollView contentContainerStyle={styles.scroll} keyboardShouldPersistTaps="handled">
          <View style={styles.header}>
            <Text style={styles.logoText}>ABA<Text style={styles.logoAccent}>Genius</Text></Text>
            <Text style={styles.subtitle}>Crea tu cuenta gratuita</Text>
          </View>

          <Card style={styles.card}>
            <Text style={styles.title}>Registro</Text>

            <View style={styles.field}>
              <Text style={styles.label}>Nombre completo</Text>
              <TextInput
                style={styles.input}
                value={fullName}
                onChangeText={setFullName}
                placeholder="Tu nombre"
                placeholderTextColor={Colors.textTertiary}
                autoCapitalize="words"
              />
            </View>

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
                placeholder="Mínimo 6 caracteres"
                placeholderTextColor={Colors.textTertiary}
                secureTextEntry
              />
            </View>

            {/* Selector de certificación */}
            <View style={styles.field}>
              <Text style={styles.label}>¿Qué certificación buscas?</Text>
              <View style={styles.certSelector}>
                {(['BCBA', 'BCaBA'] as CertType[]).map((cert) => (
                  <TouchableOpacity
                    key={cert}
                    style={[styles.certOption, certTarget === cert && styles.certOptionActive]}
                    onPress={() => setCertTarget(cert)}
                  >
                    <Text style={[styles.certText, certTarget === cert && styles.certTextActive]}>
                      {cert}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            <Button
              title="Crear cuenta"
              onPress={handleRegister}
              loading={loading}
              fullWidth
              style={styles.button}
            />

            <View style={styles.footer}>
              <Text style={styles.footerText}>¿Ya tienes cuenta? </Text>
              <Link href="/(auth)/login" asChild>
                <TouchableOpacity>
                  <Text style={styles.footerLink}>Inicia sesión</Text>
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
  gradient:      { flex: 1 },
  container:     { flex: 1 },
  scroll:        { flexGrow: 1, justifyContent: 'center', padding: Spacing.lg },
  header:        { alignItems: 'center', marginBottom: Spacing.xl },
  logoText:      { fontSize: 38, fontWeight: FontWeight.bold, color: Colors.textInverse },
  logoAccent:    { color: '#A5B4FC' },
  subtitle:      { marginTop: Spacing.xs, color: '#C7D2FE', fontSize: FontSize.md },
  card:          { borderRadius: BorderRadius.xl },
  title:         { fontSize: FontSize.xxl, fontWeight: FontWeight.bold, color: Colors.textPrimary, marginBottom: Spacing.lg },
  field:         { marginBottom: Spacing.md },
  label:         { fontSize: FontSize.sm, fontWeight: FontWeight.medium, color: Colors.textSecondary, marginBottom: Spacing.xs },
  input:         {
    height: 48,
    borderWidth: 1.5,
    borderColor: Colors.border,
    borderRadius: BorderRadius.md,
    paddingHorizontal: Spacing.md,
    fontSize: FontSize.md,
    color: Colors.textPrimary,
    backgroundColor: Colors.surfaceAlt,
  },
  certSelector:    { flexDirection: 'row', gap: Spacing.sm },
  certOption:      {
    flex: 1,
    height: 44,
    borderRadius: BorderRadius.md,
    borderWidth: 1.5,
    borderColor: Colors.border,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.surfaceAlt,
  },
  certOptionActive: { borderColor: Colors.primary, backgroundColor: '#EEF2FF' },
  certText:         { fontSize: FontSize.md, fontWeight: FontWeight.medium, color: Colors.textSecondary },
  certTextActive:   { color: Colors.primary, fontWeight: FontWeight.bold },
  button:           { marginTop: Spacing.md },
  footer:           { flexDirection: 'row', justifyContent: 'center', marginTop: Spacing.lg },
  footerText:       { color: Colors.textSecondary, fontSize: FontSize.sm },
  footerLink:       { color: Colors.primary, fontSize: FontSize.sm, fontWeight: FontWeight.semibold },
});
