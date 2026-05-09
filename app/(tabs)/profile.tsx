import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Colors } from '@/constants/colors';
import { BorderRadius, FontSize, FontWeight, Spacing } from '@/constants/layout';
import { useAuth } from '@/hooks/useAuth';
import { CertType } from '@/lib/types';

export default function ProfileScreen() {
  const { profile, signOut, updateProfile } = useAuth();
  const [editing, setEditing]       = useState(false);
  const [fullName, setFullName]     = useState(profile?.fullName ?? '');
  const [certTarget, setCertTarget] = useState<CertType>(profile?.certTarget ?? 'BCBA');
  const [saving, setSaving]         = useState(false);

  const handleSave = async () => {
    setSaving(true);
    const { error } = await updateProfile({ fullName, certTarget });
    setSaving(false);
    if (error) {
      Alert.alert('Error', error);
    } else {
      setEditing(false);
    }
  };

  const handleSignOut = () => {
    Alert.alert('Cerrar sesión', '¿Estás seguro?', [
      { text: 'Cancelar', style: 'cancel' },
      { text: 'Salir', style: 'destructive', onPress: () => signOut().then(() => router.replace('/(auth)/login')) },
    ]);
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.screenTitle}>Mi perfil</Text>

        {/* Avatar / Info */}
        <Card style={styles.profileCard}>
          <View style={styles.avatarContainer}>
            <View style={styles.avatar}>
              <Text style={styles.avatarInitial}>
                {(profile?.fullName ?? 'U')[0].toUpperCase()}
              </Text>
            </View>
          </View>
          {!editing ? (
            <>
              <Text style={styles.profileName}>{profile?.fullName ?? '—'}</Text>
              <Text style={styles.profileEmail}>{profile?.email ?? '—'}</Text>
              <Text style={styles.profileCert}>🎯 Preparándose para: {profile?.certTarget ?? 'BCBA'}</Text>
              <Button title="Editar perfil" variant="outline" onPress={() => setEditing(true)} style={styles.editBtn} />
            </>
          ) : (
            <>
              <View style={styles.field}>
                <Text style={styles.label}>Nombre</Text>
                <TextInput
                  style={styles.input}
                  value={fullName}
                  onChangeText={setFullName}
                  autoCapitalize="words"
                />
              </View>
              <View style={styles.field}>
                <Text style={styles.label}>Certificación objetivo</Text>
                <View style={styles.certSelector}>
                  {(['BCBA', 'BCaBA'] as CertType[]).map((c) => (
                    <TouchableOpacity
                      key={c}
                      style={[styles.certOption, certTarget === c && styles.certOptionActive]}
                      onPress={() => setCertTarget(c)}
                    >
                      <Text style={[styles.certText, certTarget === c && styles.certTextActive]}>{c}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
              <View style={styles.editActions}>
                <Button title="Cancelar" variant="ghost" onPress={() => setEditing(false)} style={{ flex: 1 }} />
                <Button title="Guardar" onPress={handleSave} loading={saving} style={{ flex: 1 }} />
              </View>
            </>
          )}
        </Card>

        {/* Opciones */}
        <Card style={styles.optionsCard}>
          {[
            { icon: 'help-circle-outline' as const, label: 'Ayuda y soporte', onPress: () => {} },
            { icon: 'document-text-outline' as const, label: 'Términos y privacidad', onPress: () => {} },
            { icon: 'information-circle-outline' as const, label: 'Versión 1.0.0', onPress: () => {} },
          ].map(({ icon, label, onPress }) => (
            <TouchableOpacity key={label} style={styles.optionRow} onPress={onPress}>
              <Ionicons name={icon} size={20} color={Colors.textSecondary} />
              <Text style={styles.optionLabel}>{label}</Text>
              <Ionicons name="chevron-forward" size={16} color={Colors.textTertiary} />
            </TouchableOpacity>
          ))}
        </Card>

        <Button
          title="Cerrar sesión"
          variant="danger"
          onPress={handleSignOut}
          fullWidth
          style={styles.signOutBtn}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe:              { flex: 1, backgroundColor: Colors.background },
  scroll:            { padding: Spacing.lg, gap: Spacing.md },
  screenTitle:       { fontSize: FontSize.xxl, fontWeight: FontWeight.bold, color: Colors.textPrimary },
  profileCard:       { alignItems: 'center', gap: Spacing.sm },
  avatarContainer:   { marginBottom: Spacing.xs },
  avatar:            { width: 72, height: 72, borderRadius: 36, backgroundColor: Colors.primary, alignItems: 'center', justifyContent: 'center' },
  avatarInitial:     { fontSize: 32, fontWeight: FontWeight.bold, color: Colors.textInverse },
  profileName:       { fontSize: FontSize.xl, fontWeight: FontWeight.bold, color: Colors.textPrimary },
  profileEmail:      { fontSize: FontSize.sm, color: Colors.textSecondary },
  profileCert:       { fontSize: FontSize.sm, color: Colors.textSecondary, marginBottom: Spacing.xs },
  editBtn:           { alignSelf: 'stretch' },
  field:             { width: '100%', marginBottom: Spacing.sm },
  label:             { fontSize: FontSize.sm, fontWeight: FontWeight.medium, color: Colors.textSecondary, marginBottom: Spacing.xs },
  input:             { height: 46, borderWidth: 1.5, borderColor: Colors.border, borderRadius: BorderRadius.md, paddingHorizontal: Spacing.md, fontSize: FontSize.md, color: Colors.textPrimary, backgroundColor: Colors.surfaceAlt, width: '100%' },
  certSelector:      { flexDirection: 'row', gap: Spacing.sm },
  certOption:        { flex: 1, height: 42, borderRadius: BorderRadius.md, borderWidth: 1.5, borderColor: Colors.border, alignItems: 'center', justifyContent: 'center', backgroundColor: Colors.surfaceAlt },
  certOptionActive:  { borderColor: Colors.primary, backgroundColor: '#EEF2FF' },
  certText:          { fontWeight: FontWeight.medium, color: Colors.textSecondary },
  certTextActive:    { color: Colors.primary, fontWeight: FontWeight.bold },
  editActions:       { flexDirection: 'row', gap: Spacing.sm, width: '100%' },
  optionsCard:       { gap: 0 },
  optionRow:         { flexDirection: 'row', alignItems: 'center', gap: Spacing.md, paddingVertical: Spacing.md, borderBottomWidth: 1, borderBottomColor: Colors.divider },
  optionLabel:       { flex: 1, fontSize: FontSize.md, color: Colors.textPrimary },
  signOutBtn:        { marginTop: Spacing.sm },
});
